import React from 'react';
import LinkedIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";
function Home() {
  return (
    <div className="Home">
      <div className="about"> 
        <h2> Hi, My name is Robert</h2>
        <div className="prompt"> 
          <p> A software developer with a passion for learning and creating</p>
          <a href="https://www.linkedin.com/in/robert-froeschl-921323221/" target="_blank" rel="noopener noreferrer"><LinkedIcon/></a>
          <a href="https://github.com/Rwfroeschl" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
          <a href="mailto:rwfroeschl@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></a> 
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1> 
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span> React, Flutter, HTML, CSS, Flutter, BootStrap, Yarn, MaterialUI </span>
          </li>
          <li className="item">
            <h2> Back-End</h2>
            <span> WHM, AWS Amplify, Firebase, Datadog, Jira</span>
          </li>
          <li className="item">
            <h2> Languages </h2>
            <span> JavaScript, Python, C++, C, Go, Swift</span>
          </li>
        </ol>
        </div>
    </div>
  );
}

export default Home;