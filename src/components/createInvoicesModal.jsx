import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form, Radio, Table } from 'react-bootstrap';
import store from './../store';
import AllCustomersForSelect from './allCustomersForSelect';
import AllProductsForSelect from './allProductsForSelect';
import QuanityCell from './quanityCell';

class CreateInvoicesModal extends React.Component{
	constructor(){
		super();
		this.state={
			id:'',
			customer: 'sad',
			products: [
			//{name: 'wqewqe', price: 'qweqwe', quality: 'qweqwe'}
			],
			discount: 'asdsd',
			price: ''
		}
		this.changeCustomer = this.changeCustomer.bind(this);
		this.changeProduct = this.changeProduct.bind(this);
		this.addQuanityCell = this.addQuanityCell.bind(this);
		this.spCell = this.spCell.bind(this);
	}
	changeCustomer(e){
		this.setState({
			customer: e.target.value
		});
	}
	changeProduct(e){
		this.setState({
			products: [...this.state.products, {name: e.target.value, price: 23, quanity: '1'}]
		});
	}
	addQuanityCell(){

	}
	spCell(){
	let products = this.state.products.map((value, index)=>{
    			return <QuanityCell {...value} num={index} key={index} />
    	});
	return products;
	}
	render(){
		return(
			<Modal show={this.props.invoicesReducer.editInvoicesModal} onHide={()=>{
				store.dispatch({type: "CLOSE_INVOICES_MODAL", payload: false});
			}}>
          		<Modal.Header closeButton>
            		<Modal.Title>Add customer</Modal.Title>
          		</Modal.Header>
          		<Modal.Body>
					<Form>
						<FormGroup controlId="discountValueModal">
							<ControlLabel> Discount (%) </ControlLabel>
							<FormControl></FormControl>
						</FormGroup>
						<FormGroup controlId="customerSelectModal">
      						<ControlLabel>Customers</ControlLabel>
      						<FormControl componentClass="select" placeholder="select" value={this.state.customer} onChange={this.changeCustomer}>
      							{
      								this.props.customersReducer.dataCustomers.map((value, index, arr)=>{
      							
      									return <AllCustomersForSelect key={index.toString()} customer = {value.name}/>
      								})
      							}
      						</FormControl>
    					</FormGroup>
    					<FormGroup controlId="productSelectModal" style={{display: 'inline-block', width:"70%"}} >
      						<ControlLabel>Add Product</ControlLabel>
      						<FormControl componentClass="select" placeholder="select" onChange={this.changeProduct}>
      							{
      								this.props.productsReducer.dataProducts.map((value, index, arr)=>{
      	
      									return <AllProductsForSelect key={index.toString()} product = {value.name} />
      								})
      							}
      							</FormControl>
    					</FormGroup>
    					<Button style={{display: 'inline-block', width:"27%", marginLeft: "2%"}}
    							bsStyle="success"
    	
    					>Add</Button>
    				</Form>
    				
    				<Table>
    					<thead>
    						<tr>
    							<th>Name</th>
    							<th>Price</th>
    							<th>Qty</th>
    						</tr>
    					</thead>
    					<tbody>
    						{
    							(this.state.products.length === 0) ? <tr><td><h3>No Products</h3></td></tr> : this.spCell()
    						}
    					</tbody>
    				</Table>
    				<h2>Total: 87.56 </h2>
    				<Button bsStyle="success">Create New Invoice</Button>
          		</Modal.Body>
          		<Modal.Footer>
            		<Button onClick={()=>{store.dispatch({type: "CLOSE_INVOICES_MODAL", payload: false})}}>Close</Button>
          		</Modal.Footer>
        	</Modal>
		);
	}
}
export default CreateInvoicesModal;