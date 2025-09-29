// NewArrivalSlider.jsx
import React, { useRef } from "react";
import Slider from "react-slick";
import "./Newarrival.css";
import slider1 from "../assets/slider1.jpeg";
import slider2 from "../assets/slider2.jpeg";
import slider3 from "../assets/slider3.jpeg";
import slide from "../assets/slide.jpg";

const NewArrivalSlider = () => {
  const sliderRef = useRef(null); // 🔹 ref create

  const products = [
    { id: 1, title: "Camphor Vaporizer (Premium) with Bhimseni Camphor Tablets 100 gm", price: "Rs. 691.00", oldPrice: "Rs. 769.00", discount: "-10%", rating: 3, reviews: 33, img: slide, hoverImg: slider1 },
    { id: 2, title: "Naivedya Cup Sambrani Combo Pack of 3", price: "Rs. 253.00", oldPrice: "Rs. 270.00", discount: "-6%", rating: 4, reviews: 36, img: slider1, hoverImg: slider2 },
    { id: 3, title: "Camphor Mosquito Repellent Refill – Pack of 3", price: "Rs. 375.00", oldPrice: "", discount: "", rating: 4, reviews: 30, img: slider2, hoverImg: slider3 },
    { id: 4, title: "Woods Agarbatti Combo – Pack of 2", price: "Rs. 396.00", oldPrice: "Rs. 440.00", discount: "-10%", rating: 5, reviews: 55, img: slider3, hoverImg: slide },
    { id: 5, title: "Eco-Friendly Havan Cups – 12 pcs", price: "Rs. 199.00", oldPrice: "Rs. 220.00", discount: "-9%", rating: 4, reviews: 18, img: slide, hoverImg: slider1 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="arrival-dots-arrows">
        <button className="newarrival-arrow" onClick={() => sliderRef.current.slickPrev()}>
          <i className="bi bi-chevron-left"></i>
        </button>
        <ul className="newarrival-dots">{dots.slice(0, 3)}</ul>
        <button className="newarrival-arrow" onClick={() => sliderRef.current.slickNext()}>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    ),
    customPaging: () => <div className="custom-dot"></div>,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container arrival-sliders my-5">
      <div className="row mb-4">
        <div className="col-6">
          <h3 className="sansfamily bluetext fw-semibold best_seller_text">
            New Arrivals
          </h3>
        </div>
        <div className="col-6 text-end">
          <h3 className="sansfamily bluetext fs-6">View all products</h3>
        </div>
      </div>

      {/* 🔹 ref attach here */}
      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2 h-100">
            <div className="card product-card shadow-sm">
              <div className="position-relative">
                <img
                  src={product.img}
                  className="card-img-top"
                  alt={product.title}
                  onMouseEnter={(e) => (e.currentTarget.src = product.hoverImg)}
                  onMouseLeave={(e) => (e.currentTarget.src = product.img)}
                  style={{ transition: "0.3s ease" }}
                />
                {product.discount && (
                  <span className="badge rounded-circle bg-white text-dark discount-badge position-absolute top-0 end-0 d-flex align-items-center justify-content-center">
                    {product.discount}
                  </span>
                )}
              </div>
              <div className="card-body d-flex flex-column flex-grow-1">
                <h6 className="product-title fw-semibold bluetext sansfamily fs-6">{product.title}</h6>
                <div className="d-flex align-items-center mb-2 gap-2">
                  <p className="mb-0 fw-bold bluetext fs-6">{product.price}</p>
                  {product.oldPrice && <p className="mb-0 text-muted text-decoration-line-through small sansfamily">{product.oldPrice}</p>}
                </div>
                <div className="mb-2">
                  {"⭐".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                  <small> ({product.reviews})</small>
                </div>
                <div className="d-flex gap-2 mt-auto">
                  <button className="btn btn-warning flex-grow-1 text-danger fw-semibold">ADD</button>
                  <button className="btn border border-warning rounded-2 bg-transparent d-flex align-items-center justify-content-center yellowicon">
                    <i className="bi bi-heart text-danger fs-5"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivalSlider;
