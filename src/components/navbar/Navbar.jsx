import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);
  const closeNavbar = () => setNavToggle(false);

  return (
    <div className="custom-navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="brand-and-toggler flex-between">
            <a
              href="#about"
              className="navbar-brand text-u
              ppercase fw-7 text-white ls-2 fs-22"
            >
              BASIR ELHAM
            </a>
            <button
              type="button"
              className="navbar-open-btn text-white"
              onClick={() => setNavToggle(!navToggle)}
            >
              <FaBars size={30} />
            </button>
            <div
              className={
                navToggle
                  ? "custom-navbar-collapse show-navbar-collapse"
                  : "custom-navbar-collapse"
              }
            >
              <button
                type="button"
                className="navbar-close-btn text-white"
                onClick={closeNavbar}
              >
                <FaTimes size={30} />
              </button>
              <ul className="custom-navbar-nav">
                <li className="custom-nav-item">
                  <a
                    href="#header"
                    className="custom-nav-link text-white 
                    ls-1 text-uppercase fw-6 fs-20"
                  >
                    Home
                  </a>
                </li>
                <li className="custom-nav-item">
                  <a
                    href="#services"
                    className="custom-nav-link text-white 
                     ls-1 text-uppercase fw-6 fs-20"
                  >
                    Services
                  </a>
                </li>
                <li className="custom-nav-item">
                  <a
                    href="#work"
                    className="custom-nav-link text-white 
                     ls-1 text-uppercase fw-6 fs-20"
                  >
                    Works
                  </a>
                </li>
                <li className="custom-nav-item">
                  <a
                    href="#about"
                    className="custom-nav-link text-white 
                     ls-1 text-uppercase fw-6 fs-20"
                  >
                    About me
                  </a>
                </li>
                <li className="custom-nav-item">
                  <a
                    href="#contact"
                    className="custom-nav-link text-white 
                     ls-1 text-uppercase fw-6 fs-20"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
