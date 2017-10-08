

import React from 'react';
import {Table, Grid, Row, Col} from 'react-bootstrap';
import ProductEntry  from './productEntry';
import store from './../store';


class ProductsTable extends React.Component{
	constructor(props){
		super(props);
    }
  	fetchAPI(url){
        fetch(url,{method: 'get'})
       .then((res) => res.json() )
       .then((data) => {
       	store.dispatch({type:"LOAD_DATA_PRODUCTS", payload: data});
      })
      .catch((err) => console.log('database err'));
  	}
  	componentDidMount(){
    	let url = '/api/products';
    	this.fetchAPI(url);
  	}
	
	render(){
		let entrys = this.props.productsReducer.dataProducts.map((value, index)=>{
			return <ProductEntry {...value} id={index+1}/>
		});
		return(
			<Grid>
				<Row>
			      <Table responsive>
                    <thead>
                      	<tr>
                        	<th>#</th>
                        	<th>Name</th>
                        	<th>Price</th>
                      	</tr>   
                    </thead>
                    <tbody>
                      	{entrys}
                    </tbody>
          	      </Table>
				</Row>
			</Grid>
		);
	}
}
export default ProductsTable;