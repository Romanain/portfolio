import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom';

function NavigationBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#Home">Romain TOEBOSCH</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#AboutMe">About me</Nav.Link>
                            <NavDropdown title="My work" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#Projects">My projects</NavDropdown.Item>
                                <NavDropdown.Item href="#Publications">My publications</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Button href="#ContactMe" size="md">Contact me!</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
