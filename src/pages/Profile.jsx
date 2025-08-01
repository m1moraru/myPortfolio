import React, { useState, useEffect } from "react";
import "./css/Profile.css";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import icon1 from "../assets/linkedin.svg";
import icon2 from "../assets/github.svg";
import upArrow from "../assets/up-arrow.png"; // <- add an up-arrow icon to your assets

const Profile = () => {
  const [showArrow, setShowArrow] = useState(false);

  // Show arrow when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="prf-container" id="profile-section">
      <div className="follow-me-container">
        <span className="follow-text">Follow Me</span>
        <hr className="divider" />
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/marius-iulian-moraru-3b7641312/"><img src={icon1} alt="LinkedIn icon" /></a>
          <a href="https://github.com/m1moraru"><img src={icon2} alt="GitHub icon" /></a>
        </div>
      </div>

      <div className="landing">
        <div className="landing-left">
          <h2>
            <span className="typing-text">DESIGN <span className="ht3">vision,</span></span><br />
            <span className="typing-text1">DEVELOP <span className="ht3">ideas,</span></span><br />
            <span className="typing-text2">DEPLOY <span className="ht3">excellence,</span></span>
          </h2>
          <span className="ht2">
            <span className="ht4">Full Stack Web Developer | Specializing in the PERN stack</span>
          </span>
          <button>
            <a href="#contact-section" className="custom-link">Get In Touch</a>
          </button>
        </div>
      </div>

      <div className="about-container">
        <div className="about-component" id="about-section">
          <About />
        </div>
        <div className="fixed-skills" id="skills-section">
          <Skills />
        </div>
        <div className="experience" id="experience-section">
          <Experience />
        </div>
        <div id="projects-section">
          <Projects />
        </div>
        <div className="contact" id="contact-section">
          <ContactForm />
        </div>
        <div></div>
      </div>
      <Footer />

      {/* Floating Arrow */}
      {showArrow && (
        <button className="back-to-top" onClick={scrollToTop}>
          <img src={upArrow} alt="Back to top" />
        </button>
      )}
    </div>
  );
};

export default Profile;



