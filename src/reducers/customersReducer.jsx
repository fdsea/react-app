import React from 'react';

const beginCustomersState = {
	openCreateModal: false,
	dataCustomers: [{id: 1, name: 'Helen', address: 'Lorem', phone: '23-23-23'}]
};

const customersReducer = (state=beginCustomersState, action) => {
		switch(action.type){
			case "OPEN_CREATE_MODAL_CUSTOMERS": return state = {...state, openCreateModal: true};
			case "LOAD_DATA_CUSTOMERS": return state = {...state, dataCustomers:[...state.dataCustomers, ...action.payload]};
			case "ADD_CUSTOMERS": return state = {...state, dataCustomers: [...state.dataCustomers, ...action.payload]};
			default: return state;

	}
};

export default customersReducer;