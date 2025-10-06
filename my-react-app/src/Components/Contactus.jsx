import React, { useState } from "react";
import "./Contactus.css";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h2>Contact</h2>
        </div>

        <div className="contact-content">
          {/* Left Form Section */}
          <div className="contact-form-section">
            <p className="form-title">
              Have questions? Get in touch by filling out the form below.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>

          {/* Right Info Section */}
          <div className="contact-info-section">
            <h4>Distributor Ship Enquiries</h4>
            <p>
              Looking to become a distributor? <br />
              <a href="#">Click Here</a> to fill out our distributor enquiry form
            </p>
            <h4>Cycle.in</h4>
            <p>
              N. Ranga Rao & Sons Private Limited
              <br />
              <br />
              <strong>Registered Office:</strong>
              <br />
              #1553, Vanivilasa Road, Mysuru, Karnataka 570004
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

