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
        {/* 🆕 Single Product Dynamic Route */}
        <Route path="product/:id" element={<SingleProduct />} />
      </Route>
    </Routes>
  );
};

export default App;




                                                                                                                                                                                                                