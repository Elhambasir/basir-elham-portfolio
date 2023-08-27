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
const About = () => {
  return (
    <div className="about section-p bg-grey" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1>About Us</h1>
            <p>
              I am a full-stack development student currently enrolled in
              Microverse, a remote software development school that uses pair
              programming and real-world projects to teach development. I am
              passionate about learning new technologies and building innovative
              applications. I am also a strong communicator and team player. During 
              passed 6 months I was practicing as a software engineer at Microverse, I worked on a
              variety of projects, including building developing a new mobile, web application,
              doctor appointment website etc... I also have experience
              with a variety of programming languages, including JavaScript, Ruby,
              and Ruby on Rails. I am excited to continue my education at
              Microverse and learn the skills I need to become a successful
              full-stack developer. I am confident that I can contribute to your
              team and help you achieve your goals.
            </p>
            <a href="https://www.linkedin.com/in/basirelhamahmadi" className="nav-link">
              LET'S CONNECT
            </a>
            <ul className="list-group d-flex flex-row gap-3">
              <li className="fs-2">
                <a href="https://www.facebook.com/basir.muhammadi.3">
                  <AiFillFacebook />
                </a>
              </li>
              <li className="fs-2">
                <a href="https://instagram.com/basir.muhammadi.3?igshid=ZDdkNTZiNTM=">
                  <AiFillInstagram />
                </a>
              </li>
              <li className="fs-2">
                <a href="https://linkedin.com/in/basirelhamahmadi">
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="fs-2">
                <a href="https://github.com/Elhambasir">
                  <AiFillGithub />
                </a>
              </li>
              <li className="fs-2">
                <a href="elham1378basir@gmail.com">
                  <MdEmail />
                </a>
              </li>
            </ul>
            <button type="button" className="btn bg-brown text-light mb-2 mt-2">
              GET MY RESUME
            </button>
          </div>
          <div className="col-lg-4 mt-2">
            <div
              class="accordion accordion-flush border"
              id="accordionFlushExample"
            >
              <div class="accordion-item bg-light">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed fw-bold bg-light fs-5 text-dark"
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
                    <ul class="list list-group-numbered">
                      <li class="border-bottom">html</li>
                      <li class="border-bottom">css</li>
                      <li class="border-bottom">javascript</li>
                      <li class="border-bottom">ruby</li>
                      <li class="border-bottom">C#</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-light">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed fw-bold bg-light fs-5 text-dark"
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
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <ul class="list list-group-numbered">
                      <li class="border-bottom">Ruby on Rails</li>
                      <li class="border-bottom">Bootstrap</li>
                      <li class="border-bottom">JQuery</li>
                      <li class="border-bottom">React</li>
                      <li class="border-bottom">Redux</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-light">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed fw-bold bg-light fs-5 text-dark"
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
                    <ul class="list list-group-numbered">
                      <li class="border-bottom">GitHub</li>
                      <li class="border-bottom">Git</li>
                      <li class="border-bottom">API</li>
                      <li class="border-bottom">Rspec</li>
                      <li class="border-bottom">Jest</li>
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
