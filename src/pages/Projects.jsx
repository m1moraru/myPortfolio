import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../pages/css/Projects.css"

const Projects = () => {

    const projects = [
        {
            title: "Project 1",
            description: "Description of Project 1",
            link: "https://github.com/m1moraru/mariusMoraru/tree/main/project1"
        },
        {
            title: "Project 2",
            description: "Description of Project 2",
            link: "https://github.com/m1moraru/mariusMoraru/tree/main/project2"
        },
    ]

    return (
        <div className="projects-container">

            <div>
                <h1 className="h1projects">Projects</h1>
            </div>
            <br />

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
           
        </div>
    );
};

export default Projects;