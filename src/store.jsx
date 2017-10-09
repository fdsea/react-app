import { createStore } from 'redux';
import { combineReducers } from 'redux';
import  productsReducer  from './reducers/productsReducer';
import  customersReducer  from './reducers/customersReducer';

const reducer = combineReducers({productsReducer, customersReducer});

const store = createStore(reducer);
//console.log(store.getState());
export default store;