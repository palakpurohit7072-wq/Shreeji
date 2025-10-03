import React, { useState } from "react";
import "./Wishlist.css";

const Wishlist = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="wishlist-overlay">
      <div className="wishlist-box">
        {/* Close button */}
        <button
          type="button"
          className="wishlist-close"
          onClick={() => setShow(false)}
        >
          ✕
        </button>

        {/* Title */}
        <div className="wishlist-header">
          <span className="wishlist-heart">💛</span>
          <h5 className="wishlist-title">My Wishlist</h5>
        </div>

        {/* Message */}
        <p className="wishlist-text">
          Please login to save your wishlist across devices.
        </p>

        {/* Login Button */}
        <button className="wishlist-login-btn">LOGIN</button>
      </div>
    </div>
  );
};

export default Wishlist;

