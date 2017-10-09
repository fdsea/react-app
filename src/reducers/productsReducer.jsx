import React from 'react';

const beginProductsState = {
	openCreateModal: false,
	dataProducts: []
};

const productsReducer = (state=beginProductsState, action) => {
		switch(action.type){
			case "OPEN_CREATE_MODAL_PRODUCTS": return state = {...state, openCreateModal: true};
			
			case "LOAD_DATA_PRODUCTS": return state = {...state, dataProducts: action.payload };
			default: return state;

		}
};

export default productsReducer;