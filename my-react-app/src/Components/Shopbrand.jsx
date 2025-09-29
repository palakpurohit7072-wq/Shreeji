import React, { useRef } from "react";
import Slider from "react-slick";
import "./Shopbrand.css";

import slider1 from "../assets/slider1.jpeg";
import slider2 from "../assets/slider2.jpeg";
import slider3 from "../assets/slider3.jpeg";
import slider from "../assets/slider.png";
import slide from "../assets/slide.jpg";

function BrandsSlider() {
  const sliderRef = useRef(null);

  const images = [
    slider1,
    slider2,
    slider3,
    slide,
    slider,
    slide,
    slider2,
    slider3,
  ];

 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  appendDots: (dots) => (
    <div className="dots-with-arrows">
      <button
        className="custom-arrow"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      {/* 🔹 yaha dots limit kiye */}
      <ul className="custom-slick-dots">{dots.slice(0, 2)}</ul>

      <button
        className="custom-arrow"
        onClick={() => sliderRef.current.slickNext()}
      >
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  ),
  customPaging: () => <div className="custom-dot"></div>,
};


  return (
    <div className="container brand-slider my-5">
      <h3 className="text-center mb-4">Shop By Brands</h3>
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <div key={index} className="text-center">
            <img src={img} alt={`brand-${index}`} height="80" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BrandsSlider;





