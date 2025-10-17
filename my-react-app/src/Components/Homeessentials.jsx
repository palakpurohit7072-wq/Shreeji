import React, { useEffect, useState } from "react";
import "./Homeessential.css";
import { useNavigate } from "react-router-dom";
import slider1 from "../assets/slider1.jpeg";
import slider2 from "../assets/slider2.jpeg";
import slider3 from "../assets/slider3.jpeg";
import slide from "../assets/slide.jpg";

import { supabase } from "../ServerApi/Dbconnection.jsx";

const imgMap = [slider1, slider2, slider3, slide]; // Static images map

const HomeEssentials = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  // ✅ Fetch products from API on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("product_id", { ascending: true });

    if (error) {
      console.error(" Fetch error:", error);
    } else {
      // Map API data to required structure
      const mappedProducts = (data || []).map((item, index) => ({
        title: item.name || "No Title",
        desc: item.description || "No Description",
        img: imgMap[index % imgMap.length], // Static images
      }));
      setProducts(mappedProducts);
    }
  }

  return (
    <div className="container-fluid main_homeessential py-3">
      <div className="container Homeessential_part my-5">
        <h2 className="mb-4 homeessential_text fw-semibold bluetext sansfamily">
          Home Essentials
        </h2>
        <div className="row g-4">
          {products.slice(0, 4).map((product, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.img}
                  className="card-img-top p-3"
                  alt={product.title}
                />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-titles fw-semibold bluetext sansfamily">
                    {product.title}
                  </h3>
                  <p className="card-text bluetext sansfamily">{product.desc}</p>
                  <div className="mt-auto d-flex justify-content-center">
                    <button
                      className="px-4 shop_btn fs-6 btn btn-warning text-danger fw-semibold"
                      onClick={() => navigate("/shopnow")}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeEssentials;
