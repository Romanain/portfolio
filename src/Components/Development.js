import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Development() {
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
        <Container id="Past" className="section-head section-container">
            <h2 style={{ textAlign: "center" }}>Overall development</h2>
            <Row>
                <Col md={{ span: 8, order: 1 }} sm={{ order: 1 }}>
                    <p>
                        From an early age, I had a fascination for technology and craved for better understanding on how the human psyche “worked.” This was reflected in my hobbies, which ranged from programming small interactive games to building drones and computers. For my high school projects, I made several android applications and also did (simple) User Experience tests for some of them.
                    </p>
                    <p>
                        During the bachelors of Industrial Design (ID) at the Eindhoven University of Technology (TU/e) I further developed and expanded my set of interests, and created a very diverse profile in terms of skills and competencies. Furthermore, I desired to become serial entrepreneur, and to start multiple businesses based around different design ideas. However, I felt like there were a lot of personality traits of myself I was fighting when trying to build this profile. Then, when I was exposed to what it would be like to do research and go into academia, due to the research project and my research internship, I started to heavily doubt the direction I was truly interested in. This doubt, combined with the broadness of the profile I created for myself, meant I was a generalist that didn’t have a defined direction he wanted to go towards.
                    </p>
                </Col>
                <Col md={{ span: 4, order: 0 }} sm={{ order: 0 }} style={{ height: 'auto', minHeight: '150px', backgroundColor: '#f5f5f5' }}>

                    <div className="quote">
                        <p >
                            <span>“</span>Summary based on a few keywords describing my overall development<span>”</span>
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

export default Development