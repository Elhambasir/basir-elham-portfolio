import React from "react";
import PropTypes from "prop-types";
// import { BsGithub } from "react-icons/bs";
import { RiLiveFill } from "react-icons/ri";
import { ProjectDetail } from "../projectDetailSlider/projectDetailSlider";

const Popup = (props) => {
  const { title, description, technologies, liveLink, sourceLink } = props;
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
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header border-0">
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
                  <h4 className="card-title">{title}</h4>
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
              <a  class="btn bg-dark text-light btn-lg" href={ liveLink }>
                SEE LIVE
              </a>{" "}
              <a  class="btn bg-dark text-light btn-lg" href={ sourceLink }>
                SEE RECOURCE
              </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {};

export default Popup;
