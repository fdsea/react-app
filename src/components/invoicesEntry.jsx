import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import store from './../store';

const InvoicesEntry = ({id, name, discount, products, total, num}) => {
	return(
		<tr>
			<td>{ num }</td>
			<td>{ name }</td>
			<td>{ discount }</td>
			<td>{
					
				}
			</td>
			<td><Link key={num-1} to={`/invoices/${id}/edit`}>edit</Link></td>	
	 	</tr>
	);
};


export default InvoicesEntry;