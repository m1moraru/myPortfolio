import React from 'react'
import { useLocation } from "react-router-dom";
import "../components/css/Footer.css"

function Footer() {
    const location = useLocation();

    const getFooterStyle = () => {
        const isMobile = window.innerWidth <= 768; 

        if (location.pathname === "/skills" && isMobile) {
            return { backgroundColor: "rgb(154, 58, 20)" };
        }

        switch (location.pathname) {
            case "/":
                return { backgroundColor: "rgb(130, 184, 158)" };
            case "/skills":
                return { backgroundColor: "rgba(0, 0, 0, 0.7)" }; 
            case "/experience":
                return { backgroundColor: "rgba(0, 0, 0, 0.7)" }; 
            case "/projects":
                return { backgroundColor: "rgb(211, 182, 104)" }; 
            case "/contact":
                return { backgroundColor: "rgb(152, 181, 177)" }; 
            default:
                return { backgroundColor: "rgb(50, 50, 50)" }; 
        }
    };

    return (
        <div className="footer" style={getFooterStyle()}>
            <p></p>
            <div>
                <p>&copy; {new Date().getFullYear()} Marius Moraru. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
