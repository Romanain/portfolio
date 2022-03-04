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
                    height: '500px', textAlign: 'center', backgroundColor: '#f8f9fa',
                    backgroundImage: `url(${require('../Content/Images/SAM_6454.jpg')})`,
                    backgroundSize: 'cover', backgroundPosition: 'center top',
                    borderRadius: '3px',
                    textAlign: 'center'
                }}>
                    {/* <img src={require("../Content/Images/SAM_6454.jpg")} style={{
                        maxHeight: '450px', maxWidth: '100%'    
                    }}/> */}
                </Col>
                <Col md={{ span: 8 }}>
                    <Container style={{ marginLeft: "1rem" }}>
                        <br />
                        <h1 style={{ textTransform: 'none', marginBottom: '0px', textAlign: 'left' }}>Hi, I'm Romain, <br /> a MSc student Industrial Design</h1>
                        <h3 style={{ color: "gray", fontWeight: "400", marginBottom: "3rem" }}>... and I'm currently looking for a PhD position</h3>
                        <Button href="#AboutMe" variant="outline-primary" size="lg">
                            Learn about me
                        </Button> { }
                        <Button href="#Projects" variant="outline-primary" size="lg" style={{ marginTop: "10px", marginBottom: "10px" }}>
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
