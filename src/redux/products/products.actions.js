import { ProductActionTypes } from './products.types';

export const getAllProductsStart = () => {
    return {
        type: ProductActionTypes.GET_ALL_PRODUCTS_START
    }
}

export const getAllProductsSuccess = (productsData) => {
    return {
        type: ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS,
        payload: productsData
    }
}

export const getAllProductsError = (error) => {
    return {
        type: ProductActionTypes.GET_ALL_PRODUCTS_ERROR,
        payload: error
    }
}