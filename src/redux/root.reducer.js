import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import productsReducer from './products/products.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer
})

export default rootReducer;