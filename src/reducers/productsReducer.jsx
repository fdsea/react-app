import React from 'react';

const beginProductsState = {
	editModal: {editState: false, id: 1},
	deleteModal: {deleteState: false, id: 1, delId: 1},
	dataProducts: [],
	getProduct : function () {
		if(this.editModal.editState){
			const isProduct = this.dataProducts.find((value)=>{
			 	if(value.id === this.editModal.id){return value;}
			 });
			return isProduct;
		}else{
			return {id:'', name: '', price:''}
		}
	}
};
const productsReducer = (state = beginProductsState, action) => {
	
		switch(action.type){
			case "OPEN_CREATE_MODAL_PRODUCTS": return state = {...state, openCreateModal: true};
			case "OPEN_EDIT_PRODUCTS" : return state = {...state, editModal: action.payload};
			case "CLOSE_EDIT_PRODUCTS" : return state = {...state, editModal: action.payload};
			case "OPEN_DELETE_PRODUCTS" : return state = {...state, deleteModal: action.payload};
			case "CLOSE_DELETE_PRODUCTS" : return state = {...state, deleteModal: action.payload};
			case "LOAD_DATA_PRODUCTS": return state = {...state, dataProducts: [...action.payload]};
			case "ADD_PRODUCTS": return state = {...state, dataProducts: [...state.dataProducts, ...action.payload]};
			case "EDIT_PRODUCTS": return state = {...state, dataProducts: [...state.dataProducts].map((value)=>{
				if(value.id == state.editModal.id){return action.payload}else{return value;}})};
			case "DELETE_PRODUCTS": return state = {...state, dataProducts: [
				...state.dataProducts.slice(0, state.deleteModal.id),
				...state.dataProducts.slice(state.deleteModal.id + 1)
				]
			};
			default: return state;
	}
};

export default productsReducer;