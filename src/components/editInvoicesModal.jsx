import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form, Radio } from 'react-bootstrap';
import store from './../store';

class EditInvoicesModal extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<Modal show={this.props.invoicesReducer.editInvoicesModal} onHide={()=>{
				store.dispatch({type: "CLOSE_INVOICES_MODAL", payload: false});
			}}>
          		<Modal.Header closeButton>
            		<Modal.Title>Add customer</Modal.Title>
          		</Modal.Header>
          		<Modal.Body>
            		<Form>
              			<FormGroup>
      				  		<ControlLabel>Name</ControlLabel>
      				  		<FormControl type="text" placeholder="Enter name"/>
    			    	</FormGroup>
              			<FormGroup>
      				  		<ControlLabel>Address</ControlLabel>
      				  		<FormControl type="text" placeholder="Enter address" />
    			    	</FormGroup>
              			<FormGroup>
      				  		<ControlLabel>Phone</ControlLabel>
      				  		<FormControl type="text" placeholder="Enter phone number" />
    		      		</FormGroup>
              			<Button >
                			Submit
              			</Button>
			      	</Form> 
          		</Modal.Body>
          		<Modal.Footer>
            		<Button onClick={()=>{store.dispatch({type: "CLOSE_INVOICES_MODAL", payload: false})}}>Close</Button>
          		</Modal.Footer>
        	</Modal>
		);
	}
}
export default EditInvoicesModal;