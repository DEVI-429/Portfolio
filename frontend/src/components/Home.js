import React, { useState, useEffect } from 'react';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import styles from './styles/Home.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import CodeIcon from '@mui/icons-material/Code';
import profile from './images/profile15.png';

function Home() {
    const [isActive, setIsActive] = useState(false);
    const [index, setIndex] = useState(0);
    const roles = [
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Developer',
        'Software Developer',
        'DevOps Engineer'
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    const toggleMenu = () => {
        setIsActive(!isActive);
    }

    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.navName}>
                    <h2>DEVI VARA PRASAD REDDI</h2>
                </div>
                <div className={styles.navItems}>
                    <a href="#Projects">Projects</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Experience">Experience</a>
                    <a href="#Education">Education</a>
                    <a href="#Contact">Contact</a>
                </div>
                <div className={styles.toggleMenu}>
                    <button className={styles.toggleBtn} onClick={toggleMenu}><MenuIcon /></button>
                </div>
            </div>
            <div className={isActive ? `${styles.active}` : `${styles.notactive}`}>
                <a href="#Projects" onClick={toggleMenu}>Projects</a>
                <a href="#Skills" onClick={toggleMenu}>Skills</a>
                <a href="#Experience" onClick={toggleMenu}>Experience</a>
                <a href="#Education" onClick={toggleMenu}>Education</a>
                <a href="#Contact" onClick={toggleMenu}>Contact</a>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.mainContent}>
                    <div style={{ color: 'white' }}>
                        <h2 style={{ textAlign: 'left' }}>Hi,</h2>
                        <h1 style={{ textAlign: 'left' }}>I am Devi Vara Prasad Reddi.</h1>
                        <h2 style={{ textAlign: 'left', color: '#F9D689' }}>{roles[index]}</h2>
                        <div className={styles.social}>
                            <a href="https://www.linkedin.com/in/devi-vara-prasad-reddi-8678a8256/"><LinkedInIcon className={styles.LinkedInIcon} /></a>
                            <a href='https://github.com/DEVI-429'><GitHubIcon className={styles.GitHubIcon} /></a>
                            <a href='https://www.instagram.com/devi_vara_prasad_r___/'><InstagramIcon className={styles.InstagramIcon} /></a>
                            <a href='https://leetcode.com/u/REDDI-DEVI-VARA-PRASAD/'><CodeIcon className={styles.CodeIcon} /></a>
                        </div>
                        <div className={styles.resume}>
                            <a href='#Contact'><button>Hire Me</button></a>
                            <a href='https://drive.google.com/file/d/1mHC8sgRlQPt-vAv8TgZR1BnrsE3XjaBn/view?usp=sharing' download={true} target='_blank'><button>Resume</button></a>
                        </div>
                    </div>
                    <div>
                        <img src={profile} style={{ height: '300px', width: '300px', borderRadius: '10px' }} />
                    </div>
                </div>
            </div>
            <div style={{ top: '-88px', position: 'relative' }} id="Projects">
                <Projects />
            </div>
            <div style={{ top: '-88px', position: 'relative' }} id="Skills">
                <Skills />
            </div>
            <div style={{ top: '-88px', position: 'relative' }} id="Experience">
                <Experience />
            </div>
            <div style={{ top: '-88px', position: 'relative' }} id="Education">
                <Education />
            </div>
            <div style={{ top: '-88px', position: 'relative' }} id="Contact">
                <Contact />
            </div>
            <div style={{ top: '-88px', position: 'relative' }}>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
