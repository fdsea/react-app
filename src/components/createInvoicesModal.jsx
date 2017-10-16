import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form, Radio, Table } from 'react-bootstrap';
import store from './../store';
import AllCustomersForSelect from './allCustomersForSelect';
import AllProductsForSelect from './allProductsForSelect';
import QuantityCell from './quantityCell';

class CreateInvoicesModal extends React.Component{
	constructor(){
		super();
		this.state={
			id: '',
			customer: '',
			productName: '',
      		productPrice: '',
      		productQuantity: '',
			products: [],
			discount: 0,
      		total: [],
      		finalTotal: ''   
		};
		this.changeCustomer = this.changeCustomer.bind(this);
		this.changeProduct = this.changeProduct.bind(this);
		this.addQuantityCell = this.addQuantityCell.bind(this);
		this.spCell = this.spCell.bind(this);
    	this.changeDiscount = this.changeDiscount.bind(this);
    	this.setCellId = this.setCellId.bind(this);
    	this.clearFields = this.clearFields.bind(this);
    	this.loadInvoice = this.loadInvoice.bind(this);
	}
	changeCustomer(e){
		this.setState({
			customer: e.target.value
		});
	}
	changeProduct(e){
    this.setState({
      productName: e.target.value
    });
    this.props.productsReducer.dataProducts.filter((value)=>{
      if(e.target.value == value.name){
        this.setState({
          productPrice: +value.price
        });
      }
    });
	}
  	changeDiscount(e){
    	this.setState({
      		discount: +e.target.value
    	});

  	}
	addQuantityCell(){
    	this.props.productsReducer.dataProducts.filter((value)=>{
      		if(this.productValue.value == value.name){
        		this.setState({
        			customer: this.customerValue.value,
        			finalTotal: this.finalTotalValue.innerText,
          			productPrice: value.price,
          			products: [...this.state.products, {name: this.productValue.value, price: value.price, quantity: 1}],
          			total: [...this.state.total, {price: value.price, quantity: 1}]
        		});
      		}
    	});
  	}
  	clearFields(){
  		this.setState({
			id: '',
			customer: '',
			productName: '',
      		productPrice: '',
			products: [],
			discount: 0,
      		total: [],
      		finalTotal: ''
  		})
  	}
  	loadInvoice(){
  		if(this.state.products.length === 0){
          alert('Please, select and add product!');
      }else{
  		store.dispatch({
  			type: "CREATE_NEW_INVOICE",
  			payload: [{
  				id: this.props.invoicesReducer.dataInvoices.length+1,
  				name: this.state.customer,
  				products: this.state.products,
  				discount: this.state.discount,
  				total: this.finalTotalValue.innerText
  			}]
  		})
  		setTimeout(()=>{
        	this.clearFields();
      	},1000);
     }
  	}
  	setCellId(e){
  		this.setState({
  			products: [...this.state.products].map((value, index)=>{
  				if(index === +e.target.getAttribute('data-id')){
  					return {...value, quantity: +e.target.value}
  				}else{
  					return {...value}
  				}
  			}),
  			total: [...this.state.total].map((value, index)=>{
  				if(index === +e.target.getAttribute('data-id')){
  					return {...value, quantity: +e.target.value}
  				}else{
  					return {...value}
  				}
  			})
  		});
  	}
	 spCell(){
	   let products = this.state.products.map((value, index)=>{
    		return <QuantityCell {...value} num={index} key={index} setCellId={this.setCellId}/>
    	});
	   return products;
	 }
	render(){

		return(
			<Modal show={this.props.invoicesReducer.editInvoicesModal} onHide={()=>{
				store.dispatch({type: "CLOSE_INVOICES_MODAL", payload: false});
			}}>
          		<Modal.Header closeButton>
            		<Modal.Title>Add Invoice</Modal.Title>
          		</Modal.Header>
          		<Modal.Body>
					<Form>
						<FormGroup controlId="discountValueModal">
							<ControlLabel> Discount (%) </ControlLabel>
							<FormControl onChange={this.changeDiscount} defaultValue = {'0'}></FormControl>
						</FormGroup>
						<FormGroup controlId="customerSelectModal">
      						<ControlLabel>Customers</ControlLabel>
      						<FormControl componentClass="select" placeholder="select" value={this.state.customer} onChange={this.changeCustomer} inputRef={(input) => {this.customerValue = input}}>
      							{
      								this.props.customersReducer.dataCustomers.map((value, index, arr)=>{
      							
      									return <AllCustomersForSelect key={index.toString()} customer = {value.name}/>
      								})
      							}
      						</FormControl>
    					</FormGroup>
    					<FormGroup controlId="productSelectModal" style={{display: 'inline-block', width:"70%"}} >
      						<ControlLabel>Add Product</ControlLabel>
      						<FormControl componentClass="select" placeholder="select" onChange={this.changeProduct} inputRef={(input) => {this.productValue = input}}>
      							{
      								this.props.productsReducer.dataProducts.map((value, index, arr)=>{
      	
      									return <AllProductsForSelect key={index.toString()} product = {value.name} />
      								})
      							}
      							</FormControl>
    					</FormGroup>
    					<Button style={{display: 'inline-block', width:"27%", marginLeft: "2%"}}
    							bsStyle="success"
    	             			onClick = {this.addQuantityCell}
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
    							(this.state.products.length === 0) ? (<tr><td><h3>No Products</h3></td></tr>) : this.spCell()
    						}
    					</tbody>
    				</Table>
    				<h2> Total: <span className = "finalTotalCreateModal" ref = {(span)=>{this.finalTotalValue = span}}>{
              
                  !this.state.total.length ? '0.00' : this.state.total.map((value, index) => {
                  	  return value.price * value.quantity - value.price * value.quantity * this.state.discount / 100 
                  }).reduce((a, b)=> a + b).toFixed(2) 

              } </span></h2> 
            
    				<Button bsStyle="success" onClick={this.loadInvoice}>Create New Invoice</Button>
          		</Modal.Body>
          		<Modal.Footer>
            		<Button onClick={()=>{store.dispatch({type: "CLOSE_INVOICES_MODAL", payload: false})}}>Close</Button>
          		</Modal.Footer>
        	</Modal>
		);
	}
}
export default CreateInvoicesModal;