import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { cartItems, totalPrice, addToCart, decreaseQty, removeFromCart } = useCart();
  const [useDifferentBilling, setUseDifferentBilling] = useState(false);
  const [email, setEmail] = useState("");
  const [shippingMethod, setShippingMethod] = useState("free");

  const shippingCost = shippingMethod === "free" ? 0 : 50;
  const finalTotal = totalPrice + shippingCost;

  return (
    <div className="checkout-page container my-4">
      <div className="row g-4">
        {/* LEFT SECTION */}
        <div className="checkout-left col-lg-7 col-md-12">
          {/* Contact info */}
          <div className="contact-section mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <p className="mb-0">Contact</p>
              <span className="sign-in">Sign in</span>
            </div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mb-2"
              required
            />
            <label className="checkbox-label d-flex align-items-center">
              <input type="checkbox" /> Email me with news and offers
            </label>
          </div>

          {/* Delivery info */}
          <h2>Delivery</h2>
          <form className="checkout-form mb-4">
            <div className="row g-2 mb-2">
              <div className="col-sm-6">
                <input type="text" placeholder="First name" className="form-control" required />
              </div>
              <div className="col-sm-6">
                <input type="text" placeholder="Last name" className="form-control" required />
              </div>
            </div>
            <input type="text" placeholder="Address" className="form-control mb-2" required />
            <input type="text" placeholder="Apartment, suite, etc. (optional)" className="form-control mb-2" />
            <input type="text" placeholder="City" className="form-control mb-2" required />
            <div className="row g-2 mb-2">
              <div className="col-md-4 col-6">
                <select className="form-select">
                  <option>India</option>
                </select>
              </div>
              <div className="col-md-4 col-6">
                <select className="form-select">
                  <option>Madhya Pradesh</option>
                </select>
              </div>
              <div className="col-md-4 col-12">
                <input type="text" placeholder="PIN code" className="form-control" required />
              </div>
            </div>
            <input type="text" placeholder="Phone" className="form-control mb-2" required />
            <label className="checkbox-label d-flex align-items-center">
              <input type="checkbox" /> Save this information for next time
            </label>
          </form>

          {/* Shipping method */}
          <h3>Shipping method</h3>
          <div className="shipping-methods mb-3">
            <label className={`shipping-option d-block mb-1 ${shippingMethod === "free" ? "active" : ""}`}>
              <input
                type="radio"
                name="shipping"
                value="free"
                checked={shippingMethod === "free"}
                onChange={() => setShippingMethod("free")}
              />{" "}
              Free Shipping (₹0)
            </label>
            <label className={`shipping-option d-block ${shippingMethod === "standard" ? "active" : ""}`}>
              <input
                type="radio"
                name="shipping"
                value="standard"
                checked={shippingMethod === "standard"}
                onChange={() => setShippingMethod("standard")}
              />{" "}
              Standard Shipping (₹50)
            </label>
          </div>

          {/* Payment method */}
          <h3>Payment</h3>
          <div className="payment-section mb-3">
            <p>Razorpay Secure (UPI, Cards, Int'l Cards, Wallets)</p>
            <span>upivisamaster +13</span>
            <p>Additional payment methods</p>
            <p>
              After clicking “Pay now”, you will be redirected to Razorpay Secure
              (UPI, Cards, Int'l Cards, Wallets) to complete your purchase
              securely.
            </p>
          </div>

          {/* Consent */}
          <label className="consent-label d-block mb-3">
            <input type="checkbox" /> I hereby give my express consent to provide
            my personal details as above. I have read and agree to the{" "}
            <a href="#">Privacy Policy</a> & <a href="#">Terms</a>.
          </label>

          {/* Billing address */}
          <h3>Billing address</h3>
          <label className="checkbox-label d-block mb-1">
            <input
              type="radio"
              name="billing"
              defaultChecked
              onChange={() => setUseDifferentBilling(false)}
            />{" "}
            Same as shipping address
          </label>
          <label className="checkbox-label d-block mb-3">
            <input
              type="radio"
              name="billing"
              onChange={() => setUseDifferentBilling(true)}
            />{" "}
            Use a different billing address
          </label>

          {useDifferentBilling && (
            <form className="checkout-form billing-form mb-3">
              <div className="row g-2 mb-2">
                <div className="col-sm-6">
                  <input type="text" placeholder="First name" className="form-control" required />
                </div>
                <div className="col-sm-6">
                  <input type="text" placeholder="Last name" className="form-control" required />
                </div>
              </div>
              <input type="text" placeholder="Address" className="form-control mb-2" required />
              <input type="text" placeholder="Apartment, suite, etc. (optional)" className="form-control mb-2" />
              <input type="text" placeholder="City" className="form-control mb-2" required />
              <div className="row g-2 mb-2">
                <div className="col-md-4 col-6">
                  <select className="form-select">
                    <option>India</option>
                  </select>
                </div>
                <div className="col-md-4 col-6">
                  <select className="form-select">
                    <option>Madhya Pradesh</option>
                  </select>
                </div>
                <div className="col-md-4 col-12">
                  <input type="text" placeholder="PIN code" className="form-control" required />
                </div>
              </div>
              <input type="text" placeholder="Phone" className="form-control mb-2" required />
            </form>
          )}

          <button className="pay-btn btn btn-primary w-100 mb-2">
            Pay now ₹{finalTotal.toFixed(2)}
          </button>

          <a href="/" className="back-home-btn btn btn-outline-secondary w-100">
            ← Back to Home
          </a>
        </div>

        {/* RIGHT SECTION */}
        <div className="checkout-right col-lg-5 col-md-12">
          <h3 className="summary-title mb-3">Your Order</h3>

          <div className="items-list mb-3">
            {cartItems.length > 0 ? (
              cartItems.map((item, idx) => (
                <div className="item-card d-flex align-items-center p-2 mb-2" key={idx}>
                  <div className="item-image-wrapper position-relative me-2">
                    <img src={item.img || item.image} alt={item.name} className="item-image" />
                    <div className="qty-badge position-absolute">{item.quantity}</div>
                  </div>
                  <div className="item-details flex-grow-1">
                    <div className="item-title">{item.name}</div>
                    <div className="item-price">₹{item.price}</div>
                  </div>
                  <div className="item-actions d-flex align-items-center gap-2">
                    <button onClick={() => decreaseQty(item.id)} className="btn btn-light btn-sm">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)} className="btn btn-light btn-sm">+</button>
                    <button onClick={() => removeFromCart(item.id)} className="remove-btn btn btn-link p-0">×</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="empty-cart text-center">No items in cart</p>
            )}
          </div>

          <div className="discount-section d-flex gap-2 mb-3">
            <input type="text" placeholder="Discount code or gift card" className="form-control" />
            <button className="apply-btn btn btn-light">Apply</button>
          </div>

          <div className="summary-footer border-top pt-2">
            <div className="d-flex justify-content-between mb-1">
              <span>Subtotal</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-1">
              <span>Shipping</span>
              <span>₹{shippingCost.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between fw-bold fs-5 mt-1">
              <span>Total</span>
              <span>₹{finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

