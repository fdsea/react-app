import React from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Form, Radio, Table, Grid, Row, Col, PageHeader } from 'react-bootstrap';
import store from './../store';

class EditInvoiceCustomer extends React.Component{
	constructor(props) {
        super(props);
        
    }
    render(){
        return(
            <Grid>
                <Row>
                    <Col xs={6}>
                        <PageHeader style={{display: 'inline-block', borderBottom: 'none'}}>Edit Invoice</PageHeader>
                        <Form>
                            <FormGroup >
                                <ControlLabel> Discount (%) </ControlLabel>
                                <FormControl  defaultValue = {'0'}></FormControl>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Customers</ControlLabel>
                                <FormControl componentClass="select" placeholder="select"></FormControl>
                            </FormGroup>
                            <FormGroup  style={{display: 'inline-block', width:"70%"}} >
                                <ControlLabel>Add Product</ControlLabel>
                                <FormControl componentClass="select" placeholder="select"></FormControl>
                            </FormGroup>
                            <Button style={{display: 'inline-block', width:"27%", marginLeft: "2%"}}bsStyle="success">Add</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>    
                    <Col xs={6}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                           
                            </tbody>
                        </Table>
                        <h2> Total: <span  ref = {(span)=>{this.finalTotalValue = span}}>00:00</span></h2> 
                        <Button bsStyle="success">Edit Invoice</Button>
                    </Col>    
                </Row>
            </Grid>
        );
    }
}

export default EditInvoiceCustomer;
/*
            <Form>
                <FormGroup >
                    <ControlLabel> Discount (%) </ControlLabel>
                    <FormControl  defaultValue = {'0'}></FormControl>
                </FormGroup>
                <FormGroup >
                    <ControlLabel>Customers</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" value={this.state.customer}  >
                                
                        </FormControl>
                </FormGroup>
                <FormGroup  style={{display: 'inline-block', width:"70%"}} >
                    <ControlLabel>Add Product</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                               
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
                           
                </tbody>
            </Table>
            <h2> Total: <span  ref = {(span)=>{this.finalTotalValue = span}}>00:00</span></h2> 
            <Button bsStyle="success" onClick={this.loadInvoice}>Edit Invoice</Button>*/