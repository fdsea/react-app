
import React from 'react';
import { Button } from 'react-bootstrap';
import store from './../store';
const CustomerEntry = ({id, name, address, phone, num}) => {
	return(
		<tr>
			<td>{ num }</td>
			<td>{ name }</td>
			<td>{ address }</td>
			<td>{ phone }</td>
			<td>
				<Button bsStyle="warning"
						bsSize="xsmall"
						onClick={()=>{
							store.dispatch({type: "OPEN_EDIT_CUSTOMERS", payload: {editState: true, id: id}})}}>Edit
				</Button>
				<Button bsStyle="danger"
						bsSize="xsmall"
						style={{marginLeft: '10px',fontSize: '0.7em'}}
						onClick={()=>{store.dispatch({type:"OPEN_DELETE_CUSTOMERS", payload: {deleteState: true, id: num-1}})}}>Delete</Button>
			</td>	
	 	</tr>
	);
};


export default CustomerEntry;