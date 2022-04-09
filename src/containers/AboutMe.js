import React from "react";
import './AboutMe.css'
import {
    fab as brandIcons
  } from "@fortawesome/free-brands-svg-icons";
import SocialMediaLink from "../components/about-me/SocialMediaLink";
import CompanyProfile from "../components/about-me/CompanyProfile";
import MoreInfo from "../components/about-me/MoreInfo";

function AboutMe(){

    const frogSystemsInfo = require('../data/FrogSystemsInfo.json');
    return(
        <div className="about-me-page">
                <CompanyProfile profile={frogSystemsInfo.companyProfile}/>
                <div className="social-media-parent">
                    <div className="social-media">
                        {(frogSystemsInfo.socialMediaLinks.map((socialMediaLink) => 
                         <SocialMediaLink href={socialMediaLink.href} icon={brandIcons[socialMediaLink.icon]}/>))}
                    </div>
                </div>
                <MoreInfo webLink={frogSystemsInfo.webLink}/>
        </div>  
    );
}

export default AboutMe;