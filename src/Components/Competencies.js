import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Skills from './Skills';
import Education from './Education';
import AExperience from './AExperience';
import PExperience from './PExperience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';


import PDF from '../Content/Resume_layout_v04_WEB.pdf'

function Competencies() {
    return (
        <Container id="Resume" className="section-head section-container">
            <Row>
                <h2 style={{ textAlign: "center" }}>Competency development</h2>
                <Col md={{ span: 12 }} sm={{ order: 0 }}>
                    <Tabs defaultActiveKey="MDC" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="MDC" title="MD&C">
                            <h3>Math, Data, & Computing</h3>
                            <p>
                                In terms of MD&C, I had a strong focus on Machine Learning (ML) and had several projects that were about giving control and awareness to users through data. I specialized in TinyML during my FMP, in Explainable AI (XAI) during the course Embodying intelligent behavior in social context, and was introduced to perceptrons in the course Complex and adaptive systems. Work on the XAI course also resulted in two published papers. I furthermore learned more advanced web development with different JavaScript frameworks for front and backend, which I applied during my M11 Project and the course Embodying intelligent behavior in social context (the code for this portfolio can also be found on GitHub). Furthermore, my M12 Research project was about how to design interactions with a recommender system for runners. Lastly, my FMP had a strong focus on data flow, data protection, and different types of processing data, and overall contained a lot of data and coding related challenges.
                            </p>
                        </Tab>
                        <Tab eventKey="US" title="U&S">
                            <h3>User & Society</h3>
                            <p>
                                In terms of User & Society, I mainly further developed my repertoire of methods and learned new theories of human psychology and sociology. I trained my interview skills in my M12 research project and M11 design project, where I cumulatively did over 20 in-depth interviews, and explored a multitude of different UX-evaluation methods during my M21 option, including Critical Incidents Technique, UX-Curves, and focus groups. Furthermore, one of my goals was to dive deeper into theories about human behaviour and reflect and/or embody these in designed artifacts. During my M12, I used theories about negotiation behaviour to create a negotiation between human and recommender system, so they could co-regulate self-regulation. During my FMP I went more into self-tracking and its sociological and psychological implications. During my M12 Project and the course Embodying intelligent behavior in social context, I worked with theories of self-regulation, and during the course Design for behavioral change I learned about different theories of behaviour change, and made an intervention based on them.
                            </p>

                        </Tab>
                        <Tab eventKey="CA" title="C&A">
                            <h3>Creativity & Aesthetics</h3>
                            <p>
                                My main ambition for Creativity & Aesthetics was to manage to merge my creative ideas and aesthetical prototypes with the technical ones (T&R). This led to complex functional designs such as Moirai, which used advanced mechanical mechanisms to achieve novel aesthetics of interaction. It also took place in my FMP, where it was possible to give users the possibility to exert their privacy rights through aesthetics of interaction, further integrating this competency with MD&C and U&S. For my M11 project I used a soundscape to represent contextual office data, which was demonstrated in an interactive web app. Next to this, I also developed my digital sketching skills as a means of communicating my ideas effectively and ideate aesthetics quickly, as can be seen in my M21 and FMP projects.
                            </p>
                        </Tab>
                        <Tab eventKey="TR" title="T&R">
                            <h3>Technology & Realization</h3>
                            <p>
                                For Technology and Realization, a goal similar to C&A was formulated that called for tighter integration with the other expertise areas. Before the masters, my T&R prototypes would be ugly, functional prototypes that would be considered separate from the aesthetic prototype.  My M12 Research project Moirai and FMP are the best examples of what a tighter integration would look like with T&R, U&S, and more expertise areas. Moirai was also a very mechanically challenging prototype, allowing me to explore what it is like creating big precise movement with different aluminium parts, driving belts, (linear) bearings, and more. Furthermore, in an earlier iteration I created InCharge, for which I 3D modelled something for the first time.
                            </p>
                        </Tab>
                        <Tab eventKey="BE" title="B&E">
                            <h3>Business & Entrepreneurship</h3>
                            <p>
                                During the bachelors this was my most developed competency area, but since I chose the Constructive Design Research track, the focus shifted away from it to other competency areas. That is not to say I did not further develop in this area, as understanding economic trends, identifying pain points of users, and creating value for multiple stakeholders is still an important part of design. For my M11, we went to users from the start with cultural probes and interviews to identify their pain points when working from home, and learn how we could create value for different personas, combining B&E with U&S. For Complex and adaptive systems, we modelled turnover rate in a company, combining B&E with MD&C and U&S. For my FMP, I had to learn more about IP and open sourcing to make a balanced decision on how to license the repositories, and I also needed an understanding of economic and societal trends about self-tracking. Lastly, in my spare time I run a business together with a partner in which we design board games, and we are in the process of preparing our first Kickstarter campaign.
                            </p>
                        </Tab>
                        <Tab eventKey="DRP" title="D&RP">
                            <h3>Design & Research Process</h3>
                            <p>
                                In the masters, I developed my Design and Research Processes to suit my personal and professional identity better. As stated in my PI, I am a dreamer, and this can sometimes cause moments in the design process where I will try to think everything through beforehand and stay in my head instead of getting into action. This is something I actively tried to avoid, as it never yields the desired results and also doesn’t allow me to use my T&R and MD&C skills as much. During the FMP I managed to get this working better for me: based on theory, I created multiple sets of paper prototypes, and iteratively reflected on them and made new ones. Upon reflecting on them, I abstracted away, resulting in e.g. the affordances framework for the open-ended sensors. Next to this, I also learned more about field research with the course Constructive Design Research, and used the Repository Grid (RepGrid) technique and sentiment analysis in Research Methods. During my M21, I used a method where I did several case studies, and then reflected back on these to improve my framework.
                            </p>
                        </Tab>
                        <Tab eventKey="Skills" title="Skills">
                            <h3>Professional skills</h3>
                            <p>
                                As my desire is to go to academia, there were two domains in which I was most interested improving my skills: reporting and sharing knowledge. In terms of reporting, my reports were often bland, non-aesthetic, heavily text-based reports. Although there is still improvement that can be done in this point, I think the FMP report demonstrates a much more aesthetic style of reporting where the visuals help understand the overall narrative of the report. In terms of sharing knowledge, I have (co-)hosted multiple workshops on technical topics like Arduino or machine learning, which will give me valuable knowledge and experience for teaching during the PhD.
                            </p>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}

export default Competencies
