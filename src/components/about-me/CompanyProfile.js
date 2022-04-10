import React from "react";
import './CompanyProfile.css'

function CompanyProfile(props){
    const { name, department, companyName } = props.profile;
  
    return (
        <div className="personal-information">
            <div className="frog-image">
                <img className = "banner-image" src={require('../../assets/frog.gif')}/>
            </div>
            <div className="details">
                <h1>{name}</h1>
                <p>{department}</p>
                <h2>{companyName}</h2>
            </div>
        </div>
    );
}

export default CompanyProfile;