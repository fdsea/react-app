import React from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Form, Radio, Table, Grid, Row, Col, PageHeader } from 'react-bootstrap';
import store from './../store';
import { Link } from 'react-router-dom';
import AllProductsForSelect from './../components/allProductsForSelect';
import QuanityCell from './../components/quanityCell'

class EditInvoiceCustomer extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
            editData: store.getState().invoicesReducer.editInvoice
        }
       this.spCell = this.spCell.bind(this);
       this.deleteQuanityCell = this.deleteQuanityCell.bind(this);
       this.addQuanityCell = this.addQuanityCell.bind(this);
    }
    spCell(){
       let products = this.state.editData.products.map((value, index)=>{
            return <QuanityCell {...value} num={index} key={index} setCellId={this.setCellId} deleteBtn={true} deleteQuanity = {this.deleteQuanityCell}/>
        });
       return products;
     }
     deleteQuanityCell(e){
        console.log(+e.target.getAttribute('data-delete-btn'));
        this.setState({
           editData: {...this.state.editData, products: [
               ...this.state.editData.products.slice(0, +e.target.getAttribute('data-delete-btn')),
               ...this.state.editData.products.slice(+e.target.getAttribute('data-delete-btn') + 1)
            ]}
        })
     }
     addQuanityCell(){
        //console.log(store.getState().productsReducer.dataProducts);
        console.log(this.productValue.value);
        this.setState({
            editData : {...this.state.editData, products: [...this.state.editData.products, 
               store.getState().productsReducer.dataProducts.find((value)=>{
                if(value.name == this.productValue.value){
                    return value
                }
               })
            ]}
        })
        
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
                                <FormControl  defaultValue = {this.state.editData.discount}></FormControl>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Customers</ControlLabel>
                                <FormControl defaultValue = {this.state.editData.name} placeholder="customer name"></FormControl>
                            </FormGroup>
                            <FormGroup  style={{display: 'inline-block', width:"70%"}} >
                                <ControlLabel>Add Product</ControlLabel>
                                <FormControl componentClass="select" placeholder="select" inputRef = {(input)=>{this.productValue = input}}>
                                    {
                                        store.getState().productsReducer.dataProducts.map((value)=>{
                                            return <AllProductsForSelect product = {value.name} />
                                        })
                                    }
                                </FormControl>
                            </FormGroup>
                            <Button style={{display: 'inline-block', width:"27%", marginLeft: "2%"}} bsStyle="success" onClick={this.addQuanityCell}>Add</Button>
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
                                {
                                (this.state.editData.products.length === 0) ? (<tr><td><h3>No Products</h3></td></tr>) : this.spCell()
                            }
                            </tbody>
                        </Table>
                        <h2> Total: <span  ref = {(span)=>{this.finalTotalValue = span}}>00:00</span></h2> 
                        <Button bsStyle="success">Edit Invoice</Button>
                       <Link style={{color: '#fff', textDecoration: 'none'}} 
                             key = {(this.state.editData.id).toString()} 
                             to = "/invoices">
                        <Button  style={{display: 'block', marginTop: "1em"}}
                                 bsStyle="primary" 
                                 bsSize="small">back
                        </Button>
                        </Link>
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