import { CartActionTypes } from './cart.types';

import { addQuantityToProd, removeQuantityToProd } from './cart.utils';

const initialState = {
    cartItems: [],
    noOfItemsInCart: 0,
    error: null
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case CartActionTypes.ADD_TO_CART:
            const modifiedPayload = {
                ...action.payload,
                prodQuan: 1
            }
            return {
                ...state,
                cartItems: [...state.cartItems, modifiedPayload],
                noOfItemsInCart: state.noOfItemsInCart + 1,
                error: null
            }
        case CartActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(itm => itm.prodId !== action.payload),
                noOfItemsInCart: state.noOfItemsInCart - 1,
                error: null
            }
        case CartActionTypes.ADD_QUANTITY:
            const itemsAftrAdded = addQuantityToProd(state.cartItems, action.payload);
            return {
                ...state,
                cartItems: [...itemsAftrAdded],
                noOfItemsInCart: state.noOfItemsInCart + 1,
                error: null
            }
        case CartActionTypes.REMOVE_QUANTITY:
            const itemsAftrRemoved = removeQuantityToProd(state.cartItems, action.payload);
            return {
                ...state,
                cartItems: [...itemsAftrRemoved],
                noOfItemsInCart: state.noOfItemsInCart - 1,
                error: null
            }
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: [],
                noOfItemsInCart: 0,
                error: null
            }
        default:
            return state;
    }
}

export default cartReducer;