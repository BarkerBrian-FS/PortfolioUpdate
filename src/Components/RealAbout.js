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