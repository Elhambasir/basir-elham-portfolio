import React, { useState } from "react";
import "./newsletter.css";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    fetch("https://formspree.io/f/xyyawpdk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        message: formData.message,
      }),
    }).then((response) => {
      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Something went wrong!");
      }
    });
  };

  return (
    <div className="newsletter section-p" id="contact">
      <div className="container">
        <div className="newsletter-content">
          <div className="section-title">
            <h3 className="text-brown">
              Contact
              <span className="text-white">Me</span>
            </h3>
          </div>
          <form
            action="https://formspree.io/f/xyyawpdk"
            method="POST"
            className="newsletter-form mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="email"
                value={formData.email}
                className="form-control"
                placeholder="Enter your email"
                onChange={handleChange}
                id="email"
                name="email"
              />
            </div>
            <div className="form-group">
              <textarea
                value={formData.message}
                className="form-control"
                placeholder="Enter your message"
                onChange={handleChange}
                id="message"
                name="message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-brown text-white submit-btn 
            fw-3 fs-22"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
