
import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form } from 'react-bootstrap';
import store from './../store';
console.log(store.getState());


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
    this.setValue = this.setValue.bind(this);
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
  setValue(){
    let a = [...document.querySelectorAll('.editFormQuerySelector')].map((v)=>{return v.value});
    console.log(a);
  }
  render(){
    
    return(
        <Modal show={this.props.customersReducer.editModal.editState} onHide={()=>{store.dispatch({type: "CLOSE_EDIT", payload: {editState: false, id: 1}})}}>
          <Modal.Header closeButton>
            <Modal.Title>Edit customer {this.props.customersReducer.editModal.id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" className="editFormQuerySelector" placeholder="Enter name" ref="name" onChange = {this.changeName} defaultValue = {this.props.customersReducer.getCustomer().name} />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Address</ControlLabel>
                <FormControl type="text" className="editFormQuerySelector" placeholder="Enter address" ref="address" onChange = {this.changeAddress} defaultValue={this.props.customersReducer.getCustomer().address} />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Phone</ControlLabel>
                <FormControl type="text" className="editFormQuerySelector" placeholder="Enter phone number" ref="phone" onChange = {this.changePhone} defaultValue = {this.props.customersReducer.getCustomer().phone} />
              </FormGroup>
              <Button onClick = {this.setValue}>
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{store.dispatch({type: "CLOSE_EDIT", payload: {editState: false, id: 1}})}}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
  }
}

export default EditCustomersModal;