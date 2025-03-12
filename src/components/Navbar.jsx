import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import icon1 from "../assets/linkedin.svg";
import icon2 from "../assets/github.svg";
import close_icon from "../assets/window-close.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
                <div className="logo"><span className="blue">MA</span><span className="yellow">RI</span><span className="red">US</span></div>

                <ul className={`nav-links ${isOpen ? "active" : ""} ${isScrolled ? "scrolled" : ""}`}>
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Profile</Link></li>
                    <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
                    <li><Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link></li>
                    <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
                    <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            </nav>

            {!isOpen && (
                <div className="menu-icon" onClick={toggleMenu}>
                    ☰
                </div>
            )}

           <div className={`sidebar ${isOpen ? "active" : ""}`}>
                <button className="close-btn" onClick={toggleMenu}><img src={close_icon}></img></button>
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>Profile</Link></li>
                    <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
                    <li><Link to="/experience" onClick={toggleMenu}>Experience</Link></li>
                    <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                </ul>
            </div>

            {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </>
    );
};

export default Navbar;

