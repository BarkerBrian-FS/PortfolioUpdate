import React from 'react';
import Nav from '../Components/TopNav.js';
import ContactForm from '../Components/ContactForm'
import EmblaCarousel from '../Components/EmblaCarousel.js';
import AboutMe from  '../Components/AboutMe';
import Experience from '../Components/Experience';
import RealAbout from '../Components/RealAbout.js'

const About = () => {
    return(
    <>
        <div id = 'Nav'>
            <Nav/>
        </div>

        <div id = 'About'>
            <AboutMe/>
        </div>

        <div id = 'RealAbout'>
            <RealAbout/>
        </div>

        <div id = 'Experience'>
            <Experience/>            
        </div>

        <div id='projects'>
            <div className='video'>
                <EmblaCarousel/>
            </div>
        </div>
        
        <div>
            <div id='contact' >
                <div>
                    <ContactForm/>
                </div>
            </div>
        </div>
    </>
    )
};

export default About