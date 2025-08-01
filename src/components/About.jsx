import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../components/css/About.css"; 
import me_img from "../assets/profile-img.webp";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Variants for staggered animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 } // delay between children
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  return (
    <div className="about" ref={ref} id="about-section">
      {/* Image */}
      <motion.div
        className="about-img"
        animate={{
          opacity: isInView ? 1 : 0,
          scale: isInView ? 1 : 0.8,
          x: isInView ? 0 : -50
        }}
        transition={{ duration: 0.8 }}
      >
        <img src={me_img} alt="profile" />
      </motion.div>

      {/* Content with staggered children */}
      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.p className="top-title" variants={itemVariants}>
          About Me
        </motion.p>
        <motion.h2 variants={itemVariants}>
          Full-Stack Developer and <br /> UX Designer
        </motion.h2>
        <motion.p className="acp" variants={itemVariants}>
          I'm Marius Moraru, a Full-Stack Developer with specialized expertise in 
          building robust PERN (PostgreSQL, Express, React, Node.js) applications.
          <br /><br />
          I excel at architecting scalable, high-performance solutions with seamless integration between front-end and back-end systems. 
          My skill set spans UI/UX design, API development, and database architecture, ensuring end-to-end quality in every project.
          <br /><br />
          I have a background in developing e-commerce platforms, custom business applications, 
          and implementing secure authentication systems using OAuth, Passport.js, and session-based authentication.
        </motion.p>
        <motion.div className="devider" variants={itemVariants}></motion.div>
      </motion.div>
    </div>
  );
};

export default About;



