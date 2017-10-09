import React from 'react';
import {Table, Grid, Row, Col} from 'react-bootstrap';
import CustomerEntry  from './customerEntry';
import { Route, Link} from 'react-router-dom';
import store from './../store';

class CustomersTable extends React.Component{
  constructor(props){
    super(props);
  }
  fetchAPI(url){
        fetch(url,{method: 'get'})
       .then((res) => res.json() )
       .then((data) => {
        store.dispatch({type:"LOAD_DATA_CUSTOMERS", payload: data});
      })
      .catch((err) => console.log('database err') )
  }
  componentDidMount(){
    let url = '/api/customers';
    this.fetchAPI(url);
  }

	render(){
     console.log(store.getState());
    let entrys = this.props.customersReducer.dataCustomers.map((value, index)=>{
      return <CustomerEntry key={index} {...value} id={index+1}/>
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