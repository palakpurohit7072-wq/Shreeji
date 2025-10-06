import React from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CartDrawer.css";

export default function CartDrawer({ showCart, setShowCart }) {
  const { cartItems, addToCart, decreaseQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${showCart ? "show" : ""}`}
        onClick={() => setShowCart(false)}
      ></div>

      {/* Drawer */}
      <div className={`cart-drawer ${showCart ? "open" : ""}`}>
        {/* Header */}
        <div className="cart-header">
          <h5 className="mb-0">Shopping Cart ({cartItems.length})</h5>
          <button className="close-btn" onClick={() => setShowCart(false)}>
            ✕
          </button>
        </div>

        {/* Banner */}
        {cartItems.length > 0 && (
          <div className="cart-banner">
            You are eligible for free shipping!
          </div>
        )}

        {/* Body */}
        {cartItems.length === 0 ? (
          <p className="empty-cart">🛒 Your cart is empty!</p>
        ) : (
          <div className="cart-body pt-5">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: 70, height: 70, objectFit: "cover" }}
                />
                <div className="cart-item-details">
                  <h6>{item.name}</h6>
                  {item.desc && <small>{item.desc}</small>}
                  <p className="price">Rs {item.price}</p>
                  <div className="qty-row">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="total-row">
              <span>Subtotal</span>
              <span>Rs {totalPrice}</span>
            </div>
            <div className="cart-footer-buttons">
              <button
                className="viewcart-btn"
                onClick={() => {
                  setShowCart(false);
                  navigate("/cart");
                }}
              >
                View Cart
              </button>
              <button
                className="checkout-btn"
                onClick={() => {
                  setShowCart(false);
                  navigate("/checkout");
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}


