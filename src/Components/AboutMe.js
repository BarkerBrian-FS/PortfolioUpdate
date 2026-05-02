import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import beginningNoBg from '../images/BeginningNoBg.png';
import beginning from '../images/Beginning.png';
import './About.css';
const AboutMe = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['center','end start'],
    })
    const backgroundY = useTransform(scrollYProgress, [0,1 ], ['0%', '-50%']);
    const textY = useTransform(scrollYProgress, [0,1], ['0%','110%'])
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
    };

  return (
    <>
    <div ref={ref} className='body-space' style = {styles.bodySpace}>
        <div className='sticky'>
            <div className='bg' style={{backgroundImage: `url(${beginning})`}}>
            <div className='earth' style ={{ backgroundImage: `radial-gradient(transparent 40%, black 75%),url(${beginningNoBg})`}}/>
            <div style={styles.about}>
                <div style={styles.intro}>
                    <motion.div style={{y: textY}}className='intro'>
                        <h1 style={styles.name} className='about_name'>Brian Barker</h1>
                        <p style={styles.para} className='about_para'>Enter My Orbit
            Where ideas turn into interactive, real-world applications</p>
                    </motion.div>
                </div>
            </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default AboutMe


