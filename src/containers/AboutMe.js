import React from "react";
import './AboutMe.css'
import {
    faFacebook,
    faTwitter,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
import SocialMediaLink from "../components/about-me/SocialMediaLink";
import CompanyProfile from "../components/about-me/CompanyProfile";
import MoreInfo from "../components/about-me/MoreInfo";

function AboutMe(){
    return(
        <div className="main-logo-page">
            <CompanyProfile/>
            <div className="social">
                <SocialMediaLink href={"https://www.facebook.com/frogsystems"} icon={faFacebook}/>
                <SocialMediaLink href={"https://twitter.com/frogsystemsltd"} icon={faTwitter}/>
                <SocialMediaLink href={"https://www.linkedin.com/company/frog-systems-ltd/"} icon={faLinkedin}/>
            </div>
            <MoreInfo/>
        </div>  
    );
}

export default AboutMe;