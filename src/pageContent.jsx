import React from 'react';
import { Route, Link} from 'react-router-dom';
import Customers from 'layouts/customers';
import Products from 'layouts/products';
import Invoices from 'layouts/invoices';
import EditInvoice from './layouts/EditInvoice'
import store from './store';


class PageContent extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<main>
			    <Route exact path="/" component={Customers} />
				<Route path="/invoices" component={Invoices} />
				<Route path="/products" component={Products} />
				<Route path="/customers" component={Customers} />
				<Route path="/invoices/edit" component={EditInvoice} />
			</main>
		);
	}
}
export default PageContent;