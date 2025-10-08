import React from "react";
import Slider from "react-slick";
import "./Singleslide.css"; 
import slider1 from "../assets/slider1.jpeg";
import slider2 from "../assets/slider2.jpeg";
import slider3 from "../assets/slider3.jpeg";

const Singleslide = () => {
  const slides = [slider1, slider2, slider3];

  const settings = {
    dots: true,
    arrows: false,          // Arrows removed
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: i => (
      <div className="custom-dot"></div> // Custom pill/circle dots
    ),
    appendDots: dots => <div className="custom-dots">{dots}</div>,
  };

  return (
    <div className="container-fluid singleslide-container p-0">
      <Slider {...settings}>
        {slides.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Singleslide;
