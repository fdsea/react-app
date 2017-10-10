import React from 'react';
import { Grid, Row, Col, PageHeader, Button } from 'react-bootstrap';
import InvoicesTable from './../components/invoicesTable'
import store from './../store';
class Invoices extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<Grid>
				<Row className="show-grid">
					<Col xs={12} md={8}>
						<PageHeader style={{display: 'inline-block', borderBottom: 'none'}}>Invoice list</PageHeader>
						<Button 
      						style={{display: 'inline-block', marginLeft: '20px'}}>
      						Create
      					</Button>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={8}>
						<InvoicesTable {...store.getState()} />
					</Col>
				</Row>
			</Grid>	
		);
	}
};
 export default Invoices;