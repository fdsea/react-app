
import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form } from 'react-bootstrap';
import store from './../store';


class EditCustomersModal extends React.Component{
  constructor(props){
    super(props);
    this.state={
      editValue: {
        id: this.props.customersReducer.editModal.id,
        name: "",
        address: "",
        phone: ""
      }
    };
    this.changeName = this.changeName.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.sendEditData = this.sendEditData.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
  }
  changeName(e){
    this.setState({
      editValue: {...this.state.editValue, name: e.target.value}
      
    });
  }
  changeAddress(e){
    this.setState({
        editValue: {...this.state.editValue, address: e.target.value}
    });
  }
  changePhone(e){
    this.setState({
      editValue: {...this.state.editValue, phone: e.target.value}
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
      this.fetchAPI(`/api/customers/${this.props.customersReducer.editModal.id}`, 'put', {
        id: this.props.customersReducer.editModal.id,
        name: this.name.value,
        address: this.address.value,
        phone: this.phone.value
      })
      store.dispatch({type: "EDIT_CUSTOMERS", payload: {id: this.props.customersReducer.editModal.id, name: this.name.value, address: this.address.value, phone: this.phone.value}})
  }
  render(){
    return(
        <Modal show={this.props.customersReducer.editModal.editState} onHide={()=>{store.dispatch({type: "CLOSE_EDIT_CUSTOMERS", payload: {editState: false, id: 1}})}}>
          <Modal.Header closeButton>
            <Modal.Title>Edit customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" 
                             className="editFormQuerySelector"
                             placeholder="Enter name"  
                             onChange = {this.changeName}
                             inputRef = {(input)=>{this.name = input}} 
                             defaultValue = {this.props.customersReducer.getCustomer().name } />
                              
              </FormGroup>
              <FormGroup>
                <ControlLabel>Address</ControlLabel>
                <FormControl type="text"
                             className="editFormQuerySelector"
                             placeholder="Enter address" 
                             onChange = {this.changeAddress}
                             inputRef = {(input)=>{this.address = input}} 
                             defaultValue={this.props.customersReducer.getCustomer().address } />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Phone</ControlLabel>
                <FormControl type="text"
                             className="editFormQuerySelector"
                             placeholder="Enter phone number"
                             onChange = {this.changePhone}
                             inputRef = {(input)=>{this.phone = input}}
                             defaultValue = {this.props.customersReducer.getCustomer().phone} />
              </FormGroup>
              <Button onClick = {this.sendEditData}>
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{store.dispatch({type: "CLOSE_EDIT_CUSTOMERS", payload: {editState: false, id: 1}})}}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
  }
}
export default EditCustomersModal;