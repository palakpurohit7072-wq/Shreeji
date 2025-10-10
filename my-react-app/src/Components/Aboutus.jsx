import React from "react";
import "./Aboutus.css";
import slider1 from "../assets/slider1.jpeg"; // your local image

const Aboutus = () => {
  return (
    <div className="aboutus-container">   
      <div className="aboutus-box">
        {/* Left Section */}
        <div className="aboutus-text">
          <h2>About Us</h2>
          <p className="subtitle">Shree Jee Gavya</p>
          <p>
            Taking the passion and guiding principles of our founder to the next
            level, NR Group, most popularly known for its flagship brand Shree Jee Gavya,
            brings a divine and fragrant world at your fingertips through
            Shree Jee Gavya.in. With our unique, matchless expertise in fragrance creation
            and a passionate commitment towards providing the customers with an
            experience of a lifetime; we present to you Shree Jee Gavya.in.
          </p>
          <p>
            Shree Jee Gavya.in is a one-stop store bringing to you the best of fragrance
            products from the unsurpassed leaders in the industry. Discover an
            array of handpicked products and accessories associated with prayer
            requirements, personal care, air care, and lifestyle products. Be a
            part of a legacy that has been handed over from generation to
            generation. Explore the world of amazingly divine and heavenly
            range, from popular, traditional classics to modern and contemporary
            Agarbathies; Prayer Packs for various types of Pooja; Prayer
            Essentials; Car and Room Fragrances.
          </p>
          <p>
            Create traditional and vibrant lifestyles, alluring ambiances, and
            memorable gifting experiences through us at Shree Jee Gavya.in
          </p>
        </div>

        {/* Right Section */}
        <div className="aboutus-image">
          <img src={slider1} alt="Agarbatti incense" />
        </div>
      </div>
       <div className="text-center mt-5">
          <button className="btn btn-outline-secondary" onClick={() => navigate("/")}>
            ← Back to Home
          </button>
        </div>
    </div>
  );
};

export default Aboutus;

