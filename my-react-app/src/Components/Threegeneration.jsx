import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Threegeneration.css";

const Threegeneration = () => {
  const sliderRef = useRef(null);

  const reviews = [
    { id: 1, title: "The fragrance is so nice, worth the money spent", text: "", author: "Vidya Srinivasan" },
    { id: 2, title: "Great", text: "", author: "Sejal" },
    { id: 3, title: "Awesome", text: "Good fragrance", author: "SANJEEV SRIVASTAVA" },
    { id: 4, title: "Lovely Product", text: "Makes my pooja room very fresh.", author: "Ananya Sharma" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // desktop
    slidesToScroll: 1,
    arrows: false, // hide default arrows
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="threegeneration py-5">
      <div className="container threegeneration_container">
        {/* Heading */}
        <div className="mb-4">
          <h3 className="sansfamily bluetext generation_heading fw-bold">
            3 Generations of Trust.
          </h3>
          <div className="stars mb-2">
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
          </div>
          <p className="font_size sansfamily bluetext">from 7919 reviews</p>
        </div>

        {/* Slider */}
        <div className="slider-wrapper">
          <Slider ref={sliderRef} {...settings}>
            {reviews.map((review) => (
              <div key={review.id} className="slide-item">
                <div className="card border-0 p-3 review-card">
                  <div className="stars mb-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <h6 className="title_review sansfamily bluetext font_size fw-bold">
                    {review.title}
                  </h6>
                  {review.text && (
                    <p className="sansfamily bluetext font_size">{review.text}</p>
                  )}
                  <p className="sansfamily bluetext font_size">{review.author}</p>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom arrows */}
          <div className="arrows-wrapper">
            <div className="custom-arrow" onClick={() => sliderRef.current.slickPrev()}>
              <i className="bi bi-chevron-left"></i>
            </div>
            <div className="custom-arrow" onClick={() => sliderRef.current.slickNext()}>
              <i className="bi bi-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Threegeneration;

