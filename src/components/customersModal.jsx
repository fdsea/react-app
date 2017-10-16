import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form } from 'react-bootstrap';
import store from './../store';


class CustomersModal extends React.Component{
	constructor(props){
		super(props);
    this.state = {
      localId: 0,
      localNameValue: '',
      localAddressValue: '',
      localPhoneValue: ''
    };

    this.changeName = this.changeName.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.addCustomers = this.addCustomers.bind(this);
    this.clearFields = this.clearFields.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
	}
  changeName(e){
    this.setState({
      localNameValue: e.target.value
    });
  }
    changeAddress(e){
    this.setState({
      localAddressValue: e.target.value
    });
  }
    changePhone(e){
    this.setState({
      localPhoneValue: e.target.value
    });
  }
    clearFields(){
      this.setState({
        localNameValue: '',
        localAddressValue: '',
        localPhoneValue: ''
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
        console.log(JSON.stringify( sendBody ));
      })
      .catch((err) => console.log('database send err') )
    }
    addCustomers(){
      this.fetchAPI('/api/customers', 'post', {
              id: 1,
              name: this.state.localNameValue,
              address: this.state.localAddressValue,
              phone: this.state.localPhoneValue
      });

        store.dispatch({type: "ADD_CUSTOMERS", payload: [{
             id: this.props.customersReducer.dataCustomers.length+1,
             name: this.state.localNameValue,
             address: this.state.localAddressValue,
             phone: this.state.localPhoneValue
        }]
   });
      setTimeout(()=>{
          this.clearFields();
      },1000);
  }
  render() {
    return (
      <div>
        <Modal show={this.props.visible} onHide={this.props.hide}>
          <Modal.Header closeButton>
            <Modal.Title>Add customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <FormGroup>
      				  <ControlLabel>Name</ControlLabel>
      				  <FormControl type="text" placeholder="Enter name" value={this.state.localNameValue} onChange={this.changeName}/>
    			    </FormGroup>
              <FormGroup>
      				  <ControlLabel>Address</ControlLabel>
      				  <FormControl type="text" placeholder="Enter address" value={this.state.localAddressValue} onChange={this.changeAddress}/>
    			    </FormGroup>
              <FormGroup>
      				  <ControlLabel>Phone</ControlLabel>
      				  <FormControl type="text" placeholder="Enter phone number" value={this.state.localPhoneValue} onChange={this.changePhone}/>
    		      </FormGroup>
              <Button onClick={this.addCustomers}>
                Submit
              </Button>
			      </Form> 
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