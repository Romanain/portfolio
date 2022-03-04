import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AboutMe() {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "./jquery.textfill.min.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
        <Container id="AboutMe" className="section-head section-container">
            <h1 style={{ textAlign: "center" }}>About</h1>
            <Row>
                <Col md={{ span: 8, order: 0 }} sm={{ order: 1 }}>
                    <p>
                        I’m Romain, a student in Industrial Design (MSc) at the Eindhoven University of Technology in the Netherlands. I have always been interested in the <strong>overlap</strong> of <strong>human psychology and emerging technologies</strong>, which naturally drew me towards <strong>Design and HCI</strong>.
                    </p>
                    <p>
                        Over the course of my studies, I developed a particular interest in the research for and through <strong>design that enables users to deal with the complexity of everyday life</strong>, such as systems that help users better <strong>self-regulate</strong>, <strong>collaborate</strong>, or <strong> manage work/life balance</strong>. I enjoy working on the technical aspects of these projects and am fascinated be users’ psychology and behaviours interacting with these designs. 
                    </p>
                    <p>
                        In teams, I like learning about other’s projects and helping them out where possible. If you need creative input, a critical perspective, or technical advice, I’m always happy to help.
                    </p>
                    <p>
                    In my spare time you can find me trying out different musical instruments, working on electronics, marvelling online about the latest developments in tech, or cooking something new in the kitchen. I’m always up for a discussion or to learn something new about a variety of topics, so never hesitate to strike up a conversation with me!
                    </p>
                </Col>
                <Col md={{ span: 4, order: 1 }} sm={{ order: 0 }} style={{ height: 'auto', minHeight: '150px', backgroundColor: '#f5f5f5' }}>
                    
                    <div className="quote">
                        <p >
                            <span>“</span>I want to do research for and through design that helps people deal with the complexity of everyday life<span>”</span>
                        </p> 
                    </div>
                    
                    {/* {
                        $('#quote').textfill({
                            maxFontPixels: 200
                        })
                    } */}
                </Col>
            </Row>
            <br />
        </Container>
    )
}

export default AboutMe