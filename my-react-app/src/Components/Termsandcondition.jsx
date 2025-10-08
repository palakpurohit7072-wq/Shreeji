import React from "react";
import { useNavigate } from "react-router-dom";

const Termsandcondition = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Terms and Conditions</h1>

      {/* Section 1 */}
      <section className="mb-4">
        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing or using the Cycle.in website, you agree to comply with and be bound by these Terms and Conditions.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-4">
        <h3>2. Eligibility</h3>
        <p>
          Use of the Cycle.in Website is available only to persons who can form legally binding contracts under the Indian Contract Act, 1872.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-4">
        <h3>3. User Information</h3>
        <p>
          You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-4">
        <h3>4. Communication</h3>
        <p>
          By registering your phone number and email ID with us, you agree to be contacted by us via phone calls, SMS notifications, or emails regarding your orders or related updates.
        </p>
      </section>

      {/* Back to Home Button */}
      <div className="text-center mt-5">
          <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/")} // Navigates to home
        >
        ← Back to Home
        </button> 
      </div>

      <footer className="text-center mt-5 pt-3 border-top">
        <p>&copy; {new Date().getFullYear()} Cycle.in. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Termsandcondition;

