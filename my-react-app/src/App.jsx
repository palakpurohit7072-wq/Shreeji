import React from "react";
import { Routes, Route } from "react-router-dom";
// 🟢 api site imports
import SupabaseTest from "./ServerApi/Api";
import SupabaseTestCategory from "./ServerApi/Category";
import SupabaseTestCoupons from "./ServerApi/Coupons"
import SupabaseTestOrderproducts from "./ServerApi/Orderproducts"
import SupabaseTestProductstatus from "./ServerApi/Productstatus"
import SupabaseTestProducttags from "./ServerApi/Producttags"
import SupabaseTestRoles from "./ServerApi/Roles"
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
// import Changepassword from "./Adminpanel/Pages/Changepassword";
import ProductDetailsAdd from "./Adminpanel/Pages/ProductDetailsAdd";
import ProductDetailsEdit from "./Adminpanel/Pages/ProductDetailsEdit";
import OrderDetails from "./Adminpanel/Pages/OrderDetails";

const App = () => {
  return (
    <Routes>
      {/* 🧪 Supabase Test API route */}
      <Route path="/test-api" element={<SupabaseTest />} />
      <Route path="/test-category" element={<SupabaseTestCategory />} />
      <Route path="/test-coupons" element={<SupabaseTestCoupons />} />
      <Route path="/test-orderproducts" element={<SupabaseTestOrderproducts />} />
      <Route path="/test-productstatus" element={<SupabaseTestProductstatus />} />
      <Route path="/test-producttags" element={<SupabaseTestProducttags />} />
<Route path="/test-roles" element={<SupabaseTestRoles />} />
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
        <Route path="orders/:orderId" element={<OrderDetails />} />
        {/* <Route path="change-password" element={<Changepassword />} /> */}
        <Route path="productdetailsadd" element={<ProductDetailsAdd />} />
        <Route path="productdetailsedit" element={<ProductDetailsEdit />} />
      </Route>
    </Routes>
  );
};

export default App;

