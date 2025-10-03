import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DropdownMenu from "./DropdownMenu";
import HomePage from "./HomePage";
import CartPage from "./CartPage";
import { Outlet, useLocation } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Layout = () => {
  const [showCart, setShowCart] = useState(false);
  const { totalItems, cartItems } = useCart();
  const location = useLocation();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar
        setShowCart={setShowCart}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />
      <DropdownMenu />
      <main>
        {/* Agar user home page par hai aur showCart true hai */}
        {location.pathname === "/" && showCart ? (
          <CartPage setShowCart={setShowCart} />
        ) : (
          <Outlet /> 
        )}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
