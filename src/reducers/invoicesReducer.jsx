
import React from 'react';

const beginInvoicesState = {
		editInvoicesModal: false,
		deleteModal: {deleteState: false, id: 1},
		totalAdd: [],
		discontAdd: 0,
		dataInvoices:[]
};

const invoicesReducer = (state = beginInvoicesState, action) => {

	switch(action.type){
		case "OPEN_INVOICES_MODAL" : return state = {...state, editInvoicesModal: action.payload};
		case "CLOSE_INVOICES_MODAL" : return state = {...state, editInvoicesModal: action.payload};
		case "OPEN_DELETE_INVOICES_MODAL" : return state = {...state, deleteModal: action.payload};
		case "CLOSE_DELETE_INVOICES_MODAL" : return state = {...state, deleteModal: action.payload};
		case "LOAD_DATA_INVOICES" : return state = {...state, dataInvoices: [...state.dataInvoices, ...action.payload]};
		case "CREATE_NEW_INVOICE" : return state = {...state, dataInvoices: [...state.dataInvoices, ...action.payload]};
		case "DELETE_INVOICE" : return state = {...state, dataInvoices: [
			...state.dataInvoices.slice(0, state.deleteModal.id),
			...state.dataInvoices.slice(state.deleteModal.id+1)
			]
		};
		case "EDIT_INVOICE" : return state = {...state};
		default: return state = {...state};

	}
}

export default invoicesReducer;