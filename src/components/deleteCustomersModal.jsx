import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form } from 'react-bootstrap';
import store from './../store';

class DeleteCustomerModal extends React.Component{

  constructor(props){
    super(props);

  }

  render(){
    return(
        <Modal show={this.props.customersReducer.deleteModal.deleteState} onHide={()=>{
        	store.dispatch({type: "CLOSE_DELETE_CUSTOMERS", payload: {deleteState: false}});
        }}>
          <Modal.Header closeButton>
            <Modal.Title>Delete customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>You shure?</h3>
            <Button onClick={()=>{store.dispatch({type: "CLOSE_DELETE_CUSTOMERS", payload: {deleteState: false}})}} bsStyle="success" style={{padding: '0.5em 2em', marginRight: '1em'}} >No</Button>
            <Button onClick={()=>{store.dispatch({type: "DELETE_CUSTOMERS", payload: 1//this.props.customersReducer.deleteModal.id
          })}} bsStyle="danger">Yes</Button>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{store.dispatch({type: "CLOSE_DELETE_CUSTOMERS", payload: {deleteState: false}})}}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
  }
}

export default DeleteCustomerModal;