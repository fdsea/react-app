import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

const QuantityCell = ({num, name, quantity, price, setCellId, deleteBtn, deleteQuantity }) => {
	return(
		<tr>
    		<td>{ name }</td>
    		<td>{ price }</td>
    		<td>
    			<FormGroup>
    				<FormControl defaultValue = {quantity} onChange={setCellId} data-id = {num} ></FormControl>
    			</FormGroup>
    		</td>
            {
                (deleteBtn) ? (<td><Button bsStyle="danger" bsSize="xsmall" onClick = {deleteQuantity} data-delete-btn = {num}>Delete</Button></td>) : <td></td>
            }
    	</tr>
	);
};

export default QuantityCell;