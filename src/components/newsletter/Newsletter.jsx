import React, { useState } from 'react';
import './newsletter.css';

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="newsletter section-p">
      <div className="container">
        <div className="newsletter-content">
          <div className="section-title">
            <h3 className="text-brown">subscribe
              <span className="text-white">to newsletter</span>
            </h3>
          </div>

          <form className="newsletter-form mx-auto"
            onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" value={formData.name}
                className="form-control"
                placeholder="Enter your name"
                onChange={handleChange}
                id="name" />
            </div>
            <div className="form-group">
              <input type="email" value={formData.email}
                className="form-control"
                placeholder="Enter your email"
                onChange={handleChange}
                id="email" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter