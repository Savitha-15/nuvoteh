import React, { useState } from "react";
import { motion } from "framer-motion";
import { db } from "../firebaseConfig"; // make sure path is correct
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    // Convert FormData to plain object for Firebase
    const data = Object.fromEntries(formData.entries());
    data.timestamp = serverTimestamp();

    try {
      // 1️⃣ Save to Firebase first
      await addDoc(collection(db, "messages"), data);

      // 2️⃣ Send to both Formspree accounts in parallel
      await Promise.all([
        fetch("https://formspree.io/f/xqawaynz", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }),
        fetch("https://formspree.io/f/xovyvkbd", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }),
      ]);

      setStatus("✅ Message sent successfully!");
      e.target.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("❌ Failed to send message. Check console.");
    }
  };

  return (
    <motion.div
      className="contact-form"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3>Get in Touch</h3>

      <form onSubmit={handleSubmit} className="contact-form-layout">
        <label>
          Name:
          <input type="text" name="name" placeholder="Enter your name" required />
        </label>

        <label>
          Email ID:
          <input type="email" name="email" placeholder="Enter your email ID" required />
        </label>

        <label>
          Mobile Number:
          <input type="tel" name="phone" placeholder="Enter your mobile number" required />
        </label>

        <label>
          Service:
          <select name="service" required>
            <option value="">Select the service</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Logo Design">Logo Design</option>
            <option value="SEO">SEO</option>
            <option value="Poster Design">Poster Design</option>
            <option value="Trading Mentorship">Trading Mentorship</option>
            <option value="Business Promotion">Business Promotion</option>
            <option value="Documentation">Documentation</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Video Editing">Video Editing</option>
          </select>
        </label>

        <label>
          Message:
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="4"
            required
          ></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>

      {status && <p className="form-status">{status}</p>}
    </motion.div>
  );
}
