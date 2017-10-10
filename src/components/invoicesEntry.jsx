import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import store from './../store';

const InvoicesEntry = ({id, customer, discount, total, num}) => {
	return(
		<tr>
			<td>{ num }{'asdasd'}</td>
			<td>{ customer }{'asdasd'}</td>
			<td>{ discount }{'zxcxzc'}</td>
			<td>{ total }{'xzczxc'}</td>
			<td><Link key={num-1} to={`/invoices/${id}/edit`}>edit</Link></td>	
	 	</tr>
	);
};


export default InvoicesEntry;