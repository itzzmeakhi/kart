import { takeLatest, all, call, put } from 'redux-saga/effects';

import { UserActionTypes } from './user.types'; 
import { signUpSuccess, signUpError,signInAfterSignUp } from './user.actions';
import { auth } from './../../firebase';
import { createUserDocument } from './../../firebase.utils';

export function* signUpStartSaga(actionData) {
    try {
        const { userName, userEmail, userPassword, userDOB } = actionData.payload;
        const { user } = yield auth.createUserWithEmailAndPassword(userEmail, userPassword);
        yield put(signInAfterSignUp({ userId: user.uid, userName, userEmail, userDOB }));
    } catch(err) {
        yield put(signUpError(err));
    }
}

export function* signUpSuccessSaga(actionData) {
    try {
        const userRef = yield call(createUserDocument, actionData.payload);
        const userSnapshot = yield userRef.get();
        yield put(signUpSuccess(userSnapshot.data()))
    } catch(err) {
        yield put(signUpError(err));
    }
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUpStartSaga);
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_IN_AFTER_SIGN_UP, signUpSuccessSaga);
}

export function* userSagas() {
    yield all([
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}