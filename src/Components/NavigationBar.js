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
                            <Nav.Link><HashLink to="/portfolio/#Identity">Professional Identity</HashLink></Nav.Link>
                            <Nav.Link><HashLink to="/portfolio/#Vision">Vision</HashLink></Nav.Link>
                            <Nav.Link><HashLink to="/portfolio/#PastHeader">Past</HashLink></Nav.Link>
                            <Nav.Link><HashLink to="/portfolio/#PresentHeader">Present</HashLink></Nav.Link>
                            <Nav.Link><HashLink to="/portfolio/#FutureHeader">Future</HashLink></Nav.Link>
                        </Nav>
                        <Nav>
                            <Button href="https://github.com/Romanain/portfolio" size="md">See the code on GitHub!</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
