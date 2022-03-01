import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button'

import When from './When';

function Skills() {
    return (
        <ListGroup variant="flush">
            {
                skillSet.map((skillGroup) => (
                    <ListGroup.Item>
                        <h5>{skillGroup.Title}</h5>
                        {skillGroup.subSkills.map((skill) => (
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 150, hide: 200 }}
                                overlay={
                                    <Tooltip id="button-tooltip">
                                        {skill.skillDescription}
                                        <When condition={skill.devIcons.length > 0}>
                                            <br /><br />
                                            {skill.devIcons.map((iconName) => (
                                                <i style={{ margin: '5px', fontSize: '2rem' }} class={iconName}></i>
                                            ))}
                                        </When>
                                        <br />
                                    </Tooltip>
                                }
                            >
                                <Button style={{ marginRight: '.5rem', marginBottom: '.5rem' }} size="sm" variant="outline-success">
                                    {skill.skillName} { }
                                    {skill.devIcons.slice(0, 3).map((iconName) => (
                                        <i style={{ marginRight: '5px', fontSize: '1rem' }} class={iconName}></i>
                                    ))}
                                    <When condition={skill.devIcons.length > 3}>
                                        ...
                                    </When>
                                </Button>
                            </OverlayTrigger>
                        ))}
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    )
}

export default Skills

const skillSet = [
    {
        Title: "Academic design",
        subSkills: [
            {
                skillName: "Research through Design",
                skillDescription: "Experience with different design and design research processes.",
                devIcons: [],
                awesomeIcons: [""]
            },
            {
                skillName: "Qualitative and quantitative user research methods",
                skillDescription: "Experience with interviews, questionnaires, observations, focus groups, cultural probes.",
                devIcons: []
            }
        ]
    },
    {
        Title: "Technical",
        subSkills: [
            {
                skillName: "Physical computing",
                skillDescription: "Proficient working with microcontrollers and single-board computers (Arduino, Raspberry Pi, ESP) and applied electronics (circuit and PCB prototyping).",
                devIcons: [
                    "devicon-raspberrypi-line",
                    "devicon-arduino-plain-wordmark"
                ]
            },
            {
                skillName: "Interactive application programming",
                skillDescription: "Experience programming with Processing, Android Studio, and Unity. Mock-ups using Figma and Adobe XD",
                devIcons: [
                    "devicon-processing-plain",
                    "devicon-android-plain",
                    "devicon-unity-original",
                    "devicon-figma-plain",
                    "devicon-xd-plain"
                ]
            },
            {
                skillName: "Physical prototyping",
                skillDescription: "Experience with basic 3D modelling and 3D printing, laser cutting, basic woodworking, and rapid paper/foam prototyping.",
                devIcons: []
            },
            {
                skillName: "Web development",
                skillDescription: "Experience with basic front-end (HTML, CSS, JavaScript, React) and back-end (NodeJS, MongoDB, PHP, SQL) development.",
                devIcons: [
                    "devicon-html5-plain",
                    "devicon-css3-plain",
                    "devicon-javascript-plain",
                    "devicon-react-original",
                    "devicon-nodejs-plain",
                    "devicon-mongodb-plain-wordmark",
                    "devicon-php-plain",
                    "devicon-mysql-plain"
                ]
            },
            {
                skillName: "Machine learning",
                skillDescription: "Basic understanding of and experience with applied machine learning and TinyML, using Python and EdgeImpulse.",
                devIcons: [
                    "devicon-python-plain",
                    "devicon-tensorflow-original"
                ]
            }
        ]
    },
    {
        Title: "Other",
        subSkills: [
            {
                skillName: "Languages",
                skillDescription: "Fluent in Dutch (native), French (native speaker), English (academic)",
                devIcons: []
            },
            {
                skillName: "Presenting",
                skillDescription: "Used to presenting projects through pitches, video’s (script writing, shooting, editing), posters, etc.",
                devIcons: []
            },
            {
                skillName: "Audio/video production",
                skillDescription: "Knowledge on and experience with the (professional) recording and editing of audio and video.",
                devIcons: [
                    "devicon-premierepro-plain",
                    "devicon-aftereffects-plain"
                ]
            },
            {
                skillName: "Graphic design software",
                skillDescription: "Proficient with Adobe CC (e.g., Illustrator, Photoshop, Premiere Pro, After Effects, Lightroom) and ProCreate.",
                devIcons: [
                    "devicon-illustrator-plain",
                    "devicon-photoshop-plain"
                ]
            },
            {
                skillName: "Design sketching",
                skillDescription: "Able to make digital and physical design sketches.",
                devIcons: []
            },
            {
                skillName: "Ideation methods",
                skillDescription: "Experience with multiple brainstorming methods, also in the facilitator role.",
                devIcons: []
            },
            {
                skillName: "Business knowledge",
                skillDescription: "Familiar with concepts as design thinking, lean startup, sprints, business model canvas, value proposition canvas. Experience running self-owned businesses.",
                devIcons: []
            }
        ]
    }

]