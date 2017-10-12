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
			<td>{ total }</td>
			<td>
			<Button bsStyle="warning"
					bsSize="xsmall"

					><Link key={num-1} to={`/invoices/${num}/edit`} style = {{textDecoration: 'none', color: "#fff"}}
					>Edit</Link></Button>
			<Button bsStyle="danger"
						bsSize="xsmall"
						style={{marginLeft: '10px',fontSize: '0.7em'}}
						onClick={()=>{store.dispatch({
							type: "OPEN_DELETE_INVOICES_MODAL", payload: {deleteState: true, id: num-1}
						})}}
						>Delete</Button>
			</td>	
	 	</tr>
	);
};


export default InvoicesEntry;