import React from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cartItems, addToCart, decreaseQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) return <p>Cart is empty!</p>;

  // Total price calculation
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <h2>My Cart</h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: 10,
            marginBottom: 12,
            display: "flex",
            gap: 15,
            alignItems: "center",
          }}
        >
          {/* Product Image */}
          <img
            src={item.img}
            alt={item.name}
            style={{ width: 80, height: 80, objectFit: "cover" }}
          />

          {/* Product Info */}
          <div style={{ flex: 1 }}>
            <h4>{item.name}</h4>
            <p style={{ fontSize: 13, color: "#555" }}>{item.desc}</p>
            <p>Price: Rs {item.price}</p>

            {/* Quantity Controls */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>

            <p>Total: Rs {item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      {/* --- Cart Summary Section --- */}
      <div
        style={{
          borderTop: "2px solid #ddd",
          paddingTop: 15,
          marginTop: 20,
          textAlign: "right",
        }}
      >
        <h3>Total Price: Rs {totalPrice}</h3>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button
            style={{
              padding: "8px 15px",
              border: "1px solid #444",
              borderRadius: 5,
              background: "#f5f5f5",
              cursor: "pointer",
            }}
            onClick={() => navigate("/cart")}
          >
            View Cart
          </button>

          <button
            style={{
              padding: "8px 15px",
              border: "none",
              borderRadius: 5,
              background: "#6a1b9a",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
