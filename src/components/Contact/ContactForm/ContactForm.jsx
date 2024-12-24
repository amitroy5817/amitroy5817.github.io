import React, { useState } from "react";
import { motion } from "framer-motion";
import { db } from "../../../firebase"; // Import Firestore
import { collection, addDoc } from "firebase/firestore";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false); // Loading state
  const [success, setSuccess] = useState(false); // Success state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // Save to Firestore
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: new Date()
      });
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.form
      className="contact-form"
      onSubmit={handleSubmit}
      variants={formVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.6,
        staggerChildren: 0.1
      }}
    >
      <motion.div className="form-group" variants={inputVariants}>
        <label htmlFor="name">Name</label>
        <motion.input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
          whileFocus={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>

      <motion.div className="form-group" variants={inputVariants}>
        <label htmlFor="email">Email</label>
        <motion.input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
          whileFocus={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>

      <motion.div className="form-group" variants={inputVariants}>
        <label htmlFor="message">Message</label>
        <motion.textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          required
          whileFocus={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>

      <motion.button
        type="submit"
        className="submit-button"
        disabled={!isFormValid || loading}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        {loading ? "Sending..." : "Send Message"}
      </motion.button>

      {success && <p className="success-message">Message sent successfully. I will reach you as soon as possible!</p>}
    </motion.form>
  );
};

export default ContactForm;
