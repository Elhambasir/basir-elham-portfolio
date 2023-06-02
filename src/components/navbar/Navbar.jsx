import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);
  const closeNavbar = () => setNavToggle(false);

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="brand-and-toggler flex-between">
            <Link to="/" className="navbar-brand text-u
              ppercase fw-7 text-white ls-2 fs-22">Elham</Link>
            <button type="button"
              className="navbar-open-btn text-white"
              onClick={() => setNavToggle(!navToggle)}
            >
              <FaBars size={30} />
            </button>
            <div className={navToggle ? "navbar-collapse show-navbar-collapse" : 
            "navbar-collapse"}>
              <button type="button"
                className="navbar-close-btn text-white"
                onClick={closeNavbar}
              >
                <FaTimes size={30} />
              </button>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white 
                    ls-1 text-uppercase fw-6 fs-20">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white 
                     ls-1 text-uppercase fw-6 fs-20">Services</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white 
                     ls-1 text-uppercase fw-6 fs-20">Works</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white 
                     ls-1 text-uppercase fw-6 fs-20">About me</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white 
                     ls-1 text-uppercase fw-6 fs-20">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar