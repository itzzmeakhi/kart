import { takeLatest, all, call } from 'redux-saga/effects';

import { CartActionTypes } from './cart.types';

export function* removeQuantitySaga(actionData) {
    if(!actionData) return;
    yield call()
}

export function* onRemoveQuantity() {
    yield takeLatest(CartActionTypes.REMOVE_QUANTITY, removeQuantitySaga);
}

export function* cartSagas() {
    yield all([
      
    ])
}