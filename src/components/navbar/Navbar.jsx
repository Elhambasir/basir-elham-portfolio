import React from "react";
import logo from "../../assets/images/logo_elham.png"
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#header">
          <img src={logo} alt="etech" width={30} id="logo" />
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              href="#header"
              aria-current="page"
              className="nav-link text-white active
              ls-1 text-uppercase fw-6 fs-16"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
          <a
            href="#services"
            className="nav-link text-white 
              ls-1 text-uppercase fw-6 fs-12"
          >
            Services
          </a>
          </li>
          <li className="nav-item">
          <a
            href="#work"
            className="nav-link text-white 
              ls-1 text-uppercase fw-6 fs-12"
          >
            Works
          </a>
          </li>
          <li className="nav-item">
          <a
            href="#about"
            className="nav-link text-white 
              ls-1 text-uppercase fw-6 fs-12"
          >
            About me
          </a>
          </li>
          <li className="nav-item">
          <a
          href="#contact"
          className="nav-link text-white 
            ls-1 text-uppercase fw-6 fs-12"
        >
          Contact
        </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
