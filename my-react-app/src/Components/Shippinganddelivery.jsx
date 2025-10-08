import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate


const Shippinganddelivery = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Shipping & Delivery</h1>

      {/* Delivery Time Section */}
      <section className="mb-5">
        <h4>Delivery Time</h4>
        <p>
          We process all deliveries through reputed couriers. Orders within India are shipped within 2 working days. Estimated delivery time is 2-7 working days, depending on the destination.
        </p>
        <p>
          For areas without courier service, we use India Post's Book Post / Speed Post / Parcel service, which may take 1-2 weeks.
        </p>
        <p>
          Custom Incense products and Akhand Jyoti items are made-to-order and require 7-10 days for shipping.
        </p>
      </section>

      {/* Shipping Methods Section */}
      <section className="mb-5">
        <h4>Shipping Methods</h4>
        <p>
          We use reputed courier services to deliver your order. In case no courier is available for your area, the order will be shipped via India Post's Book Post / Speed Post / Parcel service.
        </p>
      </section>

      {/* Incorrect Shipping Information Section */}
      <section className="mb-5">
        <h4>Incorrect Shipping Information</h4>
        <p>
          Please provide accurate shipping details during checkout. Once shipped, we cannot modify the shipping address.
          In case of incorrect information, the product will be returned to us, and a coupon code or store credit may be issued at our discretion.
        </p>
      </section>

      {/* Shipping Charges Section */}
      <section className="mb-5">
        <h4>Shipping Charges</h4>
        <p>
          Free shipping is available on all orders above ₹399. For orders below ₹399, standard shipping charges will apply based on the location and product weight.
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

      {/* Footer */}
      <footer className="text-center mt-5 pt-3 border-top">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Shippinganddelivery;



