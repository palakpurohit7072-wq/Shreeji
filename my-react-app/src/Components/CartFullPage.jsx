import React from "react";
import { useCart } from "../Context/CartContext";

export default function CartFullPage() {
  const { cartItems, addToCart, decreaseQty, removeFromCart } = useCart();

  if (cartItems.length === 0) return <p>Your cart is empty!</p>;

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ maxWidth: 1000, margin: "20px auto" }}>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} style={{ display: "flex", gap: 20, marginBottom: 15 }}>
          <img src={item.img} alt={item.name} style={{ width: 100, height: 100 }} />
          <div style={{ flex: 1 }}>
            <h4>{item.name}</h4>
            <p>{item.desc}</p>
            <p>Price: Rs {item.price}</p>
            <div>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span style={{ margin: "0 10px" }}>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
            <p>Total: Rs {item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <h3>Total Price: Rs {totalPrice}</h3>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => navigate("/checkout")}>Checkout</button>
      </div>
    </div>
  );
}
