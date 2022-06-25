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
                        Personally, I am someone with a <b>broad set of interests</b>: I am curious by nature, and love exploring new topics and discussing a wide variety of matters with anyone. From a young age I was fascinated by <b>technology</b> and <b>human psychology</b>, but also like learning about e.g., sociology, philosophy, and arts, and am always keen on expanding this set of interests.
                    </p> <p>
                        This directly translates into my professional identity: I am someone with a broad skillset, that enjoys exploring challenges from many angles, and <b>connecting</b> the dots between knowledge from <b>a multitude of fields</b>. I enjoy working on the technology and data related parts of the design process, whether it be programming, working with electronics, physical prototyping, or working with data and Machine Learning (<b>MD&C</b> and <b>T&R</b>). Next to this, I am also fascinated by users’ psychology and behaviours, which results in designs that are based around psychological theories such as self-regulation, negotiation, and behaviour change (<b>U&S</b>).
                    </p> <p>
                        I am always at the ready to give people creative input or (technology/data related) advice for their projects, and in general I have a <b>collaborative spirit</b> that likes <b>sharing knowledge</b>, teaching, and working on joint ventures. In the past few two years I have (co-)hosted introductory workshops about machine learning and Arduino.
                    </p> <p>
                        I also like <b>untangling complex topics</b> and getting to know as much as possible about them, and I am an <b>abstract thinker</b> that comes up with different conceptual frameworks based on activities in the design process. Because of this, I am interested in research and will pursue a PhD in Human-Computer Interaction at the University of Luxembourg after my masters.
                    </p> <p>
                        I can be quite <b>a dreamer</b>, hypothesizing about different theories and possible futures for hours on end. This can be beneficial in finding new creative ideas for designs or connecting theories, but can also lead to a situation where I struggle getting into action. This also has to do with a perfectionistic, non-tolerant mindset I sometimes unfortunately have that does not allow mistakes, which can lead to paralysis. These are points I am continuously working on, both in my personal and professional life.

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