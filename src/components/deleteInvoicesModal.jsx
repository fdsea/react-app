import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form } from 'react-bootstrap';
import store from './../store';

class DeleteInvoiceModal extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <Modal show={this.props.invoicesReducer.deleteModal.deleteState} onHide={()=>{
        	store.dispatch({type: "CLOSE_DELETE_INVOICES_MODAL", payload: {deleteState: false}})
        }}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Invoices</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>You shure?</h3>
            <Button bsStyle="success" style={{padding: '0.5em 2em', marginRight: '1em'}} onClick={()=>{store.dispatch({type: "CLOSE_DELETE_INVOICES_MODAL", payload: {deleteState: false}})}} >No</Button>
            <Button bsStyle="danger" onClick={()=>{store.dispatch({type: 'DELETE_INVOICE', payload: 1})}}>Yes</Button>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{store.dispatch({type: "CLOSE_DELETE_INVOICES_MODAL", payload: {deleteState: false}})}}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
  }
}

export default DeleteInvoiceModal;