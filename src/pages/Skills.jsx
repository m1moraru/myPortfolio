import React, { useEffect } from "react";
import "./css/Skills.css";
import html from "../assets/html.svg";
import css from "../assets/css.png";
import js from "../assets/js.png";
import nodejs from "../assets/nodejs.svg";
import reactjs from "../assets/react.svg";
import python from "../assets/python.svg";
import expressjs from "../assets/expressjs.svg";
import php from "../assets/php.svg";
import jquery from "../assets/jquery.svg";
import bootstrap from "../assets/bootstrap.svg";
import postgresql from "../assets/postgresql.svg";
import github from "../assets/github.svg";

const skillsData = [
    {name: "HTML", percentage: "95%", img: html},
    {name: "CSS", percentage: "95%", img: css},
    {name: "JavaScript", percentage: "80%", img: js},
    {name: "Node.js", percentage: "80%", img: nodejs},
    {name: "React JS", percentage: "80%", img: reactjs},
    {name: "Python", percentage: "70%", img: python},
    {name: "Express.js", percentage: "75%", img: expressjs},
    {name: "PHP", percentage: "80%", img: php},
    {name: "jQuery", percentage: "70%", img: jquery},
    {name: "Boostrap", percentage: "70%", img: bootstrap},
    {name: "PostgreSQL", percentage: "80%", img: postgresql},
    {name: "GitHub", percentage: "80%", img: github}
]

const Skills = ({ className }) => {

    useEffect(() => {
        const skillLevels = document.querySelectorAll(".skill-level");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const skillLevel = entry.target;
                        const skillWidth = skillLevel.getAttribute("data-skill");
                        skillLevel.style.width = skillWidth;
                        observer.observe(skillLevel); 
                    }
                });
            },
            { threashold: 0.3 } 
        );

        skillLevels.forEach((skill) => observer.observe(skill));

        return () => observer.disconnect(); 
    }, []);

    return (
        <div className={`skills ${className}`}>

            <div className="title-container">
                <h1 className="h1skills">Skills</h1>
            </div>

            <div className="about">
                <p>
                    <span className="capital-i">I</span> specialize in developing scalable, high-performance applications using React, Node.js,
                    and PostgreSQL, with a strong focus on full-stack development. My expertise spans across front-end and back-end architecture,
                    ensuring seamless integration between user interfaces and server-side logic.
                </p>
                <p>
                    I have extensive experience in building e-commerce platforms, developing custom business solutions,
                    and implementing secure authentication systems using OAuth, Passport.js, and session-based authentication.
                </p>
            </div>

            <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <div className="skill" key={index}>

                        <div className="skill-img">
                            <img src={skill.img} alt={`${skill.name} icon`} className="skill-icon" /> 
                        </div>

                        <div className="skill-data-container">
                            <div className="skill-data">
                                <span>{skill.name}</span>
                                <span>{skill.percentage}</span>
                            </div>
                            <div className="skill-bar">
                                <div
                                className="skill-level"
                                data-skill={skill.percentage}
                                style={{ width: "0%" }}
                                ></div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <div className="about">
                <p>
                    I have extensive experience in building e-commerce platforms, developing custom business solutions,
                    and implementing secure authentication systems using OAuth, Passport.js, and session-based authentication.
                </p>
            </div>

        </div>

    );
};

export default Skills;