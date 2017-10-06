import React from 'react';
import { Route, Link} from 'react-router-dom';
import Customers from 'layouts/customers';
import Products from 'layouts/products';
import Invoices from 'layouts/invoices';


class PageContent extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<main>
			    <Route exact path="/customers" component={Customers} />
				<Route path="/invoices" component={Invoices} />
				<Route path="/products" component={Products} />
			</main>
		);
	}
}
export default PageContent;