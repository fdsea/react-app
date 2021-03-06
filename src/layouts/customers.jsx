import React from 'react';
import CustomersModal from './../components/customersModal';
import CustomersTable from './../components/customersTable';
import EditCustomersModal from './../components/editCustomersModal';
import DeleteCustomersModal from './../components/deleteCustomersModal';
import { Grid, Row, Col, Button, PageHeader } from 'react-bootstrap';
import store from './../store';

class Customers extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModal: false,
			showEditModal: false,
			showDeleteModal: false
		};
		this.showCustomersModal = this.showCustomersModal.bind(this);
		this.hideCustomersModal = this.hideCustomersModal.bind(this);	
	}
	showCustomersModal(){
		this.setState({
			showModal: true
		});
	}
	hideCustomersModal(){
		this.setState({
			showModal: false
		});
	}
	render(){
		return(
			<Grid>
				<Row className="show-grid">
      				<Col xs={12} md={8}>
      					<PageHeader style={{display: 'inline-block', borderBottom: 'none'}}>Customer list</PageHeader>
      					<Button 
     						onClick = {this.showCustomersModal}
      						style={{display: 'inline-block', marginLeft: '20px'}}>
      						Create
      					</Button>
      					<CustomersModal visible = {this.state.showModal} hide={this.hideCustomersModal} {...store.getState()}/>
      					<EditCustomersModal {...store.getState()}/>
      					<DeleteCustomersModal {...store.getState()}/>
      				</Col>
    			</Row>
    			<Row>
    				<CustomersTable {...store.getState()} />
    			</Row>
			</Grid>
		);
	}
}
export default Customers;
