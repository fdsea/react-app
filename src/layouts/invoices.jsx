import React from 'react';
import { Grid, Row, Col, PageHeader, Button } from 'react-bootstrap';
import InvoicesTable from './../components/invoicesTable'
import store from './../store';
import EditInvoiceCustomer from './editInvoice';
import { Route, Link, Switch} from 'react-router-dom';
import AllInvoices from './../components/allInvoices';

class Invoices extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		console.log(store.getState());
		return (
			<Grid>
				<Switch>
					<Route exact path='/invoices' component = { AllInvoices } />
					<Route path="/invoices/:number/edit" component = { EditInvoiceCustomer } />
				</Switch>	
			</Grid>	
		);
	}
};
 export default Invoices;