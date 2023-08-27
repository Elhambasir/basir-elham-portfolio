import React from "react";
import PropTypes from "prop-types";
import { BsGithub } from "react-icons/bs";
import { RiLiveFill } from "react-icons/ri";
import { ProjectDetail } from "../projectDetailSlider/projectDetailSlider";

const Popup = (props) => {
  const { title, description, technologies } = props;
  return (
    <div
      class="modal fade bg-dark"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h1 class="modal-title text-uppercase" id="staticBackdropLabel">
              {title}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div className="work-list">
              <div className="card border-0">
                <ProjectDetail {...props} />
                <div className="card-body popup-card-body">
                  <h4 className="card-title">PROJECT DETAILS</h4>
                  <p className="lh-1 popup-project-details">{description}</p>
                </div>
                <ul className="d-flex flex-wrap justify-content-start gap-3">
                  {technologies &&
                    technologies.map((technology, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-grey text-dark ps-2 pe-2 rounded fs-5"
                        >
                          {technology}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-start">
            <button type="button" class="btn bg-brown text-light btn-lg">
              <a href="https://elhambasir.github.io/capstone-project1--conference-page/">
                SEE LIVE
              </a>{" "}
              <RiLiveFill />
            </button>
            <button type="button" class="btn bg-brown text-light btn-lg">
              <a href="https://github.com/Elhambasir/capstone-project1--conference-page">
                SEE RECOURCE
              </a>{" "}
              <BsGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {};

export default Popup;
