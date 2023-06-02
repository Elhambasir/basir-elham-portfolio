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
          <div className="btn-groups flex mt-5">
            <button type="button" className="btn-item bg-brown fw-4 ls-2"> See Works</button>
            <button type="button" className="btn-item bg-dark fw-4 ls-2">Contact Me</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default header