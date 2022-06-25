import React from 'react'
import Banner from '../Components/Banner';
import AboutMe from '../Components/AboutMe';
import MyWork from '../Components/MyWork';
import ContactMe from '../Components/ContactMe';
import Container from 'react-bootstrap/Container';
import Publications from '../Components/Publications';
import Vision from '../Components/Vision';
import Identity from '../Components/Identity';
import Past from '../Components/Past';
import Competencies from '../Components/Competencies';
import Development from '../Components/Development';
import Future from '../Components/Future';

function Home() {
    return (
        <>
            {/* <Container fluid style={{
                // backgroundImage: `url(${require('../Content/Images/DJI_0064.jpg')})`,
                backgroundSize: 'cover', backgroundPosition: 'right', backgroundAttachment: 'fixed'
            }}> */}

            <Banner />

            {/* </Container> */}

            <Identity />

            <Vision />

            <Container id='PastHeader' fluid style={{
                height: '30rem', marginTop: '4rem', marginBottom: '3rem',
                backgroundImage: `url(${require('../Content/Images/Past_Picture.jpeg')})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                position: 'relative'
            }}>
                <h1 className='container-header'>Past</h1>
                <p className='header-annotation'>A 10-year old me interacting with a robot from the TU/e robot football team</p>
            </Container>

            <Past />

            <Container id='PresentHeader' fluid style={{
                height: '30rem', marginTop: '4rem', marginBottom: '3rem',
                backgroundImage: `url(${require('../Content/Images/DJI_0064.jpg')})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                position: 'relative'
            }}>
                <h1 className='container-header'>Present</h1>
                <p className='header-annotation'>Birds-eye view from TU/e campus, taken during DJI drone workshop</p>
            </Container>

            <Development />

            <MyWork />

            <Publications />

            <Competencies />

            <Container id='FutureHeader' fluid style={{
                height: '30rem', marginTop: '4rem', marginBottom: '3rem',
                backgroundImage: `url(${require('../Content/Images/IMG_6504.JPG')})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                position: 'relative'
            }} >
                <h1 className='container-header'>Future</h1>
                <p className='header-annotation'>Interviewing users in the User Lab at the University of Luxembourg</p>
            </Container>

            <Future />
        </>
    )
}

export default Home
