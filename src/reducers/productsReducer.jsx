import React from 'react';

const beginProductsState = {
	openCreateModal: false,
	openDeleteModal: false,
	dataProducts: []
};

const productsReducer = (state=beginProductsState, action) => {
		switch(action.type){
			case "OPEN_CREATE_MODAL_PRODUCTS": return state = {...state, openCreateModal: true};
			case "OPEN_DELETE" : return state = {...state, openDeleteModal: action.payload};
			case "CLOSE_DELETE" : return state = {...state, openDeleteModal: action.payload};
			case "LOAD_DATA_PRODUCTS": return state = {...state, dataProducts: action.payload };
			default: return state;

		}
};

export default productsReducer;