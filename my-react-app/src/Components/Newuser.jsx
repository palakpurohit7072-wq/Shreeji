import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Newuser.css";

const Newuser = () => {
  const navigate = useNavigate();

  // ✅ Manage user input state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    dob: "",
  });

  // ✅ Handle changes in input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle signup form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!formData.email || !formData.password) {
      alert("⚠️ Please fill all required fields!");
      return;
    }

    // ✅ Save new user data in localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    alert("🎉 Account created successfully!");
    navigate("/account"); // Redirect to login page
  };

  return (
    <div className="register-container d-flex justify-content-center align-items-center">
      <div className="register-box">
        <h3 className="text-center mb-4 bluetext sansfamily font_weight">
          Create an account
        </h3>

        {/* ✅ Signup Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label bluetext">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First Name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label bluetext">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label bluetext">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label bluetext">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label bluetext">Gender</label>
            <select
              name="gender"
              className="form-select"
              onChange={handleChange}
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label bluetext">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-create text-light">
              Create
            </button>
          </div>

          <p className="text-center mt-3 small-text">
            Already have an account?{" "}
            <Link to="/account" className="link-custom">
              Login
            </Link>
          </p>

          {/* ✅ Back to Home Button */}
          <div className="text-center mt-5">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => navigate("/")}
            >
              ← Back to Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newuser;
