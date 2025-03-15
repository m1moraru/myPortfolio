import React from "react";
import "./css/ProjectCard.css";
import project_img from "../assets/project.png";

const ProjectCard = ({title, description, link}) => {

    return (
        <div className="projectCard-container"
        onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
        >
            <div className="project-title">
                <img src={project_img} className="project-icon" />
                <h2>{title}</h2>
            </div>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project →</a>
        </div>
    );
};

export default ProjectCard;