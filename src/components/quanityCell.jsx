import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

const QuanityCell = ({num, name, quanity, price }) => {
	return(
		<tr>
    		<td>{ name }</td>
    		<td>{ price }</td>
    		<td>
    			<FormGroup>
    				<FormControl defaultValue = {quanity}></FormControl>
    			</FormGroup>
    		</td>
    	</tr>
	);
};

export default QuanityCell;