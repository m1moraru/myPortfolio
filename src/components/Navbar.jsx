import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./css/Navbar.css";
import Footer from "../components/Footer";
import close_icon from "../assets/window-close.svg";
import icon1 from "../assets/linkedin.svg";
import icon2 from "../assets/github.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

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
            backgroundColor: location.pathname === "/skills" ? "#eeeeee"  :
                             location.pathname === "/" ? "rgb(224, 221, 221)" :
                             location.pathname === "/experience" ? "#fbfbfb" :
                             location.pathname === "/projects" ? "#eeeeee" :
                             location.pathname === "/contact-form" ? "#f8f9fc" :
                             "rgb(50, 50, 50)",

            color: "black",
            logoColor: location.pathname === "/skills" || isScrolled ? "black" : "#333"
        };
    };

    const handleScrollToSection = (sectionId) => {
        setIsOpen(false);

        if (location.pathname === "/") {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            navigate("/");
            setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            }, 400);
        }
    };


    return (
        <>
            <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} style={getNavbarStyle()}>
                <div className="logo" style={{ color: getNavbarStyle().logoColor }}>
                    <span className="blue">MA</span><span className="yellow">Ri</span><span className="red">us</span>
                </div>

                <ul className={`nav-links ${isOpen ? "active" : ""} ${isScrolled ? "scrolled" : ""}`}>
                    <li>
                        <button
                            className="nav-btn-link"
                            style={{ 
                                color: isScrolled ? "white" : "black",
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: 16,
                            }}
                            onClick={() => handleScrollToSection("profile-section")}
                        >
                            Home
                        </button>
                    </li>

                   <li>
                        <button
                            className="nav-btn-link"
                            style={{ 
                                color: isScrolled ? "white" : "black",
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: 16,
                            }}
                            onClick={() => handleScrollToSection("about-section")}
                        >
                            About
                        </button>
                    </li>

                    <li>
                        <button
                            className="nav-btn-link"
                            style={{ 
                                color: location.pathname === "/skills" || isScrolled ? "white" : "black",
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: 16,
                            }}
                            onClick={() => handleScrollToSection("skills-section")}
                        >
                            Skills
                        </button>
                    </li>

                    <li>
                        <button
                            className="nav-btn-link"
                            style={{ 
                                color: location.pathname === "/experience" || isScrolled ? "white" : "black",
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: 16,
                            }}
                            onClick={() => handleScrollToSection("experience-section")}
                        >
                            Experience
                        </button>
                    </li>

                    <li>
                        <button
                            className="nav-btn-link"
                            style={{ 
                                color: location.pathname === "/experience" || isScrolled ? "white" : "black",
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: 16,
                            }}
                            onClick={() => handleScrollToSection("projects-section")}
                        >
                            Projects
                        </button>
                    </li>

                    <li>
                        <button
                            className="nav-btn-link"
                            style={{ 
                                color: location.pathname === "/experience" || isScrolled ? "white" : "black",
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: 16,
                            }}
                            onClick={() => handleScrollToSection("contact-section")}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Menu Icon */}
            {!isOpen && (
                <div 
                    className="menu-icon" 
                    onClick={toggleMenu}
                    style={{ 
                        color: isScrolled ? "black" : "black",
                        backgroundColor: isScrolled 
                        ? "rgb(142, 202, 173)" 
                        : "transparent",
                        padding: "12px 3px",
                        borderRadius: "10px",
                        transition: "background 0.3s ease-in-out, color 0.3s ease-in-out"
                    }}
                    >
                    ☰
                </div>

            )}

            {/* Sidebar */}
            <div 
                className={`sidebar ${isOpen ? "active" : ""}`} 
                style={{ 
                    backgroundColor: getNavbarStyle().backgroundColor,
                }}
            >
                <button className="close-btn" onClick={toggleMenu}>
                    <img src={close_icon} alt="Close" />
                </button>
                <ul>
                    <li>
                        <Link 
                            to="/" 
                            style={{ color: location.pathname === "/profile" ? "#000" : (isScrolled ? "#ff6347" : getNavbarStyle().color) }} 
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                    </li>
                    
                    <li>
                        <Link 
                            to="skills" 
                            style={{ color: location.pathname === "/skills" ? "#000" : (isScrolled ? "#ff6347" : getNavbarStyle().color) }} 
                            onClick={toggleMenu}
                        >
                            Skills
                        </Link>
                    </li>
                    
                    <li>
                        <Link 
                            to="/experience" 
                            style={{ color: location.pathname === "/experience" ? "#000" : (location.pathname === "/skills" || isScrolled ? "#ff6347" : "black") }} 
                            onClick={toggleMenu}
                        >
                            Experience
                        </Link>
                    </li>
                    
                    <li>
                        <Link 
                            to="/projects" 
                            style={{ color: location.pathname === "/projects" ? "#000" : (isScrolled ? "#ff6347" : getNavbarStyle().color) }} 
                            onClick={toggleMenu}
                        >
                            Projects
                        </Link>
                    </li>
                    
                    <li>
                        <Link 
                            to="/contact-form" 
                            style={{ color: location.pathname === "/contact-form" ? "#000" : (isScrolled ? "#ff6347" : getNavbarStyle().color) }} 
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                    </li>

                </ul>

                <div className="follow-me-container">
                    <span className="follow-text">Follow Me</span>
                    <hr className="divider" />
                    <div className="social-icons">
                    <a href="https://www.linkedin.com/in/marius-iulian-moraru-3b7641312/"><img src={icon1} alt="LinkedIn icon" /></a>
                    <a href="https://github.com/m1moraru"><img src={icon2} alt="GitHub icon" /></a>
                    </div>
                </div>
                
            </div>

            {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </>
    );
};

export default Navbar;






