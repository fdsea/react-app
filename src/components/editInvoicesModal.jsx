import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form, Radio, Table } from 'react-bootstrap';
import store from './../store';

class EditInvoicesModal extends React.Component{
	constructor(){
		super();
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
      						<ControlLabel>Customer</ControlLabel>
      						<FormControl componentClass="select" placeholder="select">
      							<option value="select">select</option>
        						<option value="other">...</option>
      							</FormControl>
    					</FormGroup>
    					<FormGroup controlId="productSelectModal" style={{display: 'inline-block', width:"70%"}}>
      						<ControlLabel>Add Product</ControlLabel>
      						<FormControl componentClass="select" placeholder="select">
      							<option value="select">select</option>
        						<option value="other">...</option>
      							</FormControl>
    					</FormGroup>
    					<Button style={{display: 'inline-block', width:"27%", marginLeft: "2%"}}
    							bsStyle="success"
    					>Add</Button>
    				</Form>
    				<Table>
    					<thead>
    						<tr>
    							<th>#</th>
    							<th>Name</th>
    							<th>Price</th>
    							<th>Qty</th>
    						</tr>
    					</thead>
    					<tbody>
    						<tr>
    							<td>1</td>
    							<td>John</td>
    							<td>Price</td>
    							<td>
    								<FormGroup>
    									<FormControl></FormControl>
    								</FormGroup>
    							</td>
    						</tr>
    					</tbody>
    				</Table>
    				<h2>Total: 87.56 </h2>
          		</Modal.Body>
          		<Modal.Footer>
            		<Button onClick={()=>{store.dispatch({type: "CLOSE_INVOICES_MODAL", payload: false})}}>Close</Button>
          		</Modal.Footer>
        	</Modal>
		);
	}
}
export default EditInvoicesModal;