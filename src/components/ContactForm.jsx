import React, { useState } from "react";
import "./css/ContactForm.css";

const Contact = () => {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://my-server/contact.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if(response.ok) {
            alert("Message sent successfully");
        } else {
            alert("Failed to send message");
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h1>Get in touch</h1>
            <div className="input-container">
                <input type="text" name="name" id="name" placeholder="Your Name" onChange={handleChange} />
                <input type="text" name="email" id="email" placeholder="Your Email" onChange={handleChange} />
            </div>
            <textarea name="message" id="message" placeholder="Your Message" onChange={handleChange} ></textarea>
            <div className="button-container">
                <button type="submit">Send</button>
            </div>
        </form>
    );
};

export default Contact; 