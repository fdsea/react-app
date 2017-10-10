import React from 'react';

const beginCustomersState = {
	openCreateModal: false,
	editModal: {editState: false, id: 1},
	deleteModal: {deleteState: false, id: 1},
	dataCustomers: [],
	
	getCustomer : function () {
		if(this.editModal.editState){
			const isCustomer = this.dataCustomers.find((value)=>{
			 	if(value.id === this.editModal.id){return value;}
			 });
			return isCustomer;
		}else{
			return {id:'', name: '', address: '', photo:''}
		}
	}
};
const customersReducer = (state = beginCustomersState, action) => {
	
		switch(action.type){
			case "OPEN_CREATE_MODAL_CUSTOMERS": return state = {...state, openCreateModal: true};
			case "OPEN_EDIT_CUSTOMERS" : return state = {...state, editModal: action.payload};
			case "CLOSE_EDIT_CUSTOMERS" : return state = {...state, editModal: action.payload};
			case "OPEN_DELETE_CUSTOMERS" : return state = {...state, deleteModal: action.payload};
			case "CLOSE_DELETE_CUSTOMERS" : return state = {...state, deleteModal: action.payload};
			case "LOAD_DATA_CUSTOMERS": return state = {...state, dataCustomers: [...action.payload]};
			case "ADD_CUSTOMERS": return state = {...state, dataCustomers: [...state.dataCustomers, ...action.payload]};
			case "EDIT_CUSTOMERS": return state = {...state, dataCustomers: [...state.dataCustomers].map((value)=>{
				if(value.id == state.editModal.id){return action.payload}else{return value;}})};
			case "DELETE_CUSTOMERS": return state = {...state, dataCustomers: [
				...state.dataCustomers.slice(0, state.deleteModal.id),
				...state.dataCustomers.slice(state.deleteModal.id + 1)
				]
			};
			default: return state;
	}
};

export default customersReducer;
