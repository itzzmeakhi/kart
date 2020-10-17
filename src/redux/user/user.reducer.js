import { UserActionTypes } from './user.types';

const initialState = {
    loggedInUser: null,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case UserActionTypes.SIGN_UP_SUCCESS:
        case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                loggedInUser: action.payload,
                error: null
            }
        case UserActionTypes.SIGN_UP_ERROR:
        case UserActionTypes.EMAIL_SIGN_IN_ERROR:
            return {
                ...state,
                loggedInUser: null,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;