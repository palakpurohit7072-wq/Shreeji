import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Newuser.css";

const Newuser = () => {
  const navigate = useNavigate();

  // ✅ Form input states
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    dob: "",
  });

  // ✅ Message state for showing success/error messages
  const [message, setMessage] = useState({ text: "", type: "" });

  // ✅ Real-time email validation state
  const [emailError, setEmailError] = useState("");

  // ✅ Email validation function
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // ✅ Real-time email validation
    if (name === "email") {
      if (value.trim() === "") {
        setEmailError("");
      } else if (!isValidEmail(value)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    }
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" }); // clear previous message

    // ✅ Check for any empty required fields
    const { firstName, lastName, email, password, gender, dob } = formData;
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !gender.trim() ||
      !dob.trim()
    ) {
      setMessage({
        text: "⚠️ Please fill all fields before submitting.",
        type: "error",
      });
      return;
    }

    // ✅ Email validation check before submit
    if (!isValidEmail(email)) {
      setEmailError("Invalid email address");
      return;
    }

    // ✅ Check if user already exists
    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (
      existingUser &&
      existingUser.email === email &&
      existingUser.firstName === firstName &&
      existingUser.password === password
    ) {
      setMessage({
        text: "You are already registered with these details.",
        type: "error",
      });
      return;
    }

    // ✅ Save user data in localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    // ✅ Success message
    setMessage({
      text: "🎉 Account created successfully! Redirecting to login...",
      type: "success",
    });

    // ✅ Redirect after short delay
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="register-container d-flex justify-content-center align-items-center mt-4 mb-4 bg-white px-3 px-sm-0">
      <div className="register-box bg-white">
        <h3 className="text-center mb-4 bluetext sansfamily font_weight">
          Create an account
        </h3>

        <form onSubmit={handleSubmit}>
          {/* ✅ First Name */}
          <div className="mb-3">
            <label className="form-label bluetext">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          {/* ✅ Last Name */}
          <div className="mb-3">
            <label className="form-label bluetext">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          {/* ✅ Email */}
          <div className="mb-3">
            <label className="form-label bluetext">Email</label>
            <input
              type="email"
              name="email"
              className={`form-control ${emailError ? "border-danger" : ""}`}
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {emailError && <p className="error-text mt-1">{emailError}</p>}
          </div>

          {/* ✅ Password */}
          <div className="mb-3">
            <label className="form-label bluetext">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* ✅ Gender */}
          <div className="mb-3">
            <label className="form-label bluetext">Gender</label>
            <select
              name="gender"
              className="form-select"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* ✅ DOB */}
          <div className="mb-3">
            <label className="form-label bluetext">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="form-control"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          {/* ✅ Submit */}
          <div className="d-grid">
            <button type="submit" className="btn btn-creates text-light">
              Create
            </button>
          </div>

          <p className="text-center mt-3 small-text">
            Already have an account?{" "}
            <Link to="/login" className="link-custom">
              Login
            </Link>
          </p>

          {/* ✅ Global Message */}
          {message.text && (
            <p
              className={`text-center mt-3 message-text ${
                message.type === "success" ? "success-text" : "error-text"
              }`}
            >
              {message.text}
            </p>
          )}

          {/* ✅ Back to Home */}
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
