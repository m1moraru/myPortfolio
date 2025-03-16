import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Profile.css";
import About from "../components/About";
import icon1 from "../assets/linkedin.svg";
import icon2 from "../assets/github.svg";

const texts = ["I am Developer", "I am UX Designer"];

const Profile = () => {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const typingSpeed = 100;
    const caretRef = useRef(null);

    useEffect(() => {
        const currentText = texts[currentIndex].slice(4); 
        setDisplayText(`I am ${currentText.slice(0, textIndex)}`);

        if (isDeleting) {
            if (textIndex > 0) {
                setTimeout(() => setTextIndex((prev) => prev - 1), typingSpeed);
            } else {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % texts.length);
            }
        } else {
            if (textIndex < currentText.length) {
                setTimeout(() => setTextIndex((prev) => prev + 1), typingSpeed);
            } else {
                setTimeout(() => setIsDeleting(true), 1000);
            }
        }

        if (caretRef.current) {
            caretRef.current.style.visibility = "visible";
            caretRef.current.style.animation = "blink-caret 0.75s step-end infinite";
        }
    }, [textIndex, isDeleting, currentIndex]);

    return (
        <div className="prf-container">

            <div className="follow-me-container">
                <span className="follow-text">Follow Me</span>
                <hr className="divider" />
                <div className="social-icons">
                    <a href="#"><img src={icon1} alt="LinkedIn icon" /></a>
                    <a href="#"><img src={icon2} alt="GitHub icon" /></a>
                </div>
            </div>

            <div className="landing">
                <div className="landing-left">
                    <h2>
                        <span className="ht">Hi There!</span>
                        <br />
                        <span className="typing-text">{displayText}</span><span ref={caretRef} className="caret"> |</span> 
                        <br />
                        <span className="ht">I make the complex simple</span>
                    </h2>
                    <button>
                        <Link to="/contact" className="custom-link" >Get In Touch</Link>
                    </button>
                </div>
            </div>

            <div className="about-container">
                <div className="about-component">
                    <About />
                </div>
                <div className="about-left">
                </div>
            </div>
        </div>
    );
};

export default Profile;
