import React from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CartFullPage.css";

export default function CartFullPage() {
  const { cartItems, addToCart, decreaseQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0)
    return (
      <div className="container py-5 text-center">
        <h3>Your cart is empty!</h3>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </div>
    );

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const freeShippingLimit = 500;

  return (
    <div className="container py-4 cart-page">
      {/* Heading */}
      <h2 className="mb-4 bluetext sansfamily cartfull_heading">
        Shopping Cart
      </h2>

      <div className="row">
        {/* LEFT SIDE: Product Table */}
        <div className="col-lg-8 cart-left">
          <div className="cart-header bluetext sansfamily font_weight">
            <div>Product</div>
            <div className="text-center">Quantity</div>
            <div className="text-end">Total</div>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="cart-row">
              {/* Product Column */}
              <div className="col-product">
                <img src={item.img} alt={item.name} />
                <div>
                  <p className="item-price sansfamily font_size bluetext mb-1">
                    <span >Rs. {item.price.toFixed(2)}</span>
                  </p>
                  {/* { <p className="item-name">{item.name}</p> } */}
                  {item.desc && (
                    <p className="sansfamily font_size bluetext mb-1">{item.desc}</p>
                  )}

                </div>
              </div>

              {/* Quantity Column + Remove Button (side by side like screenshot) */}
              <div className="col-qty">
                <div className="qty-controls">
                  <button
                    className="qty-btn"
                    onClick={() => decreaseQty(item.id)}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 5V7H0V5H12Z" fill="#2c2484" />
                    </svg>

                  </button>
                  <span>{item.quantity}</span>
                  <button className="qty-btn" onClick={() => addToCart(item)}>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 0H7V12H5V0Z" fill="#2c2484" />
                      <path d="M12 5V7H0V5H12Z" fill="#2c2484" />
                    </svg>

                  </button>
                </div>
                <button
                  className="remove-link"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>

              {/* Total Column */}
              <div className="col-total text-end bluetext sansfamily">
                Rs. {(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE: Order Summary */}
        <div className="col-lg-4 cart-right">

          <div className="free-shipping-alert sansfamily font_size">
            You are eligible for free shipping!
          </div>


          <div className="summary-box shadow-sm">
            <h5 className="bluetext sansfamily">Order Summary</h5>
            <p className="total-amount bluetext sansfamily ">Rs. {totalPrice.toFixed(2)}</p>

            <div className="shipping-box bluetext sansfamily">
              Free Shipping On All Orders Above ₹{freeShippingLimit}
            </div>

            <div className="gst-box">
              <label className="form-label small bluetext sansfamily">GST number (Optional)</label>
              <input className="bluetext sansfamily" type="text" placeholder="Enter GST Number" />
            </div>

            <p className="note bluetext sansfamily">
              Tax included. Shipping calculated at checkout.
            </p>

            <button
              className="btn btn-outline-primary w-100 mb-2 cartcheckoutbtn"
              onClick={() => navigate("/checkout")}
            >
              Check Out
            </button>

            <button
              className="btn btn-secondary w-100"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
