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

  const freeShippingLimit = 500; // Example limit

  return (
    <div className="container py-4">
      {/* Heading with Home button */}
      <h2 className="mb-4 d-flex justify-content-between align-items-center">
        Shopping Cart
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </h2>

      <div className="row">
        {/* Left Section: Cart Items */}
        <div className="col-lg-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="d-flex gap-3 align-items-center border-bottom pb-3 mb-3"
            >
              <img
                src={item.img}
                alt={item.name}
                style={{ width: 100, height: 100, objectFit: "cover" }}
              />
              <div className="flex-grow-1">
                <h5>{item.name}</h5>
                <p className="text-muted small">{item.desc}</p>
                <p className="mb-1">Price: ₹{item.price}</p>

                {/* Quantity Control */}
                <div className="d-flex align-items-center mb-2">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>

                <p className="fw-semibold mb-1">
                  Total: ₹{item.price * item.quantity}
                </p>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Order Summary */}
        <div className="col-lg-4">
          <div className="border rounded p-3 shadow-sm">
            <h5>Order Summary</h5>
            <p className="fs-5 fw-bold">Rs. {totalPrice.toFixed(2)}</p>

            <div className="alert alert-light small">
              Free Shipping On All Orders Above ₹{freeShippingLimit}
            </div>

            <div className="mb-3">
              <label className="form-label small">GST number (Optional)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter GST Number"
              />
            </div>

            <p className="small text-muted mb-3">
              Tax included. Shipping calculated at checkout.
            </p>

            {/* Checkout Button */}
            <button
              className="btn btn-outline-primary w-100 mb-2"
              onClick={() => navigate("/checkout")}
            >
              Check Out
            </button>

            {/* Continue Shopping Button */}
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

