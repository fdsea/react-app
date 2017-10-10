import React from 'react';
import ProductsModal from './../components/productsModal';
import ProductsTable from './../components/productsTable';
import EditProductsModal from './../components/editProductsModal';
import DeleteProductsModal from './../components/deleteProductsModal';
import { Grid, Row, Col, Button, PageHeader } from 'react-bootstrap';
import store from './../store';

class Products extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModal: false,
			showEditModal: false,
			showDeleteModal: false
		};
		this.showProductsModal = this.showProductsModal.bind(this);
		this.hideProductsModal = this.hideProductsModal.bind(this);
		
	}
	showProductsModal(){
		this.setState({
			showModal: true
		});
	}
	hideProductsModal(){
		this.setState({
			showModal: false
		});
	}
	
	render(){
		return(
			<Grid>
				<Row className="show-grid">
      				<Col xs={12} md={8}>
      					<PageHeader style={{display: 'inline-block', borderBottom: 'none'}}>Products list</PageHeader>
      					<Button 
     						onClick = {this.showProductsModal}
      						style={{display: 'inline-block', marginLeft: '20px'}}>
      						Create
      					</Button>
      					<ProductsModal visible = {this.state.showModal} hide={this.hideProductsModal} {...store.getState()}/>
      					<EditProductsModal {...store.getState()}/>
      					<DeleteProductsModal {...store.getState()}/>
      				</Col>
    			</Row>
    			<Row>
    				<ProductsTable {...store.getState()} />
    			</Row>
			</Grid>
		);
	}

}
export default Products;
/*<EditProductsModal {...store.getState()}/>*/