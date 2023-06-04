import React from 'react';
import { worksProcess } from '../../constants/data';
import './workProcess.css';

export const WorkProcess = () => {
  return (
    <div className="workprocess section-p bg-white" id="workprocess">
      <div className="container">
        <div className="workprocess-content">
          <div className="section-title">
            <h3 className="text-brown">working <span className="text-dark">
              process</span></h3>
            <p className="text">
              I offer the right solutions for your digital business
            </p>
          </div>

          <div className="workprocess-list grid">
            {
              worksProcess.map((work, index) => {
                const { title, description } = work;
                return (
                  <div key={index} className="workprocess-item text-center flex-column">
                    <div className="workprocess-item-title flex">
                      <span className="text-brown fw-7"> 0 {index + 1} </span>
                      <h4 className="text-dark f25"> {title} </h4>
                    </div>
                      <p className="text">{description}</p>
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
