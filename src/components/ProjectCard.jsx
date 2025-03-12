import React from "react";
import "./css/ProjectCard.css";

const ProjectCard = ({title, description, link}) => {

    return (
        <div className="projectCard-container"
        onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
        >
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project →</a>
        </div>
    );
};

export default ProjectCard;