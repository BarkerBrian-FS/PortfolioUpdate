import React from 'react';
import { motion } from 'framer-motion';
import figma from '../images/figma.png';
import css from '../images/css.png';
import js from '../images/js.png';
import nodejs from '../images/nodejs.png';
import html from '../images/html.png';
import react from '../images/physics.png';
import mongo from '../images/mongodb.svg';
import portal from '../images/Portal.png';
import './Experience.css';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { img: html, name: "HTML5", years: 4 },
      { img: css, name: "CSS", years: 4 },
      { img: js, name: "JavaScript", years: 4 },
      { img: react, name: "React", years: 4 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { img: nodejs, name: "Node.js", years: 4 },
      { img: mongo, name: "MongoDB", years: 4 },
    ]
  },
  {
    title: "Tools",
    skills: [
      { img: figma, name: "Figma", years: 4 },
    ]
  }
];

const Experience = () => {
  
    return (
        <div 
            id='experience' 
            className='rocketBg' 
            style={{
                backgroundImage: `radial-gradient(transparent 40%, black 72%),
                linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                url(${portal})`
            }}
                    >
                        <div className="skillsWrapper">
            {skillCategories.map((category, i) => (
                <div key={category.title} className="category">

                <h2 className="categoryTitle">{category.title}</h2>

                <div className="skillsGrid">
                    {category.skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className="skillCard"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        viewport={{ once: true }}
                    >
                        <img src={skill.img} alt={skill.name} />

                        <p>{skill.name}</p>

                    <p className="skillName">{skill.name}</p>
                            <span className="skillMeta">{skill.years} yrs</span>

                    </motion.div>
                    ))}
                </div>

                </div>
            ))}
            </div>
        </div>
    );
};

export default Experience;

const styles = {
   
};









