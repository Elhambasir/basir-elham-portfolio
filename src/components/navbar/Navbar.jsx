import React from "react";
import etech from "../../assets/images/etech1.png";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#about">
          <img src={etech} alt="etech" width={50} id="logo" />
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
    // <div classNameName="custom-navbar fixed-top">
    //   <div classNameName="container">
    //     <div classNameName="navbar-content">
    //       <div classNameName="brand-and-toggler flex-between">
    //         <a
    //           href="#about"
    //           classNameName="navbar-brand text-u
    //           ppercase fw-7 text-white ls-2 fs-22"
    //         >
    //           <img src={etech} alt="etech" width={50} id="logo" />
    //         </a>
    //         <button
    //           type="button"
    //           classNameName="navbar-open-btn text-white"
    //           onClick={() => setNavToggle(!navToggle)}
    //         >
    //           <FaBars size={30} />
    //         </button>
    //         <div
    //           classNameName={
    //             navToggle
    //               ? "custom-navbar-collapse show-navbar-collapse"
    //               : "custom-navbar-collapse"
    //           }
    //         >
    //           <button
    //             type="button"
    //             classNameName="navbar-close-btn text-white"
    //             onClick={closeNavbar}
    //           >
    //             <FaTimes size={30} />
    //           </button>
    //           <ul classNameName="custom-navbar-nav">
    //             <li classNameName="custom-nav-item">
    //               <a
    //                 href="#header"
    //                 classNameName="custom-nav-link text-white 
    //                 ls-1 text-uppercase fw-6 fs-20"
    //               >
    //                 Home
    //               </a>
    //             </li>
    //             <li classNameName="custom-nav-item">
    //               <a
    //                 href="#services"
    //                 classNameName="custom-nav-link text-white 
    //                  ls-1 text-uppercase fw-6 fs-20"
    //               >
    //                 Services
    //               </a>
    //             </li>
    //             <li classNameName="custom-nav-item">
    //               <a
    //                 href="#work"
    //                 classNameName="custom-nav-link text-white 
    //                  ls-1 text-uppercase fw-6 fs-20"
    //               >
    //                 Works
    //               </a>
    //             </li>
    //             <li classNameName="custom-nav-item">
    //               <a
    //                 href="#about"
    //                 classNameName="custom-nav-link text-white 
    //                  ls-1 text-uppercase fw-6 fs-20"
    //               >
    //                 About me
    //               </a>
    //             </li>
    //             <li classNameName="custom-nav-item">
    //               <a
    //                 href="#contact"
    //                 classNameName="custom-nav-link text-white 
    //                  ls-1 text-uppercase fw-6 fs-20"
    //               >
    //                 Contact
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Navbar;
