import React from 'react';
import InvoicesTable from './invoicesTable';
import store from './../store';
import { Row, Col, Button, PageHeader } from 'react-bootstrap';
import CreateInvoicesModal from './../components/createInvoicesModal';

const AllInvoices = () => {
	return (
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
      				<CreateInvoicesModal {...store.getState()} />
			</Col>
			<Col>
				<InvoicesTable {...store.getState()}/>
			</Col>
		</Row>
	)
};

export default AllInvoices;