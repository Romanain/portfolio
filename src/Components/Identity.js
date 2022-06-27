import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Identity() {
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
        <Container id="Identity" className="section-head section-container">
            <h1 style={{ textAlign: "center" }}>Professional Identity</h1>
            <Row>
                <Col md={{ span: 8, order: 2 }} sm={{ order: 1 }}>
                    <p>
                        Personally, I am someone with a <b>broad set of interests</b>: I am curious by nature and love exploring new topics and discussing a wide variety of matters. From a young age I was fascinated by <b>technology</b> and <b>psychology</b>, but also like learning about e.g., sociology, philosophy, and arts, and am always keen on expanding this set of interests.
                    </p> <p>
                        This directly translates into my professional identity: I have a broad skillset, enjoy exploring challenges from many angles, and <b>connect</b> the dots between knowledge from <b>a multitude of fields</b>. I enjoy working on the technology and data-related parts of the design process, whether it be programming, electronics, physical prototyping, or working with data and Machine Learning. I am also fascinated by users’ psychology and behaviours, which results in designs that are based on psychological theories (e.g. self-regulation, negotiation, and behaviour change).
                    </p> <p>
                        I am always ready to give people creative input or (technology/data related) advice for their projects. I have a <b>collaborative spirit</b> that likes <b>sharing knowledge</b>, teaching, and working on joint ventures. In the past two years I have for instancec (co-)hosted introductory workshops about machine learning and Arduino for fellow students and researchers.
                    </p> <p>
                        I also like <b>untangling complex topics</b> and getting to know as much as possible about them, and I am an <b>abstract thinker</b> that comes up with different conceptual frameworks based on activities in the design process. Hence, I am interested in research and will pursue a PhD in Human-Computer Interaction at the University of Luxembourg after my masters.
                    </p> <p>
                        I can be quite <b>a dreamer</b>, hypothesizing about theories and possible futures for hours on end. This can be beneficial in finding new creative ideas for designs or connecting theories, but can also sometimes slow me down before getting into action. Although I thrive when learning by doing, I sometimes overthink before allowing myself to try, make mistakes, and iterate. These are points I am continuously working on, both in my personal and professional life. I am a self-directed learner, always eager to improve myself and formulate plans on how to learn something new to satiate my latest curiosity.
                    </p>
                </Col>
                <Col md={{ span: 4, order: 1 }} sm={{ order: 0 }} style={{ height: 'auto', minHeight: '150px', backgroundColor: '#f5f5f5' }}>

                    <div className="quote">
                        <p >
                            <span>“</span>A broad set of interests and skills, with specialization in MD&C and U&S. My natural curiosity to untangle complex topic and abstract way of thinking are what is driving me towards academia.<span>”</span>
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

export default Identity