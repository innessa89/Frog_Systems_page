import React from "react";
import './LogoPage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
import {BiInfoCircle} from "react-icons/bi"



function LogoPage(){

    return(
        <div className="main-logo-page">

            <div className="personal-information">
                <img className = "banner-image" src={require('../assets/frog.png')}/>
                <div className="details">
                    <h1>Tod Frogalicious</h1>
                    <p>Research & Development</p>
                    <h2>Frog Systems</h2>
                </div>
            </div>

            <div className="social">
                <a href="https://www.facebook.com/frogsystems"
                className="facebook">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://twitter.com/frogsystemsltd"
                className="twitter">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.linkedin.com/company/frog-systems-ltd/"
                className="linkedin">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                
            </div>

            <div className="more-info">
                <button className="more-info" onClick={(e) => {e.preventDefault();
                window.location.href='https://frogsystems.co.uk/'}}> More info   <BiInfoCircle className="info-icon"/> </button>
            </div>

        </div>
      
    )
};

export default LogoPage;