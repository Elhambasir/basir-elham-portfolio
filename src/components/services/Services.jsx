import React from 'react';
import { services } from '../../constants/data';
import './services.css';

export const Services = () => {
  return (
    <div className="services section-p">
      <div className="container">
        <div className="services-content">
          <div className="section-title">
            <h3 className="text-brown">My
              <span className="text-dark">Services
              </span></h3>
            <p className="text">
              I offer the right services for your digital business
            </p>
          </div>

          <div className="services-list grid">
            {
              services.map((service, index) => {
                const { image, title, description } = service;
                return (
                  <div key={index} className="services-item text-center flex-column">
                    <div className="services-item-img">
                      <img src={image} alt="img" className="mx-auto" />
                    </div>
                    <div className="services-item-title">
                      <h4 className="text-brown">{title}</h4>
                    </div>
                    <div className="services-item-text">
                      <p className="text">{description}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
