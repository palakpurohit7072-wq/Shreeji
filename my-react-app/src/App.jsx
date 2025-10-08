import { Routes, Route } from "react-router-dom";

// 🔹 Component imports
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
Shippinganddelivery
const App = () => {
  return (
    <Routes>
      {/* Layout wraps Navbar, Footer, etc. */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<AccountPage />} />
        <Route path="cart" element={<CartFullPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="shopnow" element={<Shopnow />} />
        <Route path="about" element={<Aboutus />} />
        <Route path="contact" element={<Contactus />} />
        <Route path="track" element={<Trackorder />} />
        <Route path="privacy" element={<Privacypolicy />} />
        <Route path="termsandcondition" element={<Termsandcondition />} />
        <Route path="shippingdelivery" element={< Shippinganddelivery />} />
        <Route path="returnandrfund" element={< Returnsandrefund />} />
        <Route path="forgetpassword" element={< Forgetpassword />} />
         <Route path="newuser" element={< Newuser />} />
        {/* 🆕 Single Product Dynamic Route */}
        <Route path="product/:id" element={<SingleProduct />} />
      </Route>
    </Routes>
  );
};

export default App;




