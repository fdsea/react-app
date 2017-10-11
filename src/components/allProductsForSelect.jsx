import React from "react";

const AllProductsForSelect = ({product}) => {
	return (
			<option  value = {product}> { product } </option>
		);
}

export default AllProductsForSelect;