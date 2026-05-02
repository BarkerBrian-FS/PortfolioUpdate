import React , { useState, useEffect} from 'react';
import './Nav.css';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; 
const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("experience");

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    useEffect(() => {
  const sections = document.querySelectorAll("section, div[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((sec) => observer.observe(sec));

  return () => observer.disconnect();
}, []);
    return (
  <header className="hudHeader" style={styles.myHeader}>

    <div className="hamburger" onClick={toggleMenu}>
      {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
    </div>

    <nav className={`navLink ${menuOpen ? 'active' : ''}`}>
      <ul className="navList" style={styles.navList}>

        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#RealAbout" className={active === "RealAbout" ? "activeLink link" : "link"} >About</a>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#experience" className={active === "experience" ? "activeLink link" : "link"}>Experience</a>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#projects" className={active === "projects" ? "activeLink link" : "link"}>Projects</a>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#contact" className={active === "contact" ? "activeLink link" : "link"}>Contact</a>
        </motion.li>

      </ul>
    </nav>

  </header>
);
};

export default Nav;

const styles = {
myHeader: {
  padding: '0.8rem 1.5rem',

  display: 'flex',
  justifyContent: 'center',   
  alignItems: 'center',

  position: 'fixed',
  top: '20px',
  left: '50%',
  transform: 'translateX(-50%)',

  width: '90%',
  maxWidth: '900px',

  zIndex: 1000,

  background: 'rgba(0,0,0,0.4)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(0,255,204,0.15)',
  borderRadius: '12px',

  overflow: 'hidden',
},

navList: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',

  listStyle: 'none',
  padding: 0,
  margin: 0,
},
link: {
  fontFamily: 'Anta, sans-serif',
  fontWeight: 200,
  fontSize: '1.1rem',
  margin: ".5rem",
  textDecoration: "none",

  letterSpacing: '1px',

  transition: 'all 0.2s ease',
},

nav: {
    marginRight: '3%',
},
    
};
