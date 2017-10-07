
import React from 'react';

const ProductEntry = ({id, name, price}) => {
	return(
		<tr key={id}>
			<td>{ id }</td>
			<td>{ name }</td>
			<td>{ price }</td>	
	 	</tr>
	);
};


export default ProductEntry;