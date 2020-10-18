import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { productsSagas } from './products/products.sagas';
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(productsSagas),
        call(cartSagas)
    ])
}