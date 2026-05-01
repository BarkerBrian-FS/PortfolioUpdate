import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import buttonPicture from '../images/buttonPicture.jpg';
import alienCivil from '../images/AlienPortalCivilization.png';
import './Contact.css';
import ContactButtons from './ContactButtons';

export const ContactForm = () => {
  const form = useRef();
  const [scanning, setScanning] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    
    setScanning(true); // start radar

    emailjs
      .sendForm(
        'service_stmew67', 
        'template_4h54lr8', 
        form.current, {
        publicKey: 
        'huqTxf4ikvWEbKvV6',
      })
       .then(() => {
      form.current.reset();

      setTimeout(() => {
        setScanning(false);
        setSent(true);

        setTimeout(() => setSent(false), 3000);
      }, 1200); // radar duration
    })
    .catch((err) => {
      setScanning(false);
      console.log(err);
    });
  };

  return (
    <div className="contactWrapper" style= {{backgroundImage: `radial-gradient(transparent 40%, black 72%),url(${alienCivil})`}}>

      <motion.div
      className="contactCard"
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      >
      <div className="contactCard">
    {scanning && <div className="radarOverlay" />}
      <div className="terminalHeader">
          <span>COMMUNICATION TERMINAL</span>
          <span className="terminalStatus">
            {sent ? "TRANSMISSION SENT" : "ONLINE"}
          </span>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contactForm">

          <h2 className="contactTitle">Contact Me</h2>

          <div className="formGroup">
            <label>Name</label>
            <input type="text" name="user_name" required />
          </div>

          <div className="formGroup">
            <label>Email</label>
            <input type="email" name="user_email" required />
          </div>

          <div className="formGroup">
            <label>Message</label>
            <textarea name="message" rows="4" required />
          </div>

          <motion.button
            className="submitBtn"
            initial={{ backgroundColor: 'white',color: 'black',borderColor: 'black' }}
            whileHover={{ scale: 1.07, backgroundImage: `url(${buttonPicture})`,color: 'white',borderColor: 'white' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
          >
            Send
          </motion.button>

        </form>

        <div className="contactButtons">
          <ContactButtons />
        </div>

      </div>
    </motion.div>
    </div>
  );
};

export default ContactForm;
