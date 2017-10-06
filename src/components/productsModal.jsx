import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


class ProductsModal extends React.Component{
	constructor(props){
		super(props);
	}
  render() {
    return (
      <div>
        <Modal show={this.props.visible} onHide={this.props.hide}>
          <Modal.Header closeButton>
            <Modal.Title>Add customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form >
              <FormGroup>
      				  <ControlLabel>Name</ControlLabel>
      				  <FormControl type="text" placeholder="Enter name"/>
    			    </FormGroup>
              <FormGroup>
      				  <ControlLabel>Price</ControlLabel>
      				  <FormControl type="text" placeholder="Enter price"/>
    			    </FormGroup>
              <Button type="submit">
                    Submit
              </Button>
			      </form> 
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.hide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ProductsModal;