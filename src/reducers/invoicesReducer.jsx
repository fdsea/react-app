
import React from 'react';

const beginInvoicesState = {
		editInvoicesModal: false,
		totalAdd: [],
		discontAdd: 0,
		dataInvoices:[
		{
			id: 1,
			name: 'John',
			products: [
				{
					name: 'tea',
					price: 40.45,
					quanity: 1
				},
				{
					name: 'teaasd',
					price: 40.42131235,
					quanity: 123
				}
			],
			total: function(){
				return +this.products.map((value)=>(value.price * value.quanity) - ((value.price * value.quanity) / 100 * this.discount)).reduce( (a, b) => a + b).toFixed(2);
			},
			discount: 20
		}
	]
};

const invoicesReducer = (state = beginInvoicesState, action) => {

	switch(action.type){
		case "OPEN_INVOICES_MODAL" : return state = {...state, editInvoicesModal: action.payload};
		case "CLOSE_INVOICES_MODAL" : return state = {...state, editInvoicesModal: action.payload};
		case "TOTAL" : return state = {...state, totalAdd: ![...state.totalAdd, ...action.payload].length ? '00.00' : [...state.totalAdd, ...action.payload].reduce((a,b)=>{
						return (a - a * state.discontAdd / 100) + (b - b * state.discontAdd / 100);
					}) 

		};
		case "DISCONT": return state = {...state, discontAdd: action.payload};
		case "LOAD_DATA_INVOICES" : return state = {...state, dataInvoices: [...state.dataInvoices, ...action.payload]};
		case "CREATE_NEW_INVOICE" : return state = {...state, dataInvoices: [...state.dataInvoices, ...action.payload]};
		case "EDIT_INVOICE" : return state = {...state};

		default: return state = {...state}; 
	}

}

export default invoicesReducer;