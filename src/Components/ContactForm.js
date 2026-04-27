import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import buttonPicture from '../images/buttonPicture.jpg';
import alienCivil from '../images/AlienPortalCivilization.png';
import './Contact.css';
import ContactButtons from './ContactButtons';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_stmew67', 
        'template_4h54lr8', 
        form.current, {
        publicKey: 
        'huqTxf4ikvWEbKvV6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
           form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
      <div className='spaceBg2' style= {{backgroundImage: `radial-gradient(transparent 40%, black 72%),url(${alienCivil})`}}>
        <form ref={form} onSubmit={sendEmail} style={style.form} className='contact-form'>
          <div style= {style.name} className='name'>
            <label className='label'>Name</label>
            <div><input type="text" name="user_name" /></div>
          </div>
          <div style= {style.email} className='email'>
            <label className='label'>Email</label>
            <div><input type="email" name="user_email" /></div>
          </div>
          <div style= {style.message}className='message'>
            <div>
              <label className='label'>Message</label>
            </div>
              <textarea name="message" />
          </div>
          <div className='submit'>
            <motion.button
            initial={{ backgroundColor: 'white',color: 'black',borderColor: 'black' }}
            whileHover={{ scale: 1.1, backgroundImage: `url(${buttonPicture})`,color: 'white',borderColor: 'white' }}
            whileTap={{ scale: 0.9 }}
            
            type="submit" style={style.input}>Send</motion.button>
          </div>
        </form>
        <div className='contact-buttons'>
          <ContactButtons/>
        </div>
      </div>
  );
};

export default ContactForm;

const style = {
  form:{
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '36rem',
    borderRadius: '3px',
    height: '600px',
  },
  name:{
    marginTop: '160px',
    color: 'white',
  },
  email:{
    marginTop: '15px',
    color: 'white'
  },
  message:{
    marginTop: '15px',
    color: 'white'
  },
  input:{
    width: '20%',
    height: '40px',
    marginLeft: '15%',
    marginRight: 'auto',
    marginTop: '15px',
    borderRadius: '8px',
    fontFamily: 'Anta, sans-serif',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: '1.5rem',
  },

}
