import React, { useState } from "react";
import { motion } from "framer-motion";
import "./css/SkillsBlock.css";

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
import figma from "../assets/figma.png";
import wordpress from "../assets/wordpress.png";
import postman from "../assets/postman.svg";
import vscode from "../assets/vscode.svg";
import swagger from "../assets/Swagger.svg";
import mocha from "../assets/Mocha.svg";
import jest from "../assets/Jest.svg";

const skillsData = {
  frontend: [
    { name: "HTML", level: 95, icon: html },
    { name: "CSS", level: 90, icon: css },
    { name: "JavaScript", level: 85, icon: js },
    { name: "React", level: 85, icon: reactjs },
    { name: "jQuery", level: 75, icon: jquery },
    { name: "Bootstrap", level: 70, icon: bootstrap },
  ],
  backend: [
    { name: "Node.js", level: 80, icon: nodejs },
    { name: "Express.js", level: 75, icon: expressjs },
    { name: "PostgreSQL", level: 80, icon: postgresql },
    { name: "PHP", level: 70, icon: php },
    { name: "Python", level: 68, icon: python },
  ],
  tools: [
    { name: "VSCode", level: 85, icon: vscode },
    { name: "GitHub", level: 85, icon: github },
    { name: "Postman", level: 70, icon: postman },
    { name: "Figma", level: 65, icon: figma },
    { name: "WordPress", level: 90, icon: wordpress },
    { name: "Swagger", level: 60, icon: swagger },
    { name: "Mocha", level: 60, icon: mocha },
    { name: "Jest", level: 60, icon: jest },
  ],
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  const tabsVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  const barContainerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <section className="skills-block">
      {/* Left Section */}
      <div className="skills-block-left">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          My <span className="skills-block-highlight">Toolbox</span>
        </motion.h1>

        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          I focus on building <strong>high-quality, performant web applications</strong> using a mix
          of modern technologies. With clean code and optimized UX, I deliver complete end-to-end
          solutions.
        </motion.p>

        <motion.div
          className="skills-block-tabs"
          variants={tabsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              className={`skills-block-tab-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="skills-block-right" key={activeCategory}>
        <div className="skills-block-bars">
          {skillsData[activeCategory].map((skill, idx) => (
            <motion.div
              className="skills-block-bar-container"
              key={idx}
              custom={idx}
              variants={barContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Icon */}
              <div className="skills-block-icon-wrapper">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skills-block-icon-inline"
                />
                {hoveredSkill === skill.name && (
                  <motion.span
                    className="skills-tooltip"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: -20 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.name}
                  </motion.span>
                )}
              </div>
              {/* Bar */}
              <div className="skills-block-bar-wrapper">
                <motion.div
                  className="skills-block-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;



