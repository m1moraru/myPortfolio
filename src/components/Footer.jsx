import React from 'react'
import "../components/css/Footer.css"


function Footer() {
    return (
        <div className="footer" style={{ backgroundColor: "rgb(130, 184, 158)" }}>
            <p></p>
            <div>
                <p>&copy; {new Date().getFullYear()} Marius Moraru. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
