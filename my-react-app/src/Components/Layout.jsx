import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dropdownmenu from "./Dropdownmenu";
import { Outlet } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import CartDrawer from "./CartDrawer"; 
import ScrollToTop from "./ScrollToTop"; // ✅ Import ScrollToTop component

const Layout = () => {
  const [showCart, setShowCart] = useState(false);
  const { totalItems, cartItems } = useCart();

  // 💰 Calculate total price for all items
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* ✅ Automatically scroll to top on every route change */}
      <ScrollToTop />
      {/* 🔹 Navbar with Cart Toggle */}
      <Navbar
        setShowCart={setShowCart}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />  
      <Dropdownmenu />
      <main>
        <Outlet context={{ setShowCart }} />
      </main>    
      <CartDrawer showCart={showCart} setShowCart={setShowCart} />   
      <Footer />
    </>
  );
};

export default Layout;
