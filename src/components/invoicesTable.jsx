
import React from 'react';
import {Table, Grid, Row, Col} from 'react-bootstrap';
import InvoicesEntry  from './invoicesEntry';
import store from './../store';


class InvoicesTable extends React.Component{
	constructor(props){
		super(props);
    }
  	fetchAPI(url){
        fetch(url,{method: 'get'})
       .then((res) => res.json() )
       .then((data) => {
       	store.dispatch({type:"LOAD_DATA_INVOICES", payload: data});
      })
      .catch((err) => console.log('database err'));
  	}
  	componentDidMount(){
    	let url = '/api/invoices';
    	this.fetchAPI(url);
  	}
	render(){
		let entrys = [{id: 1, name: 'rrr', price: '34.34', total:'34.34'}].map((value, index)=>{
			return <InvoicesEntry key={index} {...value} num={index+1} {...store.getState()} />
		});
		return(
			<Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Discount</th>
            <th>Total</th>
            <th></th>
          </tr>   
        </thead>
        <tbody>
          {entrys}
        </tbody>
      </Table>
		);
	}
}
export default InvoicesTable;