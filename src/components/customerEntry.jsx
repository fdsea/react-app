
import React from 'react';

const CustomerEntry = ({id, name, addres, phone}) => {
	return(
		<tr key={id}>
			<td>{ id }</td>
			<td>{ name }</td>
			<td>{ addres }</td>
			<td>{ phone }</td>	
	 	</tr>
	);
};


export default CustomerEntry;