import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import me from '../images/CroppedSpaceBoy.png';
import distantPortal from '../images/PortalInDistance.png';
import './RealAbout.css';
const AboutMe = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 501);
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024 && window.innerWidth < 1440);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1440);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 501);
            setIsTablet(window.innerWidth >= 501 && window.innerWidth < 1024);
            setIsDesktop(window.innerWidth >= 1024 && window.innerWidth < 1440);
            setIsLargeScreen(window.innerWidth >= 1440);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const styles = {
        about: {
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'row',
            alignItems: 'center',
            textAlign: isMobile ? 'center' : 'left',
            maxWidth: isLargeScreen ? '100%' : '100%',
            margin: isLargeScreen ? '0 auto' : '0',
        },
        img: {
            height: isMobile ? '550px' 
                : isTablet ? '600px' 
                : isDesktop ? '950px' 
                : '950px', // Large screen image height
            width: 'auto',
            marginTop: isMobile ? '10rem': isLargeScreen ? '8rem' : '0rem',
            marginLeft: isMobile ? '8rem' : '10rem',
            marginRight: isMobile ? '-10rem' : isLargeScreen ? '-10rem' : '10rem',
        },
        name: {
            color: 'white',
            fontFamily: 'Anta, sans-serif',
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontSize: isMobile ? '2rem' 
                : isTablet ? '3rem' 
                : isDesktop ? '4rem' 
                : '5rem', // Large screen font size
            marginLeft: isMobile ? '0rem': '10rem',
            marginTop: isMobile ? '1rem' : isLargeScreen ? '-8rem' : '20rem',
        },
        para: {
            fontFamily: 'Anta, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: isMobile ? '1rem' 
                : isTablet ? '1.2rem' 
                : isDesktop ? '1.5rem' 
                : '1.8rem', // Larger text for large screens
            color: 'white',
            margin: isMobile ? '0rem' : isLargeScreen ? '0rem 20rem -2rem 10rem' : '0rem 20rem -2rem 10rem',
            marginRight: isMobile ? '-5rem' : isLargeScreen ? '-10rem' : '10rem',
            marginBottom: isMobile ? '2rem' : '10rem',
            maxWidth: isLargeScreen ? '70%' : '100%',
            backgroundImage: isMobile ? 'linear-gradient(to right, transparent 1%, black 100%)': 'linear-gradient(to right, transparent 100%, black 0%)',
        },
        bodySpace: {
            width: '100%',
            height: '100%',
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
    };

  return (
    <>
     <div className="aboutWrapper">

    <div className="aboutContent">

      {/* LEFT TEXT */}
      <motion.div
        className="aboutText"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="title">Brian Barker</h1>

        <p className="introduction">
          Welcome! I am a hardworking veteran looking to enter the tech field.
          I recently graduated from school for web development and design.
          I have a passion for creating in the digital space and would love to
          find a company where I can contribute and grow my skills.
        </p>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="aboutImage"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src={me} alt="me" />
      </motion.div>

    </div>

  </div>
    </>
  )
}

export default AboutMe