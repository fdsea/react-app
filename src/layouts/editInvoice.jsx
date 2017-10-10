import React from 'react';
import { Grid, Row, Col, Button, PageHeader } from 'react-bootstrap';
import store from './../store';

class EditInvoice extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Grid>
				<Row>
					<Col xs={12}>
						<PageHeader>Invoice edit</PageHeader>
					</Col>
				</Row>
			</Grid>
			
		);
	}
}

export default EditInvoice;