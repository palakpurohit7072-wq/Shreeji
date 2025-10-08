import React from "react";
import { useNavigate } from "react-router-dom";

const Returnsandrefund = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Returns & Refund</h1>

      <p>
        All returns and refunds are processed according to our company policy. Products must be returned in original packaging with all tags intact.
      </p>

      {/* Back to Home Button */}
      <div className="text-center mt-5">
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/")} // Navigates to home
        >
        ← Back to Home
        </button> 
      </div>
    </div>
  );
};

export default Returnsandrefund;

