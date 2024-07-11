import React from 'react'
import styles from './styles/Skills.module.css'
import { SiExpress, SiVercel } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaReact, FaNodeJs, FaJava, FaPython, FaBootstrap, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";
import { FaCogs } from 'react-icons/fa';
import { SiPostman } from "react-icons/si";
import { AiOutlineThunderbolt } from "react-icons/ai";

function Skills() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title} style={{color:'grey'}}><FaCogs/>Skills</h1>
      <div className={styles.mainContent}>
        <div className={styles.card}>
          <h3>Languages</h3>
          <div className={styles.iconContainer}>
            <FaJava className={styles.icon + ' ' + styles.faJava}/>
            <FaPython className={styles.icon + ' ' + styles.faPython}/>
            <TbSql className={styles.icon + ' ' + styles.tbSql}/>
            <span className={styles.icon}>C</span>
            <RiJavascriptFill className={styles.icon + ' ' + styles.riJavascriptFill}/>
          </div>
        </div>
        <div className={styles.card}>
          <h3>Web</h3>
          <div className={styles.iconContainer}>
            <FaHtml5 className={styles.icon + ' ' + styles.faHtml5}/>
            <FaCss3Alt className={styles.icon + ' ' + styles.faCss3Alt}/>
            <FaNodeJs className={styles.icon + ' ' + styles.faNodeJs}/>
          </div>
        </div>
        <div className={styles.card}>
          <h3>Databases</h3>
          <div className={styles.iconContainer}>
            <DiMongodb className={styles.icon + ' ' + styles.diMongodb}/>
            <GrMysql className={styles.icon + ' ' + styles.grMysql}/>
          </div>
        </div>
        <div className={styles.card}>
          <h3>Frameworks</h3>
          <div className={styles.iconContainer}>
            <FaReact className={styles.icon + ' ' + styles.faReact}/>
            <SiExpress className={styles.icon + ' ' + styles.siExpress}/>
            <FaBootstrap className={styles.icon + ' ' + styles.faBootstrap}/>
          </div>
        </div>
        <div className={styles.card}>
          <h3>Tools</h3>
          <div className={styles.iconContainer}>
            <IoLogoFirebase className={styles.icon + ' ' + styles.ioLogoFirebase}/>
            <FaGitAlt className={styles.icon + ' ' + styles.faGitAlt}/>
            <FaGithub className={styles.icon + ' ' + styles.faGithub}/>
            <VscVscode className={styles.icon + ' ' + styles.vscVscode}/>
            <SiMysql className={styles.icon + ' ' + styles.siMysql}/>
            <SiVercel className={styles.icon + ' ' + styles.siVercel}/>
            <SiPostman className={styles.icon + ' ' + styles.siPostman}/>
            <AiOutlineThunderbolt className={styles.icon + ' ' + styles.ThunderClient} title='Thunder Client'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
