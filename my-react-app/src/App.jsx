import React from "react";
import { Routes, Route } from "react-router-dom";

// 🟢 User site imports
import Layout from "./Components/Layout";
import HomePage from "./Components/HomePage";
import AccountPage from "./Components/AccountPage";
import CartFullPage from "./Components/CartFullPage";
import CheckoutPage from "./Components/CheckoutPage";
import Wishlist from "./Components/Wishlist";
import Shopnow from "./Components/Shopnow";
import SingleProduct from "./Components/SingleProduct";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import Trackorder from "./Components/Trackorder";
import Privacypolicy from "./Components/Privacypolicy";
import Termsandcondition from "./Components/Termsandcondition";
import Shippinganddelivery from "./Components/Shippinganddelivery";
import Returnsandrefund from "./Components/Returnsandrefund";
import Forgetpassword from "./Components/Forgetpassword";
import Newuser from "./Components/Newuser";

// 🟢 Admin imports
import AdminLayout from "./Adminpanel/AdminLayout";
import Dashboard from "./Adminpanel/Pages/Dashboard";
import OrdersList from "./Adminpanel/Pages/OrdersList";
import AllProducts from "./Adminpanel/Pages/AllProducts";

// import Changepassword from "./Adminpanel/pages/Changepassword";
const App = () => {
  return (
    <Routes>
      {/* 🏠 User side */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<AccountPage />} />
        <Route path="cart" element={<CartFullPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="shopnow" element={<Shopnow />} />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route path="about" element={<Aboutus />} />
        <Route path="contact" element={<Contactus />} />
        <Route path="track" element={<Trackorder />} />
        <Route path="privacy" element={<Privacypolicy />} />
        <Route path="termsandcondition" element={<Termsandcondition />} />
        <Route path="shippingdelivery" element={<Shippinganddelivery />} />
        <Route path="returnandrefund" element={<Returnsandrefund />} />
        <Route path="forgetpassword" element={<Forgetpassword />} />
        <Route path="newuser" element={<Newuser />} />
      </Route>

      {/* 🧭 Admin panel routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<AllProducts />} />
        <Route path="orders" element={<OrdersList />} />
        {/* <Route path="change-password" element={<Changepassword />} /> */}
      </Route>
    </Routes>
  );
};

export default App;

