import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import "../styles/Footer.css";

function Footer() {
  return ( 
  <div className= "footer">
    <div className="socialMedia"> 
      <a href="mailto:rwfroeschl@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></a>
      <a href="https://www.instagram.com/bobbyfroeschl/" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
      <a href="https://www.linkedin.com/in/robert-froeschl-921323221/" target="_blank" rel="noopener noreferrer"><LinkedIcon /></a>
      <a href="https://www.facebook.com/profile.php?id=100005642899041" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
    </div>
    <p> &copy; 2024 rwfroeschl.github.io</p>
     </div>
    );
}

export default Footer;