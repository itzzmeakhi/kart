import { takeLatest, call, put, all } from 'redux-saga/effects';
import { 
        getAllProductsSuccess,
        getAllProductsError
    } from './products.actions';
import { ProductActionTypes } from './products.types';
import { firestore } from './../../firebase';

export function* getAllProductsStartSaga(actionData) {
    if(!actionData) return;
    try {
        const prodsRef = yield firestore.collection('products');
        const prodsSnapshot = yield prodsRef.get();
        const prods = yield prodsSnapshot.docs.map(prod => {
            return { prodId: prod.id, ...prod.data() }
        })
        yield put(getAllProductsSuccess(prods));
    } catch(err) {
        yield put(getAllProductsError(err));
    }
}

export function* onGetAllProductsStart() {
    yield takeLatest(ProductActionTypes.GET_ALL_PRODUCTS_START, getAllProductsStartSaga);
}

export function* productsSagas() {
    yield all([
        call(onGetAllProductsStart)
    ]);
}