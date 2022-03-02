import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Banner() {
    return (
        <Container id="Home" className="section-head">
            <Row>
                <Col md={{ span: 4 }} style={{
                    height: '450px', textAlign: 'center', backgroundColor: '#f8f9fa',
                    backgroundImage: `url(${require('../Content/Images/20211025_084348.jpg')})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    borderRadius: '3px'
                }}>
                    <div>
                        PLACEHOLDER <br />
                        This frame will contain a (better) picture of me
                    </div>
                </Col>
                <Col md={{ span: 8 }}>
                    <Container style={{ marginLeft: "1rem" }}>
                        <br />
                        <h1 style={{ textTransform: 'none' }}>Hi, I'm Romain, <br /> a MSc student Industrial Design</h1>
                        <h3 style={{ color: "gray", fontWeight: "400", marginBottom: "3rem" }}>... and I'm currently looking for a PhD position</h3>
                        <Button href="#AboutMe" variant="outline-primary" size="lg">
                            Learn about me
                        </Button> { }
                        <Button href="#MyWork" variant="outline-primary" size="lg" style={{ marginTop: "10px", marginBottom: "10px" }}>
                            Learn about my work
                        </Button> { }
                        <Button href="#ContactMe" variant="outline-primary" size="lg">
                            Get in touch
                        </Button>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner
