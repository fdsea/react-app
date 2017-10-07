import { createStore } from 'redux';
import { productsReducer } from './reducers/productsReducer';
import { customersReducer } from './reducers/customersReducer';

const store = createStore(productsReducer);

export default store;