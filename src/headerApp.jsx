import React from 'react';
import {Navbar,MenuItem, NavDropdown, Nav, NavItem, PageHeader, Grid, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import store from './store';

class HeaderApp extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
    		 <Navbar>
    			<Navbar.Header>
      			<Navbar.Brand>
        		  <a href="#">Invoice App</a>
      			</Navbar.Brand>
      			<Navbar.Toggle />
   				</Navbar.Header>
              <Navbar.Collapse>
                <Nav> 
                  <li key={0}><Link to = "/invoices">Invoices</Link></li>
                  <li key={1}><Link to = "/products">Products</Link></li>
	            	  <li key={2}><Link to = "/customers">Customers</Link></li>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
		</div>
		);
	}
}
export default HeaderApp;