import React from 'react';
import styles from './styles/Education.module.css';
import { FaGraduationCap } from 'react-icons/fa';

function Education() {
  const educationData = [
    {
      institution: 'Indian Institute of Information Technology, Sricity',
      degree: 'Bachelor of Technology in Computer Science',
      duration: '2021 - 2025',
      grade: 'CGPA: 8.5/10',
    },
    {
      institution: 'Narayana Junior College',
      degree: '12th Grade',
      duration: '2019 - 2021',
      grade: 'Marks: 977/1000',
    },
    {
      institution: 'Narayana High School',
      degree: '10th Grade',
      duration: '2018 - 2019',
      grade: 'GPA: 10/10',
    }
  ];

  return (
    <div className={styles.education}>
      <h1 className={styles.title}>
        <FaGraduationCap className={styles.icon} /> Education
      </h1>
      <div className={styles.timeline}>
        {educationData.map((edu, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h2 className={styles.institution}>{edu.institution}</h2>
              <p className={styles.degree}>{edu.degree}</p>
              <p className={styles.duration}>{edu.duration}</p>
              <p className={styles.grade}>{edu.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
