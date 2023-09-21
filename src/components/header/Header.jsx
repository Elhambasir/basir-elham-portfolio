import React from 'react'
import Navbar from '../navbar/Navbar';
import './header.css';

function header() {
  return (
    <div className="header flex flex-column" id="header">
      <Navbar />
      <div className="container flex w-100">
        <div className="header-content">
          <h2 className="text-uppercase text-white op-07">WEB
            design, branding, graphic
          </h2>
          <h1 className="text-white fw-6 header-title">
            Hello, I'm
            <span className="text-brown"> Front-End Developer </span>
            Living in <br /> Kabul, Afghanistan
          </h1>
          <p className="text-light">Full-stack developer with a passion for pair programming and real-world projects <br/> Enrolled at Microverse Skilled in React Redux, JavaScript, Ruby and Rails</p>
        </div>
      </div>
    </div >
  )
}

export default header