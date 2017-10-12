import React from 'react';
import { Grid, Row, Col, PageHeader, Button } from 'react-bootstrap';
import InvoicesTable from './../components/invoicesTable'
import store from './../store';
import EditInvoiceCustomer from './editInvoiceList';
import { Route, Link, Switch} from 'react-router-dom';
import AllInvoices from './../components/allInvoices';
import DeleteInvoiceModal from './../components/deleteInvoicesModal'

class Invoices extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<Grid>
			<Switch>
				<Route exact path='/invoices' component = { AllInvoices } />
				<Route path="/invoices/:number/edit" component = { EditInvoiceCustomer } />
			</Switch>
			<DeleteInvoiceModal {...store.getState()}/>
			</Grid>	
		);
	}
};
 export default Invoices;