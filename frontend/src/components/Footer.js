import React from 'react';
import styles from './styles/Footer.module.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialSection}>
          <h2 className={styles.heading}>Follow Me</h2>
          <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/devi-vara-prasad-reddi-8678a8256/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className={styles.socialIcon} />
            </a>
            <a href="https://github.com/DEVI-429" target="_blank" rel="noopener noreferrer">
              <FaGithub className={styles.socialIcon} />
            </a>
            <a href="https://www.instagram.com/devi_vara_prasad_r___/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.socialIcon} />
            </a>
          </div>
        </div>
        <div className={styles.aboutSection}>
          <h2 className={styles.heading}>About Me</h2>
          <p>Hi! I'm a software developer with a passion for creating innovative and efficient solutions. Feel free to reach out if you’d like to work together!</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} DEVI VARA PRASAD REDDI . All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
