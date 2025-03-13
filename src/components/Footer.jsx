import React from 'react'
import { useLocation } from "react-router-dom";
import "../components/css/Footer.css"

function Footer() {

    const location = useLocation();

    const getFooterStyle = () => {
        switch (location.pathname) {
            case "/":
                return { backgroundColor: "rgb(130, 184, 158)" }; // Profile Page
            case "/skills":
                return { backgroundColor: "rgb(229, 151, 91) " }; // Skills Page
            case "/experience":
                return { backgroundColor: "rgb(137, 129, 73)" }; // Experience Page
            case "/projects":
                return { backgroundColor: "rgb(211, 182, 104)" }; // Projects Page
            case "/contact":
                return { backgroundColor: "rgb(152, 181, 177)" }; // Contact Page
            default:
                return { backgroundColor: "rgb(50, 50, 50)" }; // Default Color
        }
    };

  return (
    <div className="footer" style={getFooterStyle()}>Footer</div>
  )
}

export default Footer