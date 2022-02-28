import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from './ContactForm';

function ContactMe() {
    return (
        <Container>
            <Row>
                <Col />
                <Col lg={{ span: 6 }}>
                    <h1 style={{ textAlign: "center" }}>Contact me</h1>
                    <ContactForm />
                    <br />
                    <br />
                </Col>
                <Col />
            </Row>
        </Container>
    )
}

export default ContactMe
