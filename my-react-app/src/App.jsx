import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "./Components/HomePage";
import AccountPage from "./Components/AccountPage";
import ProductList from "./Pages/ProductList";
import CartFullPage from "./Components/CartFullPage";       // new
 import CheckoutPage from "./Components/CheckoutPage";      


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<AccountPage />} />
        <Route path="products" element={<ProductList />} />
        <Route path="cart" element={<CartFullPage />} />       {/* new */}
        <Route path="checkout" element={<CheckoutPage />} />  
      
      </Route>
    </Routes>
  );
};

export default App;


                                                                                                                                                                                                                