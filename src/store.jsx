import { createStore } from 'redux';
import { combineReducers } from 'redux';
import  productsReducer  from './reducers/productsReducer';
import  customersReducer  from './reducers/customersReducer';
import  invoicesReducer from './reducers/invoicesReducer';

const reducer = combineReducers({productsReducer, customersReducer, invoicesReducer});

const store = createStore(reducer);

export default store;