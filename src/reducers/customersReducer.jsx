import React from 'react';

const beginCustomersState = {
	openCreateModal: false,
	editModal: {editState: false, id: 1},
	dataCustomers: [{id: 1, name: 'Helen', address: 'Lorem', phone: '23-23-23'}],
	getCustomer : function () {
		const isCustomer = this.dataCustomers.find((value)=>{
			if(value.id === this.editModal.id){
				return value;
			}
		});
		return isCustomer; 
	}
};

const customersReducer = (state = beginCustomersState, action) => {
		switch(action.type){
			case "OPEN_CREATE_MODAL_CUSTOMERS": return state = {...state, openCreateModal: true};

			case "OPEN_EDIT" : return state = {...state, editModal: action.payload};//state = {...state, openEditModal: action.payload};

			case "CLOSE_EDIT" : return state = {...state, editModal: action.payload};//state = {...state, openEditModal: action.payload};

			case "LOAD_DATA_CUSTOMERS": return state = {...state, dataCustomers:[...state.dataCustomers, ...action.payload]};
			case "ADD_CUSTOMERS": return state = {...state, dataCustomers: [...state.dataCustomers, ...action.payload]};
			//case "EDIT_CUSTOMERS": return state = {...state, dataCustomers: [...state.dataCustomers].splice(action.payload, action.payload+1, {id: 1,name:"hello", address: 'e', phone: 'we')};
			case "DELETE_CUSTOMERS": return state = {...state, deleteID: action.payload};
			default: return state;

	}
};

export default customersReducer;