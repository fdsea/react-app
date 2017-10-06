import React from 'react';
import {Navbar,MenuItem, NavDropdown, Nav, NavItem, PageHeader, Grid, Row, Col, Button} from 'react-bootstrap';

class ButtonA extends React.Component {
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
                    <NavItem eventKey={1} href="#">Invoices</NavItem>
                    <NavItem eventKey={2} href="#">Products</NavItem>
	            	<NavItem eventKey={2} href="#">Customers</NavItem>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
				<Grid>
					 <Row className="show-grid">
      					<Col xs={12} md={8}><PageHeader style={{display: 'inline-block'}}>Customer list</PageHeader><Button style={{display: 'inline-block', marginLeft: '20px'}}>Create</Button></Col>
						
    				</Row>
				</Grid>	
			
		</div>
		);
	}
}
export default ButtonA;