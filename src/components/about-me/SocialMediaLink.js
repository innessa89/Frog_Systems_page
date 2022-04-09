import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SocialMediaLink.css';

function SocialMediaLink(props){
    const {href, icon} = props;
    return (
        <a href={href}>
            <FontAwesomeIcon icon={icon} size="2x" />
        </a>
    );
}

export default SocialMediaLink;