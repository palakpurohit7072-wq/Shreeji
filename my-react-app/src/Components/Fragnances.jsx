import React, { useEffect, useState } from "react";
import "./Fragnance.css";
import circle2 from "../assets/circle2.png";
import circle3 from "../assets/circle3.png";
import circle4 from "../assets/circle4.png";
import circle5 from "../assets/circle5.png";
import circle6 from "../assets/circle6.png";
import circle7 from "../assets/circle7.png";
import circle8 from "../assets/circle8.png";
import { supabase } from "../ServerApi/Dbconnection.jsx";

const Fragrances = () => {
  const [items, setItems] = useState([]);

  // 🔹 Keep imported images in exact order
  const images = [circle2, circle3, circle4, circle5, circle6, circle7, circle8, circle2];

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("name")
        .order("product_id", { ascending: true })
        .limit(8); // 🔹 Limit to exactly 8 items

      if (error) throw error;

      // Map API data to your 8 static images
      const mappedItems = data.map((product, index) => ({
        title: product.name,
        img: images[index], // 1:1 mapping
      }));

      setItems(mappedItems);
      console.log("✅ Products fetched:", mappedItems);
    } catch (err) {
      console.error("❌ Fetch products error:", err.message);
    }
  }

  return (
    <div className="container fragnancepart my-4">
      <h1 className="bluetext mb-4 fragnance_heading fw-semibold sansfamily">
        Gaumay sugandhit cone Dhoop
      </h1>

      <div className="fragrance-row">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="text-center bluetext fragrance-item">
              <div className="round_fragnance_img rounded-circle d-inline-block mb-2">
                <img src={item.img} alt={item.title} className="img-fluid" />
              </div>
              <p className="sansfamily">{item.title}</p>
            </div>
          ))
        ) : (
          <p className="text-center">Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Fragrances;

