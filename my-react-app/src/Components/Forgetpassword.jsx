import React, { useState } from "react";
import "./Forgetpassword.css";
import { useNavigate } from "react-router-dom";

const Forgetpassword = () => {
  const navigate = useNavigate();

  // ✅ Manage form state
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1); // Step 1 = Enter email, Step 2 = Reset password

  // ✅ Step 1: Check if email exists in localStorage
  const handleEmailSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== email) {
      alert("❌ Email not found. Please enter a registered email.");
      return;
    }

    // Move to password reset step
    setStep(2);
  };

  // ✅ Step 2: Reset password
  const handlePasswordReset = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    storedUser.password = newPassword;
    localStorage.setItem("user", JSON.stringify(storedUser));

    alert("✅ Password reset successful! Please login with your new password.");
    navigate("/account"); // Redirect to login
  };

  return (
    <div className="reset-page">
      <div className="reset-container">
        <h2>Reset your password</h2>

        {/* Step 1: Ask for email */}
        {step === 1 ? (
          <>
            <p className="info-text">
              We will send you an email to reset your password.
            </p>
            <form className="reset-form" onSubmit={handleEmailSubmit}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="buttons">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => navigate("/account")}
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            {/* Step 2: Reset password */}
            <p className="info-text">Enter your new password below.</p>
            <form className="reset-form" onSubmit={handlePasswordReset}>
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                id="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <div className="buttons">
                <button type="submit" className="submit-btn">
                  Reset Password
                </button>
              </div>
            </form>
          </>
        )}

        {/* ✅ Back to Home Button */}
        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;

