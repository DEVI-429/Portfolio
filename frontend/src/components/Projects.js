import React from 'react';
import styles from './styles/Projects.module.css';
import MBMS from './images/MBMS.jpeg';
import FYM from './images/FYM.jpg';
import MBS from './images/MBS.jpg';
import CM from './images/CM.jpg';
import BS from './images/BS2.jpg'; 
import HSI from './images/HSI3.png';
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiCnn } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiFirebase } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaProjectDiagram } from 'react-icons/fa';

const projects = [
  {
    title: "Military Base Management System",
    description: "Java application system to manage the personnel, equipment, and resources of a military base.",
    github: "https://github.com/DEVI-429/MBMS",
    image: MBMS,
    technologies: [FaJava, SiMysql],
  },
  {
    title: "Frame Your Memories",
    description: "A comprehensive platform to streamline event planning and coordination.",
    github: "https://github.com/DEVI-429/REACT-fym",
    demo: "https://projectfym-suhas.vercel.app/",
    image: FYM,
    technologies: [FaReact, FaNodeJs, SiExpress, DiMongodb, RiJavascriptFill, FaBootstrap, IoLogoVercel],
  },
  {
    title: "Mini Bloggin Site",
    description: "A mini Blogging where a user can interact by signing up to the site and by posting pictures, texts, and videos.",
    github: "https://github.com/DEVI-429/Twitter-clone-frontend",
    demo: "https://twitter-clone-git-main-devis-projects-dd5d529f.vercel.app/login",
    image: MBS,
    technologies: [FaReact, FaNodeJs, SiExpress, DiMongodb, IoLogoFirebase, RiJavascriptFill, IoLogoVercel],
  },
  {
    title: "Contact Manager",
    description: "An application to efficiently manage and organize personal and professional contacts.",
    github: "https://github.com/DEVI-429/ContactManager",
    demo: "https://contact-manager-virid.vercel.app/register",
    image: CM,
    technologies: [FaReact, FaNodeJs, SiExpress, DiMongodb, RiJavascriptFill, IoLogoVercel],
  },
  {
    title: "Book Store",
    description: "A backend application to efficiently manage books and reviews in a bookstore.",
    github: "https://github.com/DEVI-429/BookStore",
    image: BS,
    technologies: [FaNodeJs, SiExpress, DiMongodb, RiJavascriptFill],
  },
  {
    title: "Hyper Spectral Image Classification",
    description: "A deep learning model for hyperspectral image classification for crop health monitoring, stress detection, and soil property analysis and achieved 93% accuracy on the Indian Pines and Salinas datasets.",
    image: HSI,
    technologies: [FaPython, SiCnn],
  },
];

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1 className={styles.title}><FaProjectDiagram/>Projects</h1>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={`${styles.projectContainer}`}>
            {index % 2 === 0 ? (
              <>
                <div className={styles.projectCard}>
                  <img src={project.image} alt={project.title} className={styles.image} />
                  <div className={styles.buttons}>
                    {project.github && (
                    <a href={project.github} className={styles.button} target="_blank" rel="noopener noreferrer">GitHub</a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className={styles.button} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    )}
                  </div>
                </div>
                <div className={styles.projectInfo}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className={styles.technologies}>
                    {project.technologies.map((TechIcon, techIndex) => (
                      <TechIcon 
                        key={techIndex} 
                        className={`${styles.techIcon} ${styles[TechIcon.name.toLowerCase()]}`} 
                      />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.projectInfo}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className={styles.technologies}>
                    {project.technologies.map((TechIcon, techIndex) => (
                      <TechIcon 
                        key={techIndex} 
                        className={`${styles.techIcon} ${styles[TechIcon.name.toLowerCase()]}`} 
                      />
                    ))}
                  </div>
                </div>
                <div className={styles.projectCard}>
                  <img src={project.image} alt={project.title} className={styles.image} />
                  <div className={styles.buttons}>
                    {project.github && (
                    <a href={project.github} className={styles.button} target="_blank" rel="noopener noreferrer">GitHub</a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className={styles.button} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;