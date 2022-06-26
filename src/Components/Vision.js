import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Vision() {
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
        <Container id="Vision" className="section-head section-container">
            <h1 style={{ textAlign: "center" }}>Vision</h1>
            <Row>
                <Col md={{ span: 8, order: 0 }} sm={{ order: 1 }}>
                    <p>
                        We live in an increasingly complex and interconnected world, where technology and society rapidly co-evolve. This demands <b>more attention, knowledge, and skills</b> of users in their <b>everyday personal and professional lives</b>. Well-designed technologies can <b>enable users to better deal with this complexity</b>, by helping them to better understand themselves, organize themselves, and develop healthy habits.
                    </p>
                    <p>
                        <b>Data plays a crucial role</b> in (the creation of) these technologies and users’ self-awareness. To understand and give accurate advice and recommendation to users, data and Machine Learning (ML) are essential tools. Self-tracking technologies enable users to quantify different aspects of their own lives, giving new insights to them and allowing self-experimentation. Data can also take an <b>important part in the design process itself</b>, either as creative input (data-enabled design) or in the validation stages of the design.
                    </p>
                    <p>
                        However, there are many things to <b>consider with the use of data</b>. How does (the representation of) data alter the perception of users? How do we ensure privacy of our users?  Can enablement through data create unwanted responsibility and become a burden instead? A lot of these questions stay <b>unanswered by industry</b>: they will choose <b>convenience and profit over designs that handle data societally and psychologically responsible</b>, as has become apparent with the rise of <b>surveillance capitalism</b>, especially in <b>self-tracking technologies.</b>
                    </p>
                    <p>
                        As a <b>design researcher</b>, I want to do <b>research for and through design</b> on these <b>user-enabling, data-driven technologies</b>, and their impact on people’s <b>psychology</b> and on <b>society</b> as a whole. Using my design skills, I want to help the scientific community learn more about the <b>interdisciplinary problems</b> related to this topic in an <b>exploratory fashion</b>.
                    </p>
                </Col>
                <Col md={{ span: 4, order: 1 }} sm={{ order: 0 }} style={{ height: 'auto', minHeight: '150px', backgroundColor: '#f5f5f5' }}>

                    <div className="quote">
                        <p >
                            <span>“</span>I want to do research for and through design that helps people deal with the complexity of everyday life. I do this with a focus on data-driven technologies, and the psychological and societal implications they have<span>”</span>
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

export default Vision