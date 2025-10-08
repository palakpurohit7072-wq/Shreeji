import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AccountPage.css";

const AccountPage = () => {
  const navigate = useNavigate();

  // ✅ State for email, password and error message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Handle Login Submit
  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    // If no user is registered yet
    if (!storedUser) {
      setError("No account found! Please sign up first.");
      return;
    }

    // Check credentials
    if (storedUser.email === email && storedUser.password === password) {
      alert("Login successful!");
      navigate("/"); // Go to home page after login
    } else {
      setError("Incorrect email or password."); // Show error message
    }
  };

  return (
    <div className="container login_container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h3 className="mb-4 text-center bluetext sansfamily font_weight login-heading">
          Customer Login
        </h3>

        {/* ✅ Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label bluetext sansfamily font_size">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label bluetext sansfamily font_size">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* ✅ Error Message */}
          {error && <p className="text-danger text-center">{error}</p>}

          <div className="d-grid mb-3">
            <button type="submit" className="btn-custom bg-blue text-light fs-6 border-0">
              Login
            </button>
          </div>
        </form>

        <div className="text-center mt-3">
          <Link to="/forgetpassword" className="link-custom d-block mb-2">
            Forgot your password?
          </Link>
          <Link to="/newuser" className="link-custom d-block mb-2">
            New Customer? Sign Up!
          </Link>
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-outline-secondary" onClick={() => navigate("/")}>
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
