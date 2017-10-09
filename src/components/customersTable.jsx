import React from 'react';
import {Table, Grid, Row, Col} from 'react-bootstrap';
import CustomerEntry  from './customerEntry';
import { Route, Link} from 'react-router-dom';
import store from './../store';

class CustomersTable extends React.Component{
  constructor(props){
    super(props);
   
  }
  
	render(){
    let entrys = this.props.customersReducer.dataCustomers.map((value, index)=>{
      return <CustomerEntry key={index} {...value} num={index+1} {...store.getState()}/>
    });
		return(
			<Grid>
				<Row>
			    <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
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
export default CustomersTable;