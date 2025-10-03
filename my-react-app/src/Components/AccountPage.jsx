import React from "react";

import "./AccountPage.css";
const AccountPage = () => {
  return (
    <div className="container login_container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h3 className="mb-4 text-center bluetext sansfamily font_weight login-heading">Customer Login</h3>

        <form>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label bluetext sansfamily font_size">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label bluetext sansfamily font_size">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>

          {/* Login Button */}
          <div className="d-grid mb-3">
            <button type="submit" className="btn-custom bg-blue text-light fs-6 border-0">
              Login
            </button>
          </div>
        </form>

        {/* Links */}
        <div className="text-center">
          <a href="#" className="d-block mb-1">
            Forgot your password?
          </a>
          <a href="#">New Customer? Sign Up!</a>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
