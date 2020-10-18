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
        case UserActionTypes.SIGN_OUT_ERROR:
            return {
                ...state,
                loggedInUser: null,
                error: action.payload
            } 
        case UserActionTypes.PLACE_AN_ORDER_SUCCESS:
            return {
                ...state,
                loggedInUser: {
                    ...state.loggedInUser,
                    userOrders: action.payload
                },
                error: null
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                loggedInUser: null,
                error: null
            }
        default:
            return state;
    }
}

export default userReducer;