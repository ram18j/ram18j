import React from "react";
import {NavDropdown, Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


class HerzMain extends React.Component {

    render() {

    return(

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          
                <Navbar.Brand as={Link} to="/">goherz.in</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 
                <Navbar.Collapse id="responsive-navbar-nav">     

                <Nav className="me-auto">

                        <NavDropdown title="Accommodations" id="collapsible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/servicedacc">Serviced Accommodations</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/customacc">Custom Accommodations</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/sharedacc">Shared Accommodations</NavDropdown.Item>
                        </NavDropdown>      

                </Nav>     

                <Nav>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                </Nav>

                </Navbar.Collapse>
   
        </Navbar>
        

    );

    }

}

export default HerzMain;