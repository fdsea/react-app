import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

const QuanityCell = ({num, name, quanity, price, setCellId, deleteBtn, deleteQuanity }) => {
	return(
		<tr>
    		<td>{ name }</td>
    		<td>{ price }</td>
    		<td>
    			<FormGroup>
    				<FormControl defaultValue = {quanity} onChange={setCellId} data-id = {num}></FormControl>
    			</FormGroup>
    		</td>
            {
                (deleteBtn) ? (<td><Button bsStyle="danger" bsSize="xsmall" onClick = {deleteQuanity} data-delete-btn = {num}>Delete</Button></td>) : <td></td>
            }
    	</tr>
	);
};

export default QuanityCell;