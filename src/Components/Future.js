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
                <Col md={{ span: 6, order: 1 }} sm={{ order: 1 }}>
                    <p>
                        After the masters, I will join the HCI team from the <b>University of Luxembourg</b>, who were both the host of my M22 research internship and industrial partner of the FMP, for a <b>PhD in Human Computer Interaction</b>. I will continue to work on <b>self-tracking collaboration</b> and will be able to further develop the CoSensUs Kit and go more in-depth about different aspects of it. I will also be able to do more elaborate tests with users, to see the implications of group-level self-tracking in longer terms. <b>This PhD will allow me to do as described in my vision</b>, doing research for and through design that helps people deal with the complexity of everyday life, focused on data-driven technologies and the psychological and societal implications they have. My goal is to eventually work towards a job in academia, where I can combine my passion for <b>research and teaching</b>.
                    </p>
                </Col>
                <Col md={{ span: 6, order: 0 }} sm={{ order: 0 }} style={{ height: 'auto', minHeight: '150px', backgroundColor: '#f5f5f5' }}>

                    <div className="quote">
                        <p >
                            <span>“</span>After the masters, I will start a PhD in Human Computer Interaction, which will allow me to do research as I described in my vision<span>”</span>
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