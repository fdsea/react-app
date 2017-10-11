
import React from 'react';
import {Table, Grid, Row, Col} from 'react-bootstrap';
import ProductEntry  from './productEntry';
import store from './../store';


class ProductsTable extends React.Component{
	constructor(props){
		super(props);
    }
	render(){
    console.log(store.getState());
		let entrys = this.props.productsReducer.dataProducts.map((value, index)=>{
			return <ProductEntry key={index} {...value} num={index+1} {...store.getState()}/>
		});
		return(
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
		);
	}
}
export default ProductsTable;