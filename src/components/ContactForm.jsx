import React, { useState } from "react";
import "./css/ContactForm.css";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("https://mariusmoraru.com/contact.php", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const result = await response.json();
            console.log("Server Response:", result);
    
            if (result.success) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            alert("Failed to send message. Check console for details.");
            console.error("Fetch Error:", error);
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h1>Get in touch</h1>
            <div className="input-container">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            <div className="button-container">
                <button type="submit">Send</button>
            </div>
        </form>
    );
};

export default Contact;
