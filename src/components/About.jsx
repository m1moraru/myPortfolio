import React from "react";
import "../components/css/About.css"; 
import me_img from "../assets/profile-img.webp"

const About = () => {
    return (
        <div className="about">
            <div className="about-img">
                <img src={me_img} alt="#" />
            </div>

            <div className="about-content">
                <p className="top-title">Who am I?</p>
                <h2>I'm Marius Moraru, a Web Developer <br />and UX Designer</h2>
                <p className="acp">
                    I specialize in developing scalable, high-performance applications using React,
                    Node.js, and PostgreSQL, with a strong focus on full-stack development. My expertise spans across front-end and back-end architecture,
                    ensuring seamless integration between user interfaces and server-side logic.
                    <br />
                    <br />
                    I have extensive experience in building e-commerce platforms, developing custom business solutions,
                    and implementing secure authentication systems using OAuth, Passport.js, and session-based authentication.
                    <br />
                    <br />
                    I am proficient in RESTful API design, database optimization, and performance optimization,
                    ensuring applications are efficient, maintainable, and scalable. 
                </p>
                <div className="devider"></div>
            </div>
        </div>
    );
};

export default About;
