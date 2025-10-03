import React, { useState } from "react";

const CheckoutPage = () => {
  const [shipping, setShipping] = useState({
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "MP",
    country: "IN",
    pinCode: "",
    phone: "",
    saveInfo: false,
  });

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [email, setEmail] = useState("palakpurohit.7072@gmail.com");
  const [paymentMethod, setPaymentMethod] = useState("razorpay");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setShipping({
      ...shipping,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, shipping, paymentMethod, billingSameAsShipping });
    alert("Checkout form submitted! (Check console for data)");
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        {/* Contact */}
        <section>
          <h3>Contact</h3>
          <p>{email}</p>
          <label>
            <input type="checkbox" /> Email me with news and offers
          </label>
        </section>

        <hr />

        {/* Shipping */}
        <section>
          <h3>Delivery</h3>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={shipping.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={shipping.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shipping.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="apartment"
            placeholder="Apartment, suite, etc. (optional)"
            value={shipping.apartment}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shipping.city}
            onChange={handleChange}
          />
          <select name="state" value={shipping.state} onChange={handleChange}>
            <option value="MP">Madhya Pradesh</option>
          </select>
          <input
            type="text"
            name="pinCode"
            placeholder="PIN code"
            value={shipping.pinCode}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={shipping.phone}
            onChange={handleChange}
          />
          <label>
            <input
              type="checkbox"
              name="saveInfo"
              checked={shipping.saveInfo}
              onChange={handleChange}
            />
            Save this information for next time
          </label>
        </section>

        <hr />

        {/* Shipping method */}
        <section>
          <h3>Shipping method</h3>
          <p>Enter your shipping address to view available shipping methods.</p>
        </section>

        <hr />

        {/* Payment */}
        <section>
          <h3>Payment</h3>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="razorpay"
              checked={paymentMethod === "razorpay"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Razorpay Secure (UPI, Cards, Int'l Cards, Wallets)
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery (COD)
          </label>
          <p>
            After clicking “Pay now”, you will be redirected to Razorpay Secure to complete your
            purchase securely.
          </p>
        </section>

        <hr />

        {/* Billing address */}
        <section>
          <h3>Billing address</h3>
          <label>
            <input
              type="radio"
              checked={billingSameAsShipping}
              onChange={() => setBillingSameAsShipping(true)}
            />
            Same as shipping address
          </label>
          <label>
            <input
              type="radio"
              checked={!billingSameAsShipping}
              onChange={() => setBillingSameAsShipping(false)}
            />
            Use a different billing address
          </label>
        </section>

        <hr />

        <section>
          <label>
            <input type="checkbox" /> I hereby give my express consent to provide my personal details.
          </label>
        </section>

        <button type="submit" style={{ marginTop: "20px", padding: "10px 20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
