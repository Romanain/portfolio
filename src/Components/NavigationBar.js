import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function NavigationBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand><HashLink to="/portfolio/#Home">Romain TOEBOSCH</HashLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><HashLink to="/portfolio/#AboutMe">About</HashLink></Nav.Link>
                            <Nav.Link><HashLink to="/portfolio/#Projects">Projects</HashLink></Nav.Link>
                            <Nav.Link><HashLink to="/portfolio/#Publications">Publications</HashLink></Nav.Link>
                            <Nav.Link><HashLink to="/portfolio/#Resume">Resume</HashLink></Nav.Link>
                        </Nav>
                        <Nav>
                            <Button href="/portfolio/#ContactMe" size="md">Contact me!</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
