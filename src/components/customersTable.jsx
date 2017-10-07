import React from 'react';
import {Table, Grid, Row, Col} from 'react-bootstrap';
import CustomerEntry  from './customerEntry';

class CustomersTable extends React.Component{
  constructor(props){
    super(props);
    this.arr = [
      {id: 1, name: 'John', addres: 'neverland', phone: '555-666-777'},
      {id: 1, name: 'John', addres: 'neverland', phone: '555-666-777'},
      {id: 1, name: 'John', addres: 'neverland', phone: '555-666-777'},
      {id: 1, name: 'John', addres: 'neverland', phone: '555-666-777'}
    ];
  }
	render(){
    let entrys = this.arr.map((value, index)=>{
      return <CustomerEntry {...value}/>
    });
		return(
			<Grid>
				<Row>
			      <Table responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Addres</th>
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