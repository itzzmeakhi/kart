import { createStore } from 'redux';

import rootReducer from './redux/root.reducer';

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
}