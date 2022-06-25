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
                        <h1 style={{ textTransform: 'none', marginBottom: '.5rem', textAlign: 'left' }}>Hi, I'm Romain, <br /> a student in Design Research </h1>
                        <h3 style={{ color: "gray", fontWeight: "400", marginBottom: "3rem" }}>that is specializing in MD&C and U&S</h3>
                        <Button href="#Identity" variant="outline-primary" size="lg">
                            My Identity and Vision
                        </Button> { }
                        <Button href="#PresentHeader" variant="outline-primary" size="lg" style={{ marginTop: "10px", marginBottom: "10px" }}>
                            My development over the masters
                        </Button> { }
                        <Button href="#FutureHeader" variant="outline-primary" size="lg">
                            Beyond the masters
                        </Button>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner
