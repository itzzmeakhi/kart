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
        default:
            return state;
    }
}

export default userReducer;