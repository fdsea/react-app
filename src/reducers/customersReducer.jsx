import React from 'react';

const beginCustomersState = {
	openCreateModal: false,
	openEditModal: false,
	editID: 1,
	deleteID: 1,
	editModal: {editState: false, id: 1},
	dataCustomers: [{id: 1, name: 'Helen', address: 'Lorem', phone: '23-23-23'}],
	getCustomer : (id) => {
		const isCustomer = this.dataCustomers.filter((value)=>{
			if(value.id === id){
				return value;
			}
		});
		return isCustomer; 
	}
};

const customersReducer = (state=beginCustomersState, action) => {
		switch(action.type){
			case "OPEN_CREATE_MODAL_CUSTOMERS": return state = {...state, openCreateModal: true};

			case "OPEN_EDIT" : return state = {...state, editModal: action.payload};//state = {...state, openEditModal: action.payload};

			case "CLOSE_EDIT" : return state = {...state, editModal: action.payload};//state = {...state, openEditModal: action.payload};

			case "LOAD_DATA_CUSTOMERS": return state = {...state, dataCustomers:[...state.dataCustomers, ...action.payload]};
			case "ADD_CUSTOMERS": return state = {...state, dataCustomers: [...state.dataCustomers, ...action.payload]};
			case "EDIT_CUSTOMERS": return state = {...state, editID: action.payload};
			case "DELETE_CUSTOMERS": return state = {...state, deleteID: action.payload};
			default: return state;

	}
};

export default customersReducer;