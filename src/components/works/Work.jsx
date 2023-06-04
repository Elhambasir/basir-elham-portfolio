import React from 'react';
import { works } from '../../constants/data';
import { ImCancelCircle } from 'react-icons/im';
import { BsPlusLg } from 'react-icons/bs';
import './work.css';

export const Work = () => {
  const [showImage, setShowImage] = React.useState(false);
  const [image, setImage] = React.useState('');

  const handleShowImage = (image) => {
    setShowImage(true);
    setImage(image);
  }
  return (
    <div className="work section-p bg-grey" id="work">
      <div className={showImage? "image-box show-image-box": "image-box"}>
        <div className="image-box-content">
          <img src={image} alt="" />
          <span className="image-box-close-btn" onClick={() => setShowImage(false)}>
            <ImCancelCircle size={30} className="text-brown" />
          </span>
        </div>
      </div>
      <div className="container">
        <div className="work-content">
          <div className="section-title">
            <h3 className="text-brown">latest <span
              className="text-dark">works</span></h3>
            <p className="text">I offer the right
              solutions for your digital business</p>
          </div>
          <div className="work-list grid">
            {
              works.map((work, index) => {
                return (
                  <div key={index} className="work-item text-center" onClick={() => handleShowImage(work.image)}>
                    <div className="work-item-img">
                      <img src={work.image} alt="img" />
                    </div>
                    <span className="work-item-icon">
                      <BsPlusLg size = {38} className="text-brown" />
                    </span>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
