import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./AccountPage.css";

const AccountPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container login_container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h3 className="mb-4 text-center bluetext sansfamily font_weight login-heading">
          Customer Login
        </h3>

        <form>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label bluetext sansfamily font_size">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label bluetext sansfamily font_size">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Login Button */}
          <div className="d-grid mb-3">
            <button
              type="submit"
              className="btn-custom bg-blue text-light fs-6 border-0"
            >
              Login
            </button>
          </div>
        </form>

        {/* Links */}
        <div className="text-center mt-3">
          <a href="#" className="link-custom d-block mb-2">
            Forgot your password?
          </a>
          <a href="#" className="link-custom">
            New Customer? Sign Up!
          </a>
        </div>

        {/* ✅ Back to Home Button */}
        <div className="d-grid mt-4">
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate("/")}
          >
            ⬅ Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
