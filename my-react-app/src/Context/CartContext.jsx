// Context/CartContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Create CartContext
const CartContext = createContext();

// 2️⃣ CartProvider component
export const CartProvider = ({ children }) => {
  // ✅ Load cart from localStorage on first render
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // --- Cart Operations ---

  // 3️⃣ Add item to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        // If item exists, increase quantity
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item is new, add with quantity 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // 4️⃣ Decrease quantity of an item
  const decreaseQty = (id) => {
    setCartItems((prev) => {
      return prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove if quantity is 0
    });
  };

  // 5️⃣ Remove item completely
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // --- Derived Values ---

  // 6️⃣ Total number of items
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // 7️⃣ Total price calculation (ensure number)
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  // ✅ Provide values to all children
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQty,
        removeFromCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 8️⃣ Custom hook to use cart easily
export const useCart = () => useContext(CartContext);
