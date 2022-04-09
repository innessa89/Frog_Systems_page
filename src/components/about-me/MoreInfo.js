import React from "react";
import {BiInfoCircle} from "react-icons/bi"
import './MoreInfo.css'

function MoreInfo(props) {
    const { webLink } = props;
    const onClick = (e) => {e.preventDefault(); 
        window.location.href= webLink};
    return (
        <div className="more-info">
            <button onClick={onClick} className="button-wrapper">
                <span className="info-span">More info</span>
                <BiInfoCircle size="30px" className="info-icon"/> 
            </button>
        </div>
    );
}
export default MoreInfo;