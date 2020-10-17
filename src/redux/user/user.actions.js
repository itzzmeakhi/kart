import { UserActionTypes } from './user.types';

// SIGN UP START ACTION

export const signUpStart = (userData) => {
    return {
        type: UserActionTypes.SIGN_UP_START,
        payload: userData
    }
}

// SIGN UP SUCCESS START ACTION

export const signUpSuccess = (userAuthData) => {
    return {
        type: UserActionTypes.SIGN_UP_SUCCESS,
        payload: userAuthData
    }
}

// SIGN UP ERROR ACTION

export const signUpError = (error) => {
    return {
        type: UserActionTypes.SIGN_UP_ERROR,
        payload: error
    }
}

// SIGN IN START ACTION

export const signInStart = (userData) => {
    return {
        type: UserActionTypes.EMAIL_SIGN_IN_START,
        payload: userData
    }
}

// SIGN IN SUCCESS ACTION

export const signInSuccess = (userAuthData) => {
    return {
        type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
        payload: userAuthData
    }
}

// SIGN IN ERROR ACTION

export const signInError = (error) => {
    return {
        type: UserActionTypes.EMAIL_SIGN_IN_ERROR,
        payload: error
    }
}

// CHECK FOR USER AUTHENTICATION ACTION

export const checkForUserAuth = () => {
    return {
        type: UserActionTypes.CHECK_FOR_USER_AUTH
    }
}