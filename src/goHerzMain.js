import React from "react";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


export default function goHerzMain() {

    return(

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>goherz.in</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
                        <NavDropdown title="Accommodations" id="collapsible-nav-dropdown">
                            <NavDropdown.Item>Shared Accommodations</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Serviced Apartments</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Food Production" id="collapsible-nav-dropdown">
                            <NavDropdown.Item>Cloud Kitchens</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Catering Services</NavDropdown.Item>
                        </NavDropdown>


                        <NavDropdown title="Rentals" id="collapsible-nav-dropdown">  
                            <NavDropdown.Item>Home Furniture</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Home Appliance</NavDropdown.Item>
                        </NavDropdown>    

                        <NavDropdown title="About Us" id="collapsible-nav-dropdown">
                            <NavDropdown.Item>Organization</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Core Values</NavDropdown.Item>                           
                        </NavDropdown>    

                         <NavDropdown title="Contact Us" id="collapsible-nav-dropdown">
                            <NavDropdown.Item>Individual Customers</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Corporate Customers</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Partners</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Investors</NavDropdown.Item>
                        </NavDropdown>    
                    </Nav>

                    <Nav>
                        <Nav.Link>Login</Nav.Link>
                        <Nav.Link>Sign Up</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
        

    );

}