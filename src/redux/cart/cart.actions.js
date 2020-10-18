import { CartActionTypes } from './cart.types';

export const addToCart = (item) => {
    return {
        type: CartActionTypes.ADD_TO_CART,
        payload: item
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: CartActionTypes.REMOVE_FROM_CART,
        payload: itemId
    }
}

export const addQuantity = (itemId) => {
    return {
        type: CartActionTypes.ADD_QUANTITY,
        payload: itemId
    }
}

export const removeQuantity = (itemId) => {
    return {
        type: CartActionTypes.REMOVE_QUANTITY,
        payload: itemId
    }
}

export const clearCart = () => {
    return {
        type: CartActionTypes.CLEAR_CART
    }
}