import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Banner() {
    return (
        <Container>
            <Row>
                <Col md={{ span: 4 }} style={{ height: '400px', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
                    <div>
                        Picture of me
                    </div>
                </Col>
                <Col md={{ span: 8 }}>
                    <Container style={{ marginLeft: "1rem" }}>
                        <br />
                        <h1>Hi, I'm Romain, <br /> a MSc student Industrial Design</h1>
                        <h3 style={{ color: "gray", fontWeight: "400", marginBottom: "3rem" }}>... and I'm currently looking for a PhD position</h3>
                        <Button variant="outline-primary" size="lg">
                            Learn about me
                        </Button> { }
                        <Button variant="outline-primary" size="lg" style={{ marginTop: "10px", marginBottom: "10px" }}>
                            Learn about my work
                        </Button> { }
                        <Button variant="outline-primary" size="lg">
                            Get in touch
                        </Button>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner
