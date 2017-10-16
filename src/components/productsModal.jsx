import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form } from 'react-bootstrap';
import store from './../store';


class ProductsModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      localId: 0,
      localNameValue: '',
      localPriceValue: ''
    };
    this.changeName = this.changeName.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.addProducts = this.addProducts.bind(this);
    this.clearFields = this.clearFields.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
  }
  changeName(e){
    this.setState({
      localNameValue: e.target.value
    });
  }
    changePrice(e){
    this.setState({
      localPriceValue: e.target.value
    });
  }
    clearFields(){
      this.setState({
        localNameValue: '',
        localPriceValue: ''
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
    addProducts(){
      this.fetchAPI('/api/products', 'post', {
        id: this.props.productsReducer.dataProducts.length+1,
        name: this.state.localNameValue,
        price: this.state.localPriceValue
      });
      store.dispatch({type: "ADD_PRODUCTS", payload: [{
              id: this.props.productsReducer.dataProducts.length+1,
              name: this.state.localNameValue,
              price: this.state.localPriceValue
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
            <Modal.Title>Add product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" placeholder="Enter name" value={this.state.localNameValue} onChange={this.changeName}/>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Price</ControlLabel>
                <FormControl type="text" placeholder="Enter price" value={this.state.localPriceValue} onChange={this.changePrice}/>
              </FormGroup>
              <Button onClick={this.addProducts}>
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

export default ProductsModal;