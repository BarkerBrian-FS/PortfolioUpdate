import React from 'react';
import { motion } from 'framer-motion';
import github from '../images/github.png';
import linkedIn from '../images/linkedin.png';
import './ContactButtons.css';

const ContactButtons = () => {
  const icons = [
    {
      href: 'https://github.com/BarkerBrian-FS?tab=repositories',
      img: github,
      alt: 'github'
    },
    {
      href: 'https://www.linkedin.com/in/brian-barker-498537202/',
      img: linkedIn,
      alt: 'linkedIn'
    }
  ];

  return (
    <div className="socialRow">
      {icons.map((icon, i) => (
        <motion.a
          key={i}
          href={icon.href}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="socialIcon"
        >
          <img src={icon.img} alt={icon.alt} />
        </motion.a>
      ))}
    </div>
  );
};

export default ContactButtons;

