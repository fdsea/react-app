import React from 'react';
import { Grid, Row, Col, PageHeader, Button } from 'react-bootstrap';
import InvoicesTable from './../components/invoicesTable'
import store from './../store';
import EditInvoicesModal from './../components/editInvoicesModal'

class Invoices extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		console.log(store.getState());
		return (
			<Grid>
				<Row className="show-grid">
					<Col xs={12} md={8}>
						<PageHeader style={{display: 'inline-block', borderBottom: 'none'}}>Invoice list</PageHeader>
						<Button 
							onClick = {()=>{
								store.dispatch({type: "OPEN_INVOICES_MODAL", payload: true});
							}}
      						style={{display: 'inline-block', marginLeft: '20px'}}>
      						Create
      					</Button>
      					<EditInvoicesModal {...store.getState()} />
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