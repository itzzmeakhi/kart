import { takeLatest, all, call, put } from 'redux-saga/effects';

import { UserActionTypes } from './user.types'; 
import { 
        signUpSuccess, 
        signUpError,
        signInSuccess,
        signInError } from './user.actions';
import { auth } from './../../firebase';
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

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUpStartSaga);
}

export function* onSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInStartSaga);
}

export function* onCheckForUserAuth() {
    yield takeLatest(UserActionTypes.CHECK_FOR_USER_AUTH, checkForUserAuthSaga);
}

export function* userSagas() {
    yield all([
        call(onSignUpStart),
        call(onSignInStart),
        call(onCheckForUserAuth)
    ]);
}