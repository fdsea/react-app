import React from 'react';

const beginCustomersState = {
	openCreateModal: false,
	dataCustomers: []
};

const customersReducer = (state=beginCustomersState, action) => {
		switch(action.type){
			case "OPEN_CREATE_MODAL_CUSTOMERS": return state = {...state, openCreateModal: true};
			case "LOAD_DATA_CUSTOMERS": return state = {...state, dataCustomers: action.payload };
			default: return state;

		}
};

export default customersReducer;