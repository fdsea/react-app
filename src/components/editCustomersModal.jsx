
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
  
  render(){
    return(
        <Modal show={this.props.customersReducer.editModal.editState} onHide={()=>{store.dispatch({type: "CLOSE_EDIT_CUSTOMERS", payload: {editState: false, id: 1}})}}>
          <Modal.Header closeButton>
            <Modal.Title>Edit customer {this.props.customersReducer.editModal.id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" 
                             className="editFormQuerySelector"
                             placeholder="Enter name"  
                             onChange = {this.changeName} 
                             defaultValue = {'yuytu'} />
                              
              </FormGroup>
              <FormGroup>
                <ControlLabel>Address</ControlLabel>
                <FormControl type="text"
                             className="editFormQuerySelector"
                             placeholder="Enter address" 
                             onChange = {this.changeAddress} 
                             defaultValue={'qweqweqe'} />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Phone</ControlLabel>
                <FormControl type="text"
                             className="editFormQuerySelector"
                             placeholder="Enter phone number"
                             onChange = {this.changePhone}
                             defaultValue = {'qweqeqwe'} />
              </FormGroup>
              <Button onClick = {()=>{
                let a = [...document.querySelectorAll('.editFormQuerySelector')].map((v)=>{return v.value});
                  store.dispatch({type: "EDIT_CUSTOMERS", payload: {id: this.props.customersReducer.editModal.id, name: a[0], address: a[1], phone: a[2]}})}}>
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
//if(!this.props.customersReducer.getCustomer().name) { return this.props.customersReducer.getCustomer().name}else{return 'weaSas'} } />