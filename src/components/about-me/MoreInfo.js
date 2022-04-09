import React from "react";
import {BiInfoCircle} from "react-icons/bi"
import './MoreInfo.css'

function MoreInfo() {
    const onClick = (e) => {e.preventDefault(); 
        window.location.href='https://frogsystems.co.uk/'};
    return (
        <div className="more-info">
            <button onClick={onClick} className="button-wrapper">
                <div className="info-span">
                    <span>More info</span>
                </div>
                <div className="info-icon">
                    <BiInfoCircle/> 
                </div>
            </button>
        </div>
    );
}
export default MoreInfo;