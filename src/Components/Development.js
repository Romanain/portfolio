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
                        During the masters, my goals were to 1) find a <b>career path</b> that suits me, 2) <b>specialize</b> in two expertise areas and the skills needed for this career path, and 3) create <b>tighter integration</b> between different expertise areas.
                    </p>
                    <p>
                        In terms of career path, I weighed the pros and cons between the <b>academic</b> and the <b>entrepreneurial</b> career paths. Even though I have the ability to quickly come up with business ideas and like the process of getting a product to market, there are a lot of aspects of this process that rub with my personality; <b>academia allows me to dive headfirst into a complex topic</b> and <b>untangle every facet of it</b>, with the amount of depth that is not economically sensible in a start-up or joint venture. Academia also gives me the right balance between being my own boss with my own responsibilities, while allowing exchange of knowledge with others and joint projects. It also allows me <b>to share knowledge</b> in the form of giving workshops and teaching, something I enjoy a lot and want to do more of.
                    </p>
                    <p>
                        For the expertise areas, I chose to further specialize in <b>MD&C</b> and <b>U&S</b>. These best connected with my original interests for technology, machine learning, and psychology. Development of these can be found in the competency development section down below.
                    </p>
                    <p>
                        Lastly, I integrated the different expertise areas more tightly during the masters. <b>During the bachelors</b>, I would always have <b>separate prototypes</b> and reasonings for competency areas, most notable T&R and C&A: the technical prototype to demonstrate it works and the aesthetical to see how it would look like. However, this disconnect <b>removes a lot of potential for richer aesthetics of interaction</b> and <b>tighter integration with goals and values</b> that flow from the other competency areas. The M12 Research project was the first where this integration really started to take place, but the best example is the FMP. Here, the prototype is <b>fully functional</b> from a T&R standpoint, <b>manages data</b> according to what is desired from a MD&C and U&S standpoint, and mediates this through <b>rich interactions</b> with C&A.
                    </p>
                </Col>
                <Col md={{ span: 4, order: 0 }} sm={{ order: 0 }} style={{ height: 'auto', minHeight: '150px', backgroundColor: '#f5f5f5' }}>

                    <div className="quote">
                        <p >
                            <span>“</span>The masters allowed me to 1<span>)</span> decide to go for an academic career path, 2<span>)</span> specialize in the MD&C and U&S competency areas, and 3<span>)</span> create tighter integration between all skills and competencies.<span>”</span>
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