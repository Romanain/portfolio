import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Future() {
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
        <Container id="Future" className="section-head section-container">
            <h2 style={{ textAlign: "center" }}>What's next</h2>
            <Row>
                <Col md={{ span: 8, order: 1 }} sm={{ order: 1 }}>
                    <p>
                        From an early age, I had a fascination for technology and craved for better understanding on how the human psyche “worked.” This was reflected in my hobbies, which ranged from programming small interactive games to building drones and computers. For my high school projects, I made several android applications and also did (simple) User Experience tests for some of them.
                    </p>
                    <p>
                        During the bachelors of Industrial Design (ID) at the Eindhoven University of Technology (TU/e) I further developed and expanded my set of interests, and created a very diverse profile in terms of skills and competencies. Furthermore, I desired to become serial entrepreneur, and to start multiple businesses based around different design ideas. However, I felt like there were a lot of personality traits of myself I was fighting when trying to build this profile. Then, when I was exposed to what it would be like to do research and go into academia, due to the research project and my research internship, I started to heavily doubt the direction I was truly interested in. This doubt, combined with the broadness of the profile I created for myself, meant I was a generalist that didn’t have a defined direction he wanted to go towards.
                    </p>
                    <p>
                        The Masters of ID at TU/e therefore became a process of maturing in both the professional and personal identity, where decisions had to be made towards a more specific profile. Given my original interests and passions, the type of research I was interested in, and the vision I formulated for myself, I chose to go for a profile with a focus on Math, Data, and Computing (MD&C) and User and Society (U&S). Furthermore, given my personality and affinity for abstract thinking and diving deep into topics, the academic profile seemed to suit me better. How I got there and which activities contributed to these decisions are discussed in the present section from this portfolio
                    </p>
                </Col>
                <Col md={{ span: 4, order: 0 }} sm={{ order: 0 }} style={{ height: 'auto', minHeight: '150px', backgroundColor: '#f5f5f5' }}>

                    <div className="quote">
                        <p >
                            <span>“</span>Summary based on a few keywords describing my future after the masters<span>”</span>
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

export default Future