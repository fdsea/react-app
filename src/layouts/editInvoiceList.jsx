import React from 'react';
import { Grid, Row, Col, Button, PageHeader, FormGroup, ControlLabel, FormControl, Form, Table } from 'react-bootstrap';
import store from './../store';

class EditInvoiceCustomer extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Row>
				<Col xs = {12}>
					<PageHeader style={{ borderBottom: 'none'}}>Edit Invoice</PageHeader>
				</Col>
				<Col xs={12} md = {6}>
					<Form>
						<FormGroup controlId="discountValue">
							<ControlLabel> Discount (%) </ControlLabel>
							<FormControl></FormControl>
						</FormGroup>
						<FormGroup >
      						<ControlLabel>Customer</ControlLabel>
      						<FormControl placeholder="select">
      							<option value="select">select</option>
        						<option value="other">...</option>
      							</FormControl>
    					</FormGroup>
    					<FormGroup  style={{display: 'inline-block', width:"70%"}}>
      						<ControlLabel>Add Product</ControlLabel>
      						<FormControl  placeholder="select">
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
				</Col>
			</Row>
		);
	}
}

export default EditInvoiceCustomer;