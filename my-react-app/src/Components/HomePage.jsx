import React, { useState } from "react";
import CartPage from "./CartPage";
import Fragnances from "./Fragnances";
import Singleslide from "./Singleslide";
import Slider from "./Slider";
import Signature from "./Signature";
import Newarrival from "./Newarrival";
import Cycleinhance from "./Cycleinhance";
import Homeessentials from "./Homeessentials";
import Trendingproducts from "./Trendingproducts";
import Threegeneration from "./Threegeneration";
import Shopbrand from "./Shopbrand";
import Wishlist from "./Wishlist";
//  import Shopnow from "./Shopnow";
const HomePage = ({ showCart, setShowCart }) => {
  return (
    <>
      {showCart ? (
        <>
          <CartPage />
          {/* Back button optional */}
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <button
              style={{
                padding: "8px 15px",
                border: "1px solid #444",
                borderRadius: 5,
                background: "#f5f5f5",
                cursor: "pointer",
              }}
              onClick={() => setShowCart(false)}
            >
              Back to Home
            </button>
          </div>
        </>
      ) : (
        <>
          <Fragnances />
          <Singleslide />
          <Slider />
          <Signature />
          <Newarrival />
          <Cycleinhance />
          <Homeessentials />
          <Trendingproducts />
           <Shopbrand />
          <Threegeneration />         
          <Wishlist />
           {/* <Shopnow />  */}
        </>
      )}
    </>
  );
};

export default HomePage;
