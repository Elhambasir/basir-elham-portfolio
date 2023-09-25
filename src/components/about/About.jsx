import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./about.css";
import { aboutStats } from "../../constants/data";
import { BsGit } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImHtmlFive } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { images } from "../../constants/images";
const About = () => {
  return (
    <div className="about section-p bg-grey" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1>About Us</h1>
            <p>
            Hello, my name is Basir Elham, and I am a Full-stack developer proficient in HTML, CSS, Bootstrap, JavaScript, 
            React, Redux, and Ruby on Rails. Previously, I was studying computer science at the University in Afghanistan. 
            After I graduated from university, I started my journey at Microverse.
            I am currently pair-programming with remote professionals from all over the world through the Microverse program. I recently built a website for a local clinic where patients can view the list of doctors with their details and where patients can make a reservation for their needs.
            I enjoy building beautiful websites with efficient features. 
            I believe these kinds of websites will bring the audience wherever we want.
            </p>
            <a href="https://www.linkedin.com/in/basirelhamahmadi" className="nav-link" target= "_blank">
              LET'S CONNECT
            </a>
            <ul className="list-group d-flex flex-row gap-3">
              <li className="fs-2">
                <a href="https://www.facebook.com/basir.muhammadi.3" target= "_blank">
                  <AiFillFacebook />
                </a>
              </li>
              <li className="fs-2">
                <a href="https://instagram.com/basir.muhammadi.3?igshid=ZDdkNTZiNTM=" target= "_blank">
                  <AiFillInstagram />
                </a>
              </li>
              <li className="fs-2">
                <a href="https://linkedin.com/in/basirelhamahmadi" target= "_blank">
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="fs-2">
                <a href="https://github.com/Elhambasir" target= "_blank">
                  <AiFillGithub />
                </a>
              </li>
              <li className="fs-2">
                <a href="mailto:elham1378basir@gmail.com" target= "_blank">
                  <MdEmail />
                </a>
              </li>
            </ul>
            <a href={images.myCv} className="btn bg-dark text-light mb-2 mt-2" download>
              GET MY RESUME
            </a>
          </div>
          <div className="col-lg-4 mt-2">
            <div
              class="accordion accordion-flush border"
              id="accordionFlushExample"
            >
              <div class="accordion-item bg-grey">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed fw-bold bg-grey fs-5 text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    LANGUAGES
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <ul class="list d-flex justify-content-start flex-wrap">
                      <li class="border-bottom me-3">HTML</li>
                      <li class="border-bottom me-3">CSS</li>
                      <li class="border-bottom me-3">Javascript</li>
                      <li class="border-bottom me-3">Ruby</li>
                      <li class="border-bottom me-3">C#</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-grey">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed fw-bold bg-grey fs-5 text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    FRAMEWORKS
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse "
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <ul class="list d-flex justify-content-start flex-wrap">
                      <li class="border-bottom me-3">Ruby on Rails</li>
                      <li class="border-bottom me-3">Bootstrap</li>
                      <li class="border-bottom me-3">JQuery</li>
                      <li class="border-bottom me-3">React</li>
                      <li class="border-bottom me-3">Redux</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-grey">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed fw-bold bg-grey fs-5 text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    SKILLS
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <ul class="list d-flex justify-content-start flex-wrap">
                      <li class="border-bottom me-4">GitHub</li>
                      <li class="border-bottom me-4">Git</li>
                      <li class="border-bottom me-4">API</li>
                      <li class="border-bottom me-4">Rspec</li>
                      <li class="border-bottom me-4">Rspec</li>
                      <li class="border-bottom me-4">Jest</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
