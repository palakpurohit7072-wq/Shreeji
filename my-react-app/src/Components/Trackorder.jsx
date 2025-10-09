import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for back to home
import "./Trackorder.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide from "../assets/slide.jpg";
import slider from "../assets/slider.png";
import slider1 from "../assets/slider1.jpeg";
import slider2 from "../assets/slider2.jpeg";
import slider3 from "../assets/slider3.jpeg";

const Trackorder = () => {
  const navigate = useNavigate();
  const [trackType, setTrackType] = useState("order");
  const [inputValue, setInputValue] = useState("");
  const [orderData, setOrderData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  // 🔹 Dummy order data
  const dummyOrders = [
    {
      orderId: "101",
      trackingId: "TRK123",
      status: "Shipped",
      expectedDelivery: "2025-10-12",
      courier: "BlueDart",
      currentLocation: "Bangalore",
      lastUpdated: "2025-10-08 10:45 AM",
    },
    {
      orderId: "102",
      trackingId: "TRK124",
      status: "Processing",
      expectedDelivery: "2025-10-14",
      courier: "Delhivery",
      currentLocation: "Packaging Center",
      lastUpdated: "2025-10-08 09:10 AM",
    },
    {
      orderId: "103",
      trackingId: "TRK125",
      status: "Delivered",
      expectedDelivery: "2025-10-06",
      courier: "Ecom Express",
      currentLocation: "Delivered to Customer",
      lastUpdated: "2025-10-06 03:30 PM",
    },
  ];

  // 🟡 Handle Track Button
  const handleTrack = () => {
    setOrderData(null);
    setErrorMsg("");

    const val = inputValue.trim();
    if (!val) {
      setErrorMsg("⚠️ Please enter your ID before tracking.");
      return;
    }

    const foundOrder = dummyOrders.find((o) =>
      trackType === "order" ? o.orderId === val : o.trackingId === val
    );

    if (foundOrder) {
      setOrderData(foundOrder);
    } else {
      setErrorMsg("⚠️ Order not found. Please check your ID.");
    }
  };

  // 🛍️ Product List
  const products = [
    { id: 1, name: "Pure Bhimseni Camphor 50g", price: "₹140", image: slider1 },
    { id: 2, name: "Premium Camphor Vaporizer Diffuser", price: "₹499", image: slider2 },
    { id: 3, name: "Pure Edible Gingelly/Sesame Oil", price: "₹325", image: slider3 },
    { id: 4, name: "Pure Cow Ghee Diya (30N)", price: "₹110", image: slide },
    { id: 5, name: "Vasu Loban Sambrani", price: "₹100", image: slider },
  ];

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
          Shree Jee Gavya<span className="text-danger">.in</span>
        </h1>
      </div>

      {/* 🔹 Track Box */}
      <div className="container trackingorder my-4">
        <div className="track-box mx-auto p-4 shadow-sm bg-light rounded-3">
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
              placeholder={`Enter ${trackType === "order" ? "Order ID" : "Tracking ID"}`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="form-control w-50 me-2"
            />
            <button className="btn btn-warning fw-bold px-4" onClick={handleTrack}>
              Track Your Order
            </button>
          </div>

          {/* ❌ Error Message */}
          {errorMsg && <p className="mt-3 text-danger text-center fw-semibold">{errorMsg}</p>}

          {/* ✅ Order Details */}
          {orderData && (
            <div className="mt-4 p-3 bg-white rounded shadow-sm text-center">
              <h5 className="fw-bold text-success mb-3">Order Details</h5>
              <p><strong>Status:</strong> {orderData.status}</p>
              <p><strong>Courier:</strong> {orderData.courier}</p>
              <p><strong>Current Location:</strong> {orderData.currentLocation}</p>
              <p><strong>Expected Delivery:</strong> {orderData.expectedDelivery}</p>
              <p className="text-muted"><small>Last Updated: {orderData.lastUpdated}</small></p>
            </div>
          )}

          {/* 🔹 Back to Home Button */}
          <div className="text-center mt-5">
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate("/")}
            >
              ← Back to Home
            </button>
          </div>
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
                  <p className="card-title small fw-semibold mb-1">{product.name}</p>
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
