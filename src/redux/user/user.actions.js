import { UserActionTypes } from './user.types';

export const signUpStart = (userData) => {
    return {
        type: UserActionTypes.SIGN_UP_START,
        payload: userData
    }
}

export const signInAfterSignUp = (userData) => {
    return {
        type: UserActionTypes.SIGN_IN_AFTER_SIGN_UP,
        payload: userData
    }
}

export const signUpSuccess = (userAuthData) => {
    return {
        type: UserActionTypes.SIGN_UP_SUCCESS,
        payload: userAuthData
    }
}

export const signUpError = (error) => {
    return {
        type: UserActionTypes.SIGN_UP_ERROR,
        payload: error
    }
}