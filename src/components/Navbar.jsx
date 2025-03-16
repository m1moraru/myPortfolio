import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/Navbar.css";
import close_icon from "../assets/window-close.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getNavbarStyle = () => {
        return {
            backgroundColor: location.pathname === "/skills" ? "" :
                             location.pathname === "/" ? "rgb(142, 202, 173)" :
                             location.pathname === "/experience" ? "transparent" :
                             location.pathname === "/projects" ? "#ffde81" :
                             location.pathname === "/contact" ? "#badeda" :
                             "rgb(50, 50, 50)",

            color: location.pathname === "/skills" || isScrolled ? "white" : "black",
            logoColor: location.pathname === "/skills" || isScrolled ? "white" : "#333"
        };
    };

    return (
        <>
            <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} style={getNavbarStyle()}>
                <div className="logo" style={{ color: getNavbarStyle().logoColor }}>
                    <span className="blue">MA</span><span className="yellow">RI</span><span className="red">US</span>
                </div>

                <ul className={`nav-links ${isOpen ? "active" : ""} ${isScrolled ? "scrolled" : ""}`}>
                    <li><Link to="/" style={{ color: isScrolled ? "white" : getNavbarStyle().color }} onClick={() => setIsOpen(false)}>Profile</Link></li>
                    <li><Link to="/skills" style={{ color: location.pathname === "/skills" || isScrolled ? "white" : "black" }} onClick={() => setIsOpen(false)}>Skills</Link></li>
                    <li><Link to="/experience" style={{ color: isScrolled ? "white" : getNavbarStyle().color }} onClick={() => setIsOpen(false)}>Experience</Link></li>
                    <li><Link to="/projects" style={{ color: isScrolled ? "white" : getNavbarStyle().color }} onClick={() => setIsOpen(false)}>Projects</Link></li>
                    <li><Link to="/contact" style={{ color: isScrolled ? "white" : getNavbarStyle().color }} onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            </nav>

            {/* Menu Icon - White only on /skills */}
            {!isOpen && (
    <div 
        className="menu-icon" 
        onClick={toggleMenu}
        style={{ 
            color: isScrolled || location.pathname === "/projects" || location.pathname === "/contact" 
                ? "black" 
                : location.pathname === "/skills" 
                ? "white" 
                : "black",
            backgroundColor: isScrolled 
                ? "rgb(142, 202, 173)"  
                : location.pathname === "/profile" 
                ? "rgb(142, 202, 173)" 
                : location.pathname === "/skills" 
                ? "rgba(0, 0, 0, 0.8)" 
                : location.pathname === "/projects" 
                ? "rgb(255, 222, 129)" 
                : location.pathname === "/contact" 
                ? "#badeda" 
                : "transparent",
            padding: "12px 3px",
            borderRadius: "10px",
            transition: "background 0.3s ease-in-out, color 0.3s ease-in-out"
        }}
    >
        ☰
    </div>
)}


            {/* Sidebar Background & Links for Experience Page */}
            <div 
                className={`sidebar ${isOpen ? "active" : ""}`} 
                style={{ 
                    backgroundColor: getNavbarStyle().backgroundColor,
                    color: location.pathname === "/experience" ? "white" : getNavbarStyle().color 
                }}
            >
                <button className="close-btn" onClick={toggleMenu}>
                    <img src={close_icon} alt="Close" />
                </button>
                <ul>
                    <li><Link 
                        to="/" 
                        style={{ color: location.pathname === "/experience" ? "white" : (isScrolled ? "white" : getNavbarStyle().color) }} 
                        onClick={toggleMenu}
                    >Profile</Link></li>
                    
                    <li><Link 
                        to="/skills" 
                        style={{ color: location.pathname === "/experience" ? "white" : (location.pathname === "/skills" || isScrolled ? "white" : "black") }} 
                        onClick={toggleMenu}
                    >Skills</Link></li>
                    
                    <li><Link 
                        to="/experience" 
                        style={{ color: location.pathname === "/experience" ? "white" : (location.pathname === "/skills" || isScrolled ? "white" : "black") }} 
                        onClick={toggleMenu}
                    >Experience</Link></li>
                    
                    <li><Link 
                        to="/projects" 
                        style={{ color: location.pathname === "/experience" ? "white" : (isScrolled ? "white" : getNavbarStyle().color) }} 
                        onClick={toggleMenu}
                    >Projects</Link></li>
                    
                    <li><Link 
                        to="/contact" 
                        style={{ color: location.pathname === "/experience" ? "white" : (isScrolled ? "white" : getNavbarStyle().color) }} 
                        onClick={toggleMenu}
                    >Contact</Link></li>
                </ul>
            </div>

            {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </>
    );
};

export default Navbar;







