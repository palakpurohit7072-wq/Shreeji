import React from "react";
import "./Wishlist.css";
import { useNavigate } from "react-router-dom"; // ✅ added useOutletContext
const Wishlist = ({ setShowWishlist }) => {
    const navigate = useNavigate();
  
  return (
    <div className="wishlist-overlay">
      <div className="wishlist-box">
        <button
          type="button"
          className="wishlist-close"
          onClick={() => setShowWishlist(false)}
        >
          ✕
        </button>

        <div className="wishlist-header">
          <span className="wishlist-heart">💛</span>
          <h5 className="wishlist-title">My Wishlist</h5>
        </div>

        <p className="wishlist-text">
          Please login to save your wishlist across devices.
        </p>
        <button className="wishlist-login-btn" onClick={() => navigate("/login")}>  LOGIN </button>
      </div>
    </div >
  );
};

export default Wishlist;
