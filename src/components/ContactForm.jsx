import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./css/ContactForm.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // refs
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.2 });
  const isFormInView = useInView(formRef, { once: false, amount: 0.2 });

  // variants for sliding in
  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const formItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://mariusmoraru.com/portfolio.contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const result = await response.json();
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
    <section className="contact-section" id="contact-section">
      {/* Title Section */}
      <div ref={titleRef} className="title-container">
        <motion.h1
          className="contact-title"
          variants={slideLeft}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          Let's build something amazing together.
        </motion.h1>
        <motion.p
          variants={slideRight}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          Bringing ideas to life through high-quality web development. I offer end-to-end solutions,
          from frontend design to backend architecture, ensuring performance and a seamless user experience.
        </motion.p>
      </div>

      {/* Form Section */}
      <motion.form
        ref={formRef}
        className="form-container"
        id="contact-form"
        onSubmit={handleSubmit}
        initial="hidden"
        animate={isFormInView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h1 className="contact-heading" variants={formItem}>Get in touch</motion.h1>

        <div className="input-container">
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            variants={formItem}
            whileFocus={{ scale: 1.02, borderColor: "#f95f21" }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            variants={formItem}
            whileFocus={{ scale: 1.02, borderColor: "#f95f21" }}
          />
        </div>

        <motion.textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          variants={formItem}
          whileFocus={{ scale: 1.02, borderColor: "#f95f21" }}
        ></motion.textarea>

        <div className="button-container">
          <motion.button type="submit" variants={formItem} whileHover={{ scale: 1.05 }}>
            Send
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;


