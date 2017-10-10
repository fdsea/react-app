import React from 'react';
import { Button } from 'react-bootstrap';
import store from './../store';

const InvoicesEntry = ({id, customer, discount, total, num}) => {
	return(
		<tr>
			<td>{ num }{'asdasd'}</td>
			<td>{ customer }{'asdasd'}</td>
			<td>{ discount }{'zxcxzc'}</td>
			<td>{ total }{'xzczxc'}</td>
			<td>{'edit'}</td>	
	 	</tr>
	);
};


export default InvoicesEntry;