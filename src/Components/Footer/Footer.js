import React from 'react'
import classes from './Footer.module.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faYoutube, faSpotify, faFacebook } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
      <div className={classes.container}>
        <div className={classes.heading}>The Generics</div>
        <div >
          <a className={classes.anchor} href="https://www.youtube.com/" target="_blank" >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a className={classes.anchor} href="https://open.spotify.com/" target="_blank" >
            <FontAwesomeIcon icon={faSpotify} size="2x" />
          </a>
          <a className={classes.anchor} href="https://www.facebook.com/" target="_blank" >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
      </div>
    );
  };
  
  export default Footer;
