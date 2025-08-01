import React from "react";
import { motion, useInView } from "framer-motion";
import "../components/css/Projects.css";

const projects = [
  {
    title: "Gazetteer",
    description:
      "A mobile-first app delivering geographic, demographic, climatic, and economic data for countries worldwide.",
    link: "https://mariusmoraru.com/gazetteer/",
    tags: ["Frontend", "APIs"],
    image: require("../assets/gazetteer1.png"),
    imageClass: "gazetteer-img",
  },
  {
    title: "Taskify",
    description:
      "A PERN-based app for desktop and mobile that helps users manage tasks, set priorities, track status, and archive completed items. (Not publicly accessible).",
    link: "#",
    tags: ["Full Stack", "Node.js"],
    image: require("../assets/taskify.png"),
    imageClass: "taskify-img",
  },
  {
    title: "Buna",
    description:
      "An end-to-end mobile dating application built with a focus on user experience and performance. Buna includes all the core functionalities of modern dating apps: swipe-based matching, profile creation, real-time chat, photo uploads, advanced filters, and secure authentication. Designed and developed full-stack, ensuring integration between the frontend, backend, and database.  (Currently in development and not publicly accessible)",
    link: "#",
    tags: ["Frontend", "React"],
    image: require("../assets/buna.png"),
    imageClass: "buna-img",
  },
];

const fadeIn = (direction = "left") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -80 : 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

const Projects = () => {
  return (
    <section className="projects-section seamless" id="projects-section">
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectRow project={project} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectRow = ({ project, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 }); 

  return (
    <div
      ref={ref}
      className={`project-row ${index % 2 === 0 ? "row-left" : "row-right"}`}
    >
      {/* Image Section */}
      <motion.div
        className="project-image-placeholder"
        variants={fadeIn(index % 2 === 0 ? "left" : "right")}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="image-placeholder">
          <img 
            src={project.image} 
            alt={projects.title} 
            className={project.imageClass} 
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="project-content"
        variants={fadeIn(index % 2 === 0 ? "right" : "left")}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project →
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;


