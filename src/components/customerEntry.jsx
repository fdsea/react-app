
import React from 'react';
import { Button } from 'react-bootstrap';

const CustomerEntry = ({id, name, address, phone}) => {
	return(
		<tr>
			<td>{ id }</td>
			<td>{ name }</td>
			<td>{ address }</td>
			<td>{ phone }</td>
			<td>
				<Button bsStyle="warning" bsSize="xsmall">Edit</Button>
				<Button bsStyle="danger" bsSize="xsmall" style={{marginLeft: '10px',fontSize: '0.7em'}}>Delete</Button>
			</td>	
	 	</tr>
	);
};


export default CustomerEntry;