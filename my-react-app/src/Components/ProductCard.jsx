import React from "react";
import { useCart } from "../Context/CartContext";

export default function ProductCard({ product, toggleCart }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title || product.name,
      desc: product.desc || product.title || product.name,
      price: product.price,
      img: product.img,
    });

    if (toggleCart) toggleCart(true);
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 10,
        width: 150,
        textAlign: "center",
      }}
    >
      <img
        src={product.img}
        alt={product.name || product.title}
        style={{ width: "100%", height: 100, objectFit: "cover" }}
      />
      <h5>{product.title || product.name}</h5>
      <p style={{ fontSize: 12, color: "#555" }}>
        {product.desc || product.title || product.name}
      </p>
      <p>Rs {product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
