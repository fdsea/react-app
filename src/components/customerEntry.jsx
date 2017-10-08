
import React from 'react';

const CustomerEntry = ({id, name, address, phone}) => {
	return(
		<tr>
			<td>{ id }</td>
			<td>{ name }</td>
			<td>{ address }</td>
			<td>{ phone }</td>	
	 	</tr>
	);
};


export default CustomerEntry;