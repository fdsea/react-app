import React from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';
import ButtonA from './button';
import CustomersTable from './customersTable';

import { BrowserRouter , Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'react-select/dist/react-select.css';



render(<div>
<ButtonA />
<CustomersTable />
	</div>
, document.getElementById('app-root'));
