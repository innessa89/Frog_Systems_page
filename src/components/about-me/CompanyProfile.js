import React from "react";
import './CompanyProfile.css'

function CompanyProfile(){
    return (
        <div className="personal-information">
            <img className = "banner-image" src={require('../../assets/frog.png')}/>
            <div className="details">
                <h1>Tod Frogalicious</h1>
                <p>Research & Development</p>
                <h2>Frog Systems</h2>
            </div>
        </div>
    );
}

export default CompanyProfile;