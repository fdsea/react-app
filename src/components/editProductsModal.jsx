
import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form } from 'react-bootstrap';
import store from './../store';


class EditProductsModal extends React.Component{
  constructor(props){
    super(props);
    this.state={
      editValue: {
        id: this.props.productsReducer.editModal.id,
        name: "",
        price: ""
      }
    };
    this.changeName = this.changeName.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.sendEditData = this.sendEditData.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
  }
  changeName(e){
    this.setState({
      editValue: {...this.state.editValue, name: e.target.value}
      
    });
  }
  changePrice(e){
    this.setState({
      editValue: {...this.state.editValue, price: e.target.value}
    }); 
  }
  fetchAPI(url, method, sendBody){
      fetch(url, {
          method: method,
          headers: {
            'Content-type': 'application/json'
          }, 
          body: JSON.stringify( sendBody )
        })
      .then((res) => res.json() )
      .then((data) => {
        console.log('PUT');
      })
      .catch((err) => console.log('database send err') )
    }
  sendEditData(){
    this.fetchAPI(`/api/products/${this.props.productsReducer.editModal.id}`, 'put', {
      id: this.props.productsReducer.editModal.id,
      name: this.name.value,
      price: this.price.value
    })
    store.dispatch({type: "EDIT_PRODUCTS", payload: {id: this.props.productsReducer.editModal.id, name: this.name.value, price: this.price.value}})
  }
 render(){
    return(
      <Modal show={this.props.productsReducer.editModal.editState}
               onHide={()=>{store.dispatch({type: "CLOSE_EDIT_PRODUCTS", payload: {editState: false, id: 1}})}}>
          <Modal.Header closeButton>
            <Modal.Title>Edit product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" 
                             className="editFormQuerySelectorProducts"
                             placeholder="Enter name"  
                             onChange = {this.changeName}
                             inputRef = {(input)=>{this.name = input}}  
                             defaultValue = {this.props.productsReducer.getProduct().name } />
                              
              </FormGroup>
              <FormGroup>
                <ControlLabel>Product</ControlLabel>
                <FormControl type="text"
                             className="editFormQuerySelectorProducts"
                             placeholder="Enter price"
                             onChange = {this.changePrice}
                             inputRef = {(input)=>{this.price = input}} 
                             defaultValue = {this.props.productsReducer.getProduct().price } />
              </FormGroup>
              <Button onClick = {this.sendEditData}>
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{store.dispatch({type: "CLOSE_EDIT_PRODUCTS", payload: {editState: false, id: 1}})}}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
  }
}
export default EditProductsModal;
