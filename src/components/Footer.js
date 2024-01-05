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
      <EmailIcon />
      <InstagramIcon/>
      <LinkedIcon />
      <FacebookIcon />
    </div>
    <p> &copy; 2024 rwfroeschl.github.io</p>
     </div>
    );
}

export default Footer;