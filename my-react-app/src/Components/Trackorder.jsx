import React, { useState } from "react";
import "./Trackorder.css";

// 🟢 Import Slick Carousel CSS
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 🖼️ Import local images
import slide from "../assets/slide.jpg";
import slider from "../assets/slider.png";
import slider1 from "../assets/slider1.jpeg";
import slider2 from "../assets/slider2.jpeg";
import slider3 from "../assets/slider3.jpeg";

const Trackorder = () => {
  const [trackType, setTrackType] = useState("order");
  const [inputValue, setInputValue] = useState("");
  const [trackMessage, setTrackMessage] = useState("");

  // 🟡 Handle Track Button
  const handleTrack = () => {
    if (!inputValue.trim()) {
      setTrackMessage("⚠️ Please enter your ID before tracking.");
      return;
    }
    setTrackMessage(
      `✅ Tracking ${trackType === "order" ? "Order ID" : "Tracking ID"}: ${inputValue}`
    );
  };

  // 🛍️ Product List
  const products = [
    { id: 1, name: "Pure Bhimseni Camphor 50g", price: "₹140", image: slider1 },
    { id: 2, name: "Premium Camphor Vaporizer Diffuser", price: "₹499", image: slider2 },
    { id: 3, name: "Pure Edible Gingelly/Sesame Oil", price: "₹325", image: slider3 },
    { id: 4, name: "Pure Cow Ghee Diya (30N)", price: "₹110", image: slide },
    { id: 5, name: "Vasu Loban Sambrani", price: "₹100", image: slider },
  ];

  // ⚙️ React Slick Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="trackorder-page">
      {/* 🔹 Logo Section */}
      <div className="text-center mt-4">
        <h1 className="fw-bold text-primary">
          CYCLE<span className="text-danger">.in</span>
        </h1>
      </div>

      {/* 🔹 Track Box */}
      <div className="container trackingorder my-4">
        <div className="track-box mx-auto p-4 shadow-sm bg-light rounded-3">
          {/* Radio Buttons */}
          <div className="d-flex justify-content-center mb-3 gap-4">
            <div>
              <input
                type="radio"
                id="orderId"
                name="trackType"
                value="order"
                checked={trackType === "order"}
                onChange={() => setTrackType("order")}
                className="form-check-input me-2"
              />
              <label htmlFor="orderId" className="form-check-label">
                Order ID
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="trackingId"
                name="trackType"
                value="tracking"
                checked={trackType === "tracking"}
                onChange={() => setTrackType("tracking")}
                className="form-check-input me-2"
              />
              <label htmlFor="trackingId" className="form-check-label">
                Tracking ID
              </label>
            </div>
          </div>

          {/* Input Field + Button */}
          <div className="d-flex justify-content-center align-items-center">
            <input
              type="text"
              placeholder={`Enter ${
                trackType === "order" ? "Order ID" : "Tracking ID"
              }`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="form-control w-50 me-2"
            />
            <button
              className="btn btn-warning fw-bold px-4"
              onClick={handleTrack}
            >
              Track Your Order
            </button>
          </div>

          {/* ✅ Inline Message Below */}
          {trackMessage && (
            <p
              className={`mt-3 text-center fw-semibold ${
                trackMessage.startsWith("⚠️") ? "text-danger" : "text-success"
              }`}
            >
              {trackMessage}
            </p>
          )}
        </div>
      </div>

      {/* 🔹 Product Slider */}
      <div className="container mt-5 slider-container">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-2">
              <div className="card border-0 shadow-sm h-100 text-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top rounded"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body p-2">
                  <p className="card-title small fw-semibold mb-1">
                    {product.name}
                  </p>
                  <p className="text-dark fw-bold mb-0">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Trackorder;
