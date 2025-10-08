import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Privacypolicy = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Privacy Policy</h1>

      {/* Section 1 */}
      <section className="mb-4">
        <h3>1. Background</h3>
        <p>
          This Privacy Policy (“Policy”) is issued by <strong>Your Company Name</strong> (“Company”), having its place of business at <strong>Your Address</strong>. 
        </p>
        <p>
          By using our website or services (“Platform”), you agree to the collection and use of your information as described in this Policy.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-4">
        <h3>2. Personal Information</h3>
        <p>
          “Personal Information” refers to information that can identify a natural person, including but not limited to:
        </p>
        <ul>
          <li>Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Payment or financial information</li>
          <li>Browsing and usage data</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-4">
        <h3>3. Information Collection</h3>
        <p>We collect the following information from Users:</p>
        <ul>
          <li>Information you provide during registration or transactions</li>
          <li>Usage data and browsing history on our Platform</li>
          <li>Information from surveys or customer support interactions</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-4">
        <h3>4. Use of Information</h3>
        <p>
          The information collected is used to provide services, facilitate transactions, improve our services, and communicate with you.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-4">
        <h3>5. Disclosure of Information</h3>
        <p>
          We do not sell or rent your Personal Information to third parties. However, we may share data with:
        </p>
        <ul>
          <li>Service providers working on our behalf</li>
          <li>Legal authorities as required by law</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-4">
        <h3>6. Cookies</h3>
        <p>
          Our Platform uses cookies for improving user experience. You may disable cookies in your browser, but some features may not work properly.
        </p>
      </section>

      {/* Section 7 */}
      <section className="mb-4">
        <h3>7. Your Rights</h3>
        <ul>
          <li>Access or request deletion of your personal data</li>
          <li>Withdraw consent to data processing</li>
          <li>Rectification of inaccurate data</li>
          <li>Grievance redressal</li>
        </ul>
      </section>

      {/* Section 8 */}
      <section className="mb-4">
        <h3>8. Security</h3>
        <p>
          We implement reasonable security measures to protect your Personal Information, but no system is 100% secure.
        </p>
      </section>

      {/* Section 9 */}
      <section className="mb-4">
        <h3>9. Third-party Links</h3>
        <p>
          Our Platform may contain links to other websites. We are not responsible for the privacy practices of these third-party sites.
        </p>
      </section>

      {/* Section 10 */}
      <section className="mb-4">
        <h3>10. Governing Law</h3>
        <p>
          This Policy is governed by the laws of <strong>Your Country / State</strong>. Any disputes will be resolved in the courts of <strong>Your City</strong>.
        </p>
      </section>

      {/* Section 11 */}
      <section className="mb-4">
        <h3>11. Grievance Officer</h3>
        <p>
          Name: Grievance Officer – <strong>Your Company Name</strong><br />
          Address: <strong>Your Address</strong><br />
          Email: <strong>your-grievance@example.com</strong>
        </p>
      </section>

      {/* 🔹 Back to Home Button */}
      <div className="text-center mt-5">
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/")} // Navigates to home
        >
        ← Back to Home
        </button>        
      </div>

      <footer className="text-center mt-5 pt-3 border-top">
        <p>&copy; {new Date().getFullYear()} <strong>Your Company Name</strong>. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Privacypolicy;

