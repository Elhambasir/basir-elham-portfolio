import React from "react";
import "./projectDetail.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ProjectDetail = (props) => {
  const { image } = props;
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="testmonial-list">
      <Slider {...settings}>
        {image && image.map((item, index) => {
          return (
            <img src={item} alt="no image" key={index} />
          );
        })}
      </Slider>
    </div>
  );
};
