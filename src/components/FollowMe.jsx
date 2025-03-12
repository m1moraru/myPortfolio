import React from "react";
import icon1 from "../assets/linkedin.svg";
import icon2 from "../assets/github.svg";

const FollowMe = () => {
    return (
        <div className="follow-me-container">
            <span className="follow-text">Follow Me</span>
            <hr className="divider" />
            <div className="social-icons">
                <a href="#"><img src={icon1} alt="LinkedIn icon" /></a>
                <a href="#"><img src={icon2} alt="GitHub icon" /></a>
            </div>
        </div>
    );
};

export default FollowMe;
