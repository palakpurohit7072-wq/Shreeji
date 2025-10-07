import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dropdownmenu from "./Dropdownmenu";
import { Outlet } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import CartDrawer from "./CartDrawer"; // 👈 CartDrawer import

const Layout = () => {
  const [showCart, setShowCart] = useState(false);
  const { totalItems, cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Navbar with cart toggle */}
      <Navbar
        setShowCart={setShowCart}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />
      <Dropdownmenu />

      {/* ✅ Pass setShowCart to all nested routes (important line) */}
      <main>
        <Outlet context={{ setShowCart }} />  {/* 👈 Add this line */}
      </main>

      {/* Global Cart Drawer */}
      <CartDrawer showCart={showCart} setShowCart={setShowCart} />
      <Footer />
    </>
  );
};

export default Layout;
