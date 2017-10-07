import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';


const Invoices = () => {
	return (
		<Grid>
			<Row className="show-grid">
				<Col xs={12} md={8}>
					<PageHeader>Invoices</PageHeader>
				</Col>
			</Row>
		</Grid>	
		);
};
 export default Invoices;