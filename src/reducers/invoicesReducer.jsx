
import React from 'react';

const beginInvoicesState = {
		editInvoicesModal: false,
		totalAdd: [],
		discontAdd: 0,
		dataInvoices:[]
};

const invoicesReducer = (state = beginInvoicesState, action) => {
console.log(state.dataInvoices)
	switch(action.type){
		case "OPEN_INVOICES_MODAL" : return state = {...state, editInvoicesModal: action.payload};
		case "CLOSE_INVOICES_MODAL" : return state = {...state, editInvoicesModal: action.payload};
		case "LOAD_DATA_INVOICES" : return state = {...state, dataInvoices: [...state.dataInvoices, ...action.payload]};
		case "CREATE_NEW_INVOICE" : return state = {...state, dataInvoices: [...state.dataInvoices, ...action.payload]};
		case "EDIT_INVOICE" : return state = {...state};
		default: return state = {...state}; 
	}

}

export default invoicesReducer;