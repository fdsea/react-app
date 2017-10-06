import React from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';
import 'react-select/dist/react-select.css';

class Exp extends React.Component{

	render(){
		return(
			<div>
				<Button />
			</div>
		);
	}
}

render(<Exp/>, document.getElementById('app-root'));
