import React from 'react';
import ProductsModal from './../components/productsModal';
import ProductsTable from './../components/productsTable';
import { Grid, Row, Col, Button, PageHeader } from 'react-bootstrap';

class Products extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModal: false
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
      					<PageHeader style={{display: 'inline-block'}}>Products list</PageHeader>
      					<Button 
     						onClick = {this.showProductsModal}
      						style={{display: 'inline-block', marginLeft: '20px'}}>
      						Create
      					</Button>
      					<ProductsModal visible = {this.state.showModal} hide={this.hideProductsModal}/>
      				</Col>
    			</Row>
    			<Row>
    				<ProductsTable />
    			</Row>
			</Grid>
		);
	}

}
 export default Products;