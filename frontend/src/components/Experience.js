import React from 'react';
import styles from './styles/Projects.module.css';
import SS from './images/SS.jpg'
import WEB from './images/WEB.png'
import { FaBriefcase } from 'react-icons/fa';

const projects = [
  {
    company:"Indian Institue of Information Technoloy, Sricity",
    title: "SPORTS SECRETARY",
    description: "As the sports secretary at IIIT Sricity, I introduced and successfully organized the first Intra-UG Tournament, attracting nearly 200 students from various disciplines, with UG3 emerging as the winners.",
    image: SS,
    duration:"Aug 2023 - April 2024"
  },
  {
    company:"Null Class",
    title: "Full Stack Web Developer Intern",
    description: "Build a simple blogging site as a training course using MERN stack and Firebase for authentication.",
    image: WEB,
    duration:"May 2024 - Present"
  }
];

function Experience() {
  return (
    <div className={styles.projects}>
      <h1 className={styles.title}><FaBriefcase/>Experience</h1>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={`${styles.projectContainer}`}>
              <>
                <div className={styles.projectCard}>
                  <img src={project.image} alt={project.title} className={styles.image} />
                </div>
                <div className={styles.projectInfo}>
                  <h2>{project.title}</h2>
                  <p>Company: {project.company}</p>
                  <p>{project.description}</p>
                  <p style={{color:'grey'}}>{project.duration}</p>
                </div>
              </>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
