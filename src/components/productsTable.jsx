

import React from 'react';
import {Table, Grid, Row, Col} from 'react-bootstrap';
import ProductEntry  from './productEntry';


class ProductsTable extends React.Component{
	constructor(props){
		super(props);
		this.arr = [
			{id: 1, name: 'John', price: 'addd'},
			{id: 1, name: 'John', price: 'addd'},
			{id: 1, name: 'John', price: 'addd'},
			{id: 1, name: 'John', price: 'addd'}
		];
	}
	render(){
		let entrys = this.arr.map((value, index)=>{
			return <ProductEntry {...value}/>
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