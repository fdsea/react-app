
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
                             defaultValue = {this.props.productsReducer.getProduct().name } />
                              
              </FormGroup>
              <FormGroup>
                <ControlLabel>Product</ControlLabel>
                <FormControl type="text"
                             className="editFormQuerySelectorProducts"
                             placeholder="Enter price"
                             onChange = {this.changePrice}
                             defaultValue = {this.props.productsReducer.getProduct().price } />
              </FormGroup>
              <Button onClick = {()=>{
                let a = [...document.querySelectorAll('.editFormQuerySelectorProducts')].map((v)=>{return v.value});
                  store.dispatch({type: "EDIT_PRODUCTS", payload: {id: this.props.productsReducer.editModal.id, name: a[0], price: a[1]}})}}>
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
