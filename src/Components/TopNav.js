import React , { useState } from 'react';
import './Nav.css';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; 
const Nav = () => {
     const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header style={styles.myHeader}>
            <div className="logo" style={styles.logo}>
                <h1>Creative Web Developer</h1>
            </div>

            {/* Hamburger Icon (Visible on Mobile) */}
                <div id='hamburger' className="hamburger" onClick={toggleMenu} style={styles.hamburger}>
                    {menuOpen ? <FaTimes size={30} color="#e0e1dd" /> : <FaBars size={30} color="#e0e1dd" />}
                </div>
    
            {/* Navigation Links */}
            <nav className={`navLink ${menuOpen ? 'active' : ''}`}>
                <ul className="navList" style={styles.navList}>
                        <motion.li whileHover={{ scale: 1.1, color: '#ffffff',
                        textShadow: '0 0 10px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.5)', }} 
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}>
                            <a href="#experience" style={styles.link} onClick={toggleMenu}>Experience</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1, color: '#ffffff',
                        textShadow: '0 0 10px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.5)', }} 
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}>
                            <a href="#projects" style={styles.link} onClick={toggleMenu}>Projects</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1, color: '#ffffff',
                        textShadow: '0 0 10px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.5)', }} 
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}>
                            <a href="#contact" style={styles.link} onClick={toggleMenu}>Contact</a>
                        </motion.li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;

const styles = {
    myHeader: {
        padding: '1%',
        backgroundColor: 'black',
        color: '#F2AF29',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
    },
    logo: {
        fontFamily: 'Anta, sans-serif',
        fontWeight: 500,
        fontSize: '1.3rem',
        marginLeft: '2.5%',
        color: '#e0e1dd',
    },
    nav: {
        marginRight: '3%',
    },
    navList: {
        display: 'flex',
        alignItems: 'center',
        listStyle: 'none',
        padding: 0,
    },
    link: {
        fontFamily: 'Anta, sans-serif',
        fontWeight: 200,
        fontSize: '1.8rem',
        margin: ".5rem",
        textDecoration: "none",
        color: '#e0e1dd',
        
    },
    
};
