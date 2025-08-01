import React from "react";
import { motion } from "framer-motion";
import "./css/Experience.css";

const workExperience = [
  {
    role: "Full Stack Developer Trainee",
    company: "IT Career Switch",
    duration: "Jan 2024 – May 2025",
    description:
      "Completed a comprehensive full-stack developer program focused on real-world projects. Developed scalable applications using React, Node.js, Express, and PostgreSQL, gaining experience in REST APIs, authentication, and deployments.",
  },
  {
    role: "WordPress Web Developer (Freelance)",
    company: "Self-Employed",
    duration: "Feb 2022 – Present",
    description:
      "Built custom websites and web applications for various clients using WordPress, Elementor, WPBakery, SeedProd, Bricks Builder, and Gutenberg (Block Editor). Delivered responsive designs, optimized user experience, integrated payment systems, and managed the entire project lifecycle.",
  },
  {
    role: "Frontend Web Developer (Personal Projects)",
    company: "Independent Practice",
    duration: "Feb 2021 – Present",
    description:
      "Designed and implemented multiple frontend projects to strengthen skills in React, JavaScript, and UI/UX principles. Focused on building reusable components, responsive layouts, and integrating APIs to create dynamic applications.",
  },
];

const studies = [
  {
    degree: "Full Stack Engineer",
    institution: "IT Career Switch",
    duration: "2024-2025",
    description:
      "Gained expertise in building full-stack PERN (PostgreSQL, Express, React, Node.js) applications, covering both frontend and backend development while working on real-world projects.",
  },
  {
    degree: "BSc (Hons) Business and Tourism Management",
    institution: "Anglia Ruskin University",
    duration: "2021 - 2024",
    description:
      "Studied business strategy, tourism industry management, and international marketing.",
  },
  {
    degree: "Professional Diploma in UX Design",
    institution: "UX Design Institute",
    duration: "2019-2020",
    description:
      "Gained expertise in user research, interaction design, usability testing, and creating intuitive, user-centered digital experiences.",
  },
];

const slideVariant = (direction = "left", delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay },
  },
  exit: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
    transition: { duration: 0.6 },
  },
});

const Experience = () => {
  return (
    <section className="timeline-container" id="experience-section">
      
      <div className="timeline-columns">
        {/* Experience Timeline */}
        <div className="timeline-column">
          <h2 className="timeline-heading">Experience</h2>
          <motion.div
            className="timeline-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          ></motion.div>

          {workExperience.map((exp, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              variants={slideVariant("left", index * 0.2)}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="timeline-dot"></div>
              <motion.div className="timeline-content">
                <h3>{exp.role}</h3>
                <span className="company">{exp.company}</span>
                <span className="duration">{exp.duration}</span>
                <p>{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Studies Timeline */}
        <div className="timeline-column tc2">
          <h2 className="timeline-heading">Studies</h2>
          <motion.div
            className="timeline-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          ></motion.div>

          {studies.map((study, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              variants={slideVariant("right", index * 0.2)}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="timeline-dot"></div>
              <motion.div className="timeline-content">
                <h3>{study.degree}</h3>
                <span className="company">{study.institution}</span>
                <span className="duration">{study.duration}</span>
                <p>{study.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;




