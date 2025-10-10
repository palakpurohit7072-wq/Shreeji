import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dropdownmenu from "./Dropdownmenu";
import { Outlet } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import CartDrawer from "./CartDrawer";
import Wishlist from "./Wishlist";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  const {  totalItems, totalPrice } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  return (
    <>
      <ScrollToTop />
      {/* Navbar with both props */}
      <Navbar
        setShowCart={setShowCart}
        setShowWishlist={setShowWishlist}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />

      <Dropdownmenu />

      {/* Outlet for nested routes */}
      <main>
        <Outlet context={{ setShowCart, setShowWishlist }} />
      </main>

      {/* Popups */}
      {showCart && <CartDrawer showCart={showCart} setShowCart={setShowCart} />}
      {showWishlist && (
        <Wishlist showWishlist={showWishlist} setShowWishlist={setShowWishlist} />
      )}

      <Footer />
    </>
  );
};

export default Layout;
