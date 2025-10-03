// src/Components/Shopnow.jsx
import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import "./shopnow.css";

const productsData = [
  { id: 1, title: "Luxury Showerhead", price: 2999, image: "https://via.placeholder.com/200x200?text=Showerhead" },
  { id: 2, title: "Modern Sink", price: 4999, image: "https://via.placeholder.com/200x200?text=Sink" },
  { id: 3, title: "Bathroom Cabinet", price: 7999, image: "https://via.placeholder.com/200x200?text=Cabinet" },
  { id: 4, title: "Toilet Set", price: 6999, image: "https://via.placeholder.com/200x200?text=Toilet" },
];

const Shopnow = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState(productsData);

  return (
    <div className="shopnow-container">
      {/* Filters Row */}
      <div className="filters-row">
        <div>
          <h4>Category</h4>
          <div className="filter-options">
            <label><input type="checkbox" /> Shower</label>
            <label><input type="checkbox" /> Sink</label>
            <label><input type="checkbox" /> Toilet</label>
          </div>
        </div>

        <div>
          <h4>Price</h4>
          <div className="filter-options">
            <label><input type="checkbox" /> ₹0 - ₹5000</label>
            <label><input type="checkbox" /> ₹5000 - ₹10000</label>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopnow;
