import React from 'react';
import { Modal, Button } from 'react-bootstrap';


class CustomersModal extends React.Component{
	constructor(props){
		super(props);
	}
  render() {
    return (
      <div>
        <Modal show={this.props.visible} onHide={this.props.hide}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.hide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CustomersModal;