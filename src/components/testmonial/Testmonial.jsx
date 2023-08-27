import React from 'react';
import './testmonial.css';
import { testimonials } from '../../constants/data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { logos } from '../../constants/data';

export const Testmonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <div className="testmonial section-p">
      <div className="container">
        <div className="testmonial-content">
          <div className="section-title">
            <h3 className="text-brown">Clients
              <span className="text-dark">Testmonial</span>
            </h3>
          </div>
          <div className="testmonial-list">
            <Slider {...settings}>
              {
                testimonials.map((testimonial, index) => {
                  return (
                    <div className="testmonial-item" key={index}>
                      <div className="testmonial-item-content">
                        <p className="text text-center">{testimonial.description}</p>
                        <div className="testmonial-item-info">
                          <h4 className="text-center">{testimonial.name}</h4>
                          <h3 className="text-center">{testimonial.post}</h3>
                        </div>
                      </div>
                    </div>
                  )
                }
                )
              }
            </Slider>
          </div>
          <div className="testmonial-logo">
            {
              logos.map((logo, index) => {
                return (
                  <div className="testmonial-logo-item" key={index}>
                    <img src={logo.image} alt="not found" />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

