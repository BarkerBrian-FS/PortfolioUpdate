import React from 'react';
import { motion } from 'framer-motion';
import me from '../images/CroppedSpaceBoy.png';
import './RealAbout.css';
const AboutMe = () => {


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
        <h1 className="title">Web Developer Focused on Craft and Growth</h1>

        <p className="introduction">
          I’m a veteran and web developer focused on creating clean, 
          engaging digital experiences. With a foundation in web development 
          and design, I’m looking to join a team where I can contribute 
          meaningfully while continuing to grow as a developer.
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