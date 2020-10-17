import { ProductActionTypes } from './products.types';

const initialState = {
    products: [],
    error: null
}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                error: null
            }
        case ProductActionTypes.GET_ALL_PRODUCTS_ERROR:
            return {
                ...state,
                products: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default productsReducer;