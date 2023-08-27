import React from "react";
import { works } from "../../constants/data";
import { BsPlusLg } from "react-icons/bs";
import Popup from "../projectDetailPopup/popup";
import "./work.css";

export const Work = () => {
  const [projectDetails, setProjectDetails] = React.useState({});

  const handleShowImage = (data) => {
    setProjectDetails(data);
  };
  return (
    <div className="work section-p bg-grey" id="work">
      <Popup {...projectDetails} />
      <div className="container">
        <div className="work-content">
          <div className="section-title">
            <h3 className="text-brown">
              latest <span className="text-dark">works</span>
            </h3>
            <p className="text">
              I offer the right solutions for your digital business
            </p>
          </div>
          <div className="work-list grid">
            {works.map((work, index) => {
              return (
                <div
                  key={index}
                  className="work-item text-center"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => handleShowImage(work)}
                >
                  <div className="work-item-img">
                    <img src={work.image[0]} alt="img" />
                  </div>
                  <span className="work-item-icon">
                    <BsPlusLg size={38} className="text-brown" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
