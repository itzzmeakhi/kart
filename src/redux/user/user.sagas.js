import { takeLatest, all, call, put } from 'redux-saga/effects';

import { UserActionTypes } from './user.types'; 
import { 
        signUpSuccess, 
        signUpError,
        signInSuccess,
        signInError,
        placeAnOrderSuccess,
        placeAnOrderError,
        signOutSuccess,
        signOutError } from './user.actions';
import { clearCart } from './../cart/cart.actions';
import { auth, firestore } from './../../firebase';
import { createUserDocument, getCurrentUser } from './../../firebase.utils';

// SIGN UP USER SAGA

export function* signUpStartSaga(actionData) {
    if(!actionData) return;
    try {
        const { userName, userEmail, userPassword, userDOB } = actionData.payload;
        const { user } = yield auth.createUserWithEmailAndPassword(userEmail, userPassword);
        const userRef = yield call(createUserDocument, { userId: user.uid, userName, userEmail, userDOB });
        const userSnapshot = yield userRef.get();
        yield put(signUpSuccess(userSnapshot.data()))
    } catch(err) {
        yield put(signUpError(err));
    }
}

// SIGN IN USER SAGA

export function* signInStartSaga(actionData) {
    if(!actionData) return;
    try {
        const { userEmail, userPassword } = actionData.payload;
        const { user } = yield auth.signInWithEmailAndPassword(userEmail, userPassword);
        const userRef = yield call(createUserDocument, { userId: user.uid });
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess(userSnapshot.data()));
    } catch(err) {
        yield put(signInError(err));
    }
}

// CHECK FOR USER AUTH SAGA

export function* checkForUserAuthSaga(actionData) {
    if(!actionData) return;
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        const userRef = yield call(createUserDocument, { userId: userAuth.uid });
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess(userSnapshot.data()));
    } catch(err) {
        yield put(signInError(err));
    }
}

// PLACE AN ORDER SAGA

export function* placeAnOrderStartSaga(actionData) {
    if(!actionData) return;
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        const userRef = yield call(createUserDocument, { userId: userAuth.uid });
        const userSnapshot = yield userRef.get(); 
        const userData = yield userSnapshot.data();
        const amount = actionData.payload.reduce((acc, itm) => acc + (itm.prodQuan * itm.prodPrice), 0);
        const orderData = {...actionData.payload};
        let orders = [];
        const date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
        if(userData.userOrders === undefined) {
            orders.push({ placedOn: date, amountPaid: amount, items: orderData });
        } else {
            orders = [...userData.userOrders];
            orders.push({ placedOn: date, amountPaid: amount, items: orderData });
        }
        yield firestore.doc(`users/${userData.userId}`).update({userOrders: [...orders]});
        yield put(clearCart());
        yield put(placeAnOrderSuccess(orders));
    } catch(err) {
        yield put(placeAnOrderError(err));
    }
}

// SIGN OUT SAGA

export function* signOutStartSaga() {
    console.log('Triggered')
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(err) {
        yield put(signOutError(err));
    }
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUpStartSaga);
}

export function* onSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInStartSaga);
}

export function* onCheckForUserAuth() {
    yield takeLatest(UserActionTypes.CHECK_FOR_USER_AUTH, checkForUserAuthSaga);
}

export function* onAddOrderStart() {
    yield takeLatest(UserActionTypes.PLACE_AN_ORDER_START, placeAnOrderStartSaga);
}

export function* onSignOutSaga() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutStartSaga);
}

export function* userSagas() {
    yield all([
        call(onSignUpStart),
        call(onSignInStart),
        call(onCheckForUserAuth),
        call(onAddOrderStart),
        call(onSignOutSaga)
    ]);
}