import React from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';
import HeaderApp from './headerApp';
import CustomersTable from './customersTable';

import { BrowserRouter , Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'react-select/dist/react-select.css';

const App = () => (
	<div>
	    <HeaderApp />
        <CustomersTable />
	</div>   
);

render(<App />, document.getElementById('app-root'));
