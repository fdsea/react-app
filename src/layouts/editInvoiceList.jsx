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
            discount: 0,
            editData: store.getState().invoicesReducer.editInvoice,
            total: []
        }
       this.spCell = this.spCell.bind(this);
       this.deleteQuanityCell = this.deleteQuanityCell.bind(this);
       this.addQuanityCell = this.addQuanityCell.bind(this);
       this.setCellId = this.setCellId.bind(this);
       this.changeDiscount = this.changeDiscount.bind(this);
       this.toMakeChanges = this.toMakeChanges.bind(this);
    }
    componentWillMount(){
        const products = this.state.editData.products.map((value)=>{
            return {price: value.price, quanity: value.quanity}
        });
        this.setState({
            total: [...products]
        })
    }
    spCell(){
       let products = this.state.editData.products.map((value, index)=>{
            return <QuanityCell quanity={value.quanity} {...value} num={index} key={index.toString()} setCellId={this.setCellId} deleteBtn={true} deleteQuanity = {this.deleteQuanityCell}/>
        });
       return products;
     }
     deleteQuanityCell(e){
        this.setState({
           editData: {...this.state.editData, products: [
               ...this.state.editData.products.slice(0, +e.target.getAttribute('data-delete-btn')),
               ...this.state.editData.products.slice(+e.target.getAttribute('data-delete-btn') + 1)
            ]},
            total: [...this.state.total.slice(0, +e.target.getAttribute('data-delete-btn')),
                    ...this.state.total.slice(+e.target.getAttribute('data-delete-btn') + 1)
            ]
        })
     }
     addQuanityCell(){
        store.getState().productsReducer.dataProducts.find((value)=>{
            if(value.name == this.productValue.value){
                 this.setState({
                    editData: {...this.state.editData, products: [...this.state.editData.products, {name: value.name, price: value.price, quanity: 1}]},
                    total: [...this.state.total, {price: value.price, quanity: 1}]
                }) 
            }
        }) 
     }
     setCellId(e){
        this.setState({
            editData: {...this.state.editData , products: [...this.state.editData.products].map((value, index)=>{
                if(index === +e.target.getAttribute('data-id')){
                    return {...value, quanity: +e.target.value}
                }else{
                    return {...value}
                }
            }) 
        },
            total: [...this.state.total].map((value, index)=>{
                if(index === +e.target.getAttribute('data-id')){
                    return {...value, quanity: +e.target.value}
                }else{
                    return {...value}
                }
            })
        });
    }
    changeDiscount(e){
        this.setState({
            discount: +e.target.value
        })
    }
    toMakeChanges(){
        store.dispatch({
            type: "EDIT_INVOICE",
            payload: {
                id: this.state.editData.id,
                name: this.state.editData.name,
                products: this.state.editData.products,
                discount: this.state.discount,
                total: this.finalTotalValue.innerText
            }
        })
    }
    render(){
       console.log(store.getState().invoicesReducer.dataInvoices);
        return(
            <Grid>
                <Row>
                    <Col xs={6}>
                        <PageHeader style={{display: 'inline-block', borderBottom: 'none'}}>Edit Invoice</PageHeader>
                        <Form>
                            <FormGroup >
                                <ControlLabel> Discount (%) </ControlLabel>
                                <FormControl  defaultValue = {this.state.editData.discount} onChange={this.changeDiscount} inputRef={(input)=>{this.discountValue = input}}></FormControl>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Customers</ControlLabel>
                                <FormControl defaultValue = {this.state.editData.name} placeholder="customer name"></FormControl>
                            </FormGroup>
                            <FormGroup  style={{display: 'inline-block', width:"70%"}} >
                                <ControlLabel>Add Product</ControlLabel>
                                <FormControl componentClass="select" placeholder="select" inputRef = {(input)=>{this.productValue = input}}>
                                    {
                                        store.getState().productsReducer.dataProducts.map((value, index)=>{
                                            return <AllProductsForSelect key = {index.toString()} product = {value.name} />
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
                        <h2> Total: 
                            <span ref = {(span)=>{this.finalTotalValue = span}}>{
                                !this.state.total.length ? '0.00' : this.state.total.map((value, index) => {
                                    return +value.price * +value.quanity - +value.price * +value.quanity * this.state.discount / 100
                                }).reduce((a, b)=> a + b).toFixed(2)
                            }
                        </span>
                        </h2> 
                        <Button bsStyle="success"
                                onClick = {this.toMakeChanges}

                        >Edit Invoice</Button>
                       <Link style={{color: '#fff', textDecoration: 'none'}} 
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
