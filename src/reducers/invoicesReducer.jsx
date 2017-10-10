
import React from 'react';

const beginInvoicesState = {
		editInvoicesModal: false
};

const invoicesReducer = (state = beginInvoicesState, action) => {

	switch(action.type){
		case "OPEN_INVOICES_MODAL" : return state = {...state, editInvoicesModal: action.payload};
		case "CLOSE_INVOICES_MODAL" : return state = {...state, editInvoicesModal: action.payload};
		default: return state = {...state}; 
	}

}

export default invoicesReducer;