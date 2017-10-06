import React from 'react';
import {Navbar,MenuItem, NavDropdown, Nav, NavItem, PageHeader, Grid, Row, Col, Button} from 'react-bootstrap';
import CustomersModal from 'customersModal';

class ButtonA extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showModal: false
		};
		this.showCustomersModal = this.showCustomersModal.bind(this);
		this.hideCustomersModal = this.hideCustomersModal.bind(this);
	}
	showCustomersModal(){
		this.setState({
			showModal: true
		});
	}
	hideCustomersModal(){
		this.setState({
			showModal: false
		});
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
                    <NavItem eventKey={1} href="#">Invoices</NavItem>
                    <NavItem eventKey={2} href="#">Products</NavItem>
	            	<NavItem eventKey={2} href="#">Customers</NavItem>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
				<Grid>
					 <Row className="show-grid">
      					<Col xs={12} md={8}>
      						<PageHeader style={{display: 'inline-block'}}>Customer list</PageHeader>
      						<Button 
     						 	onClick = {this.showCustomersModal}
      						 	style={{display: 'inline-block', marginLeft: '20px'}}>
      						     	Create
      					    </Button>
      					    <CustomersModal visible = {this.state.showModal} hide={this.hideCustomersModal}/>
      					</Col>
    				</Row>
				</Grid>	
			
		</div>
		);
	}
}
export default ButtonA;