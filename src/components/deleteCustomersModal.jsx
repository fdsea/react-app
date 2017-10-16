import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form } from 'react-bootstrap';
import store from './../store';

class DeleteCustomerModal extends React.Component{
  constructor(props){
    super(props);
    this.fetchAPI = this.fetchAPI.bind(this);
    this.deleteValue = this.deleteValue.bind(this);
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
        console.log('DELETE');
      })
      .catch((err) => console.log('database send err') )
    }
  deleteValue(){
    this.fetchAPI(`/api/customers/${store.getState().customersReducer.deleteModal.delId}`, 'delete');
    store.dispatch({type: "DELETE_CUSTOMERS", payload: 1})
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
            <Button onClick={this.deleteValue} bsStyle="danger">Yes</Button>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{store.dispatch({type: "CLOSE_DELETE_CUSTOMERS", payload: {deleteState: false}})}}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
  }
}

export default DeleteCustomerModal;