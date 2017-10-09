
import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form } from 'react-bootstrap';
import store from './../store';
console.log(store.getState());
class EditCustomersModal extends React.Component{

  constructor(props){
    super(props);
    this.state={
      editValue: {}
    };
    this.filterArray = this.filterArray.bind(this);
  }

  filterArray(){
    this.props.customersReducer.dataCustomers.filter((value)=>{
      if(value.id == this.props.customersReducer.editModal.id){
        this.setState({
          editValue:{
            id: value.id,
            name: value.name,
            address: value.address,
            phone: value.phone
          }
       });   
      }
    });
  }
 
 componentDidMount() {
   this.filterArray();
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
                <FormControl type="text" placeholder="Enter name" defaultValue = {this.state.editValue.name} />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Address</ControlLabel>
                <FormControl type="text" placeholder="Enter address" defaultValue={this.state.editValue.address}/>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Phone</ControlLabel>
                <FormControl type="text" placeholder="Enter phone number" defaultValue = {this.state.editValue.phone}/>
              </FormGroup>
              <Button>
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