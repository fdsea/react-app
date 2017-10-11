import React from "react";

const AllCustomersForSelect = ({customer}) => {
	return (
			<option  value = {customer}> { customer } </option>
		);
}

export default AllCustomersForSelect;