import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import beginningNoBg from '../images/BeginningNoBg.png';
import beginning from '../images/Beginning.png';
import './About.css';
const AboutMe = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start start','end start'],
    })
    const backgroundY = useTransform(scrollYProgress, [0,1 ], ['0%', '-50%']);
    const textY = useTransform(scrollYProgress, [0,1], ['0%','70%'])
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
        name: {
            // color: 'white',
            // fontFamily: 'Anta, sans-serif',
            // fontWeight: 'bold',
            // fontStyle: 'normal',
            // fontSize: isMobile ? '2rem' 
            //     : isTablet ? '3rem' 
            //     : isDesktop ? '4rem' 
            //     : '5rem', // Large screen font size
            // marginLeft: isMobile ? '10rem': '10rem',
            // marginTop: isMobile ? '5rem' : isLargeScreen ? '20rem' : '20rem',
        },
        para: {
            // fontFamily: 'Anta, sans-serif',
            // fontWeight: 400,
            // fontStyle: 'normal',
            // fontSize: isMobile ? '1rem' 
            //     : isTablet ? '1.2rem' 
            //     : isDesktop ? '1.5rem' 
            //     : '1.8rem', // Larger text for large screens
            // color: 'white',
            // margin: isMobile ? '0rem' : isLargeScreen ? '0rem 20rem -2rem 10rem' : '0rem 20rem -2rem 10rem',
            // marginRight: isMobile ? '-5rem' : isLargeScreen ? '-10rem' : '10rem',
            // marginBottom: isMobile ? '2rem' : '10rem',
            // maxWidth: isLargeScreen ? '70%' : '100%',
            // backgroundImage: isMobile ? 'linear-gradient(to right, transparent 1%, black 100%)': 'linear-gradient(to right, transparent 100%, black 0%)',
        },
        bodySpace: {
            // width: '100%',
            // height: '100%',
            // overflowX: 'hidden',
            // overflowY: 'hidden',
        }
    };

  return (
    <>
    <div ref={ref} className='body-space' style = {styles.bodySpace}>
        <div className='bg' style={{y:backgroundY, backgroundImage: `url(${beginning})`}}>
        <div className='earth' style ={{ backgroundImage: `radial-gradient(transparent 40%, black 75%),url(${beginningNoBg})`}}/>
        <div style={styles.about}>
            <div style={styles.intro}>
                <motion.div style={{y: textY}}className='intro'>
                    <h1 style={styles.name} className='name'>Brian Barker</h1>
                    <p style={styles.para} className='para'>Enter My Orbit
Where ideas turn into interactive, real-world applications</p>
                </motion.div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default AboutMe


{/* <div ref={ref} className="body-space">

  <div className="bg" />

  <motion.div
    className="earth"
    style={{ y: planetY }}
  />

  <div className="text-layer">
    <motion.div style={{ y: textY }}>
      <h1>Brian Barker</h1>
      <p>Enter My Orbit...</p>
    </motion.div>
  </div>

</div> */}