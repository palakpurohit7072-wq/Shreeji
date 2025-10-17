import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CartDrawer from "../Components/CartDrawer";
import Wishlist from "../Components/Wishlist";

const AdminLayout = () => {
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Header />
        <div className="admin-content">
          {/* Provide context for ADD and Heart buttons */}
          <Outlet context={{ setShowCart, setShowWishlist }} />
          <Footer />

          {/* Real CartDrawer & Wishlist */}
          {showCart && <CartDrawer showCart={showCart} setShowCart={setShowCart} />}
          {showWishlist && (
            <Wishlist
              showWishlist={showWishlist}
              setShowWishlist={setShowWishlist}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
