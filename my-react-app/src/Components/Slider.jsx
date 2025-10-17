import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { useCart } from "../Context/CartContext";
import { useNavigate, Link, useOutletContext } from "react-router-dom";
import "./Slider.css";

// ✅ Import your local images
import slider1 from "../assets/slider1.jpeg";
import slider2 from "../assets/slider2.jpeg";
import slider3 from "../assets/slider3.jpeg";
import slide from "../assets/slide.jpg";

// ✅ Supabase connection
import { supabase } from "../ServerApi/Dbconnection.jsx";

const STORAGE_KEY = "products"; // same key used in admin AllProducts

function ProductSlider() {
  const sliderRef = useRef(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { setShowCart, setShowWishlist } = useOutletContext();

  const [products, setProducts] = useState([]);

  // ✅ Fetch from Supabase
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("product_id", { ascending: true });

    if (error) {
      console.error("❌ Fetch error:", error);
    } else {
      console.log("✅ Fetched Products:", data);

      const mapped = data.map((p, idx) => ({
        product_id: p.product_id,
        name: p.name,
        description: p.description || p.name,
        discount_price: Number(p.discount_price) || 0, // ✅ discount_price for cart
        regular_price: p.regular_price || null,
        rating: p.rating || 4,
        quantity: p.quantity || 0,
        category_id: p.category_id || "",
        image_url: p.image_url || null,
        idx, // for fallback images
      }));

      setProducts(mapped);
    }
  }

  // ✅ Local image fallback array
  const fallbackImages = [slide, slider1, slider2, slider3];

  // ✅ Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="dots-with-arrows">
        <button
          className="custom-arrow"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <ul className="custom-slick-dots">{dots.slice(0, 3)}</ul>
        <button
          className="custom-arrow"
          onClick={() => sliderRef.current.slickNext()}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    ),
    customPaging: () => <div className="custom-dot"></div>,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  // ✅ Add to Cart handler
  const handleAddToCart = (product) => {
    const finalPrice = Number(product.discount_price) || 0;

    addToCart({
      id: product.product_id,
      name: product.name,
      desc: product.description,
      price: finalPrice,
      img: product.image_url || fallbackImages[product.idx % 4],
    });

    const savedProducts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const exists = savedProducts.some((p) => p.id === product.product_id);
    if (!exists) {
      const newProduct = {
        id: product.product_id,
        name: product.name,
        price: finalPrice,
        desc: product.description,
        image: product.image_url || fallbackImages[product.idx % 4],
      };
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([...savedProducts, newProduct])
      );
    }

    setShowCart(true);
  };

  return (
    <div className="container product-slider my-5">
      <div className="row mb-4">
        <div className="col-6">
          <h3 className="sansfamily bluetext fw-semibold best_seller_text">
            Best Sellers
          </h3>
        </div>
        <div className="col-6 text-end">
          <h3
            className="sansfamily bluetext fs-6"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/products")}
          >
            View all products
          </h3>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {products.map((product, index) => {
          const mainImg =
            product.image_url || fallbackImages[index % fallbackImages.length];
          const hoverImg = fallbackImages[(index + 1) % fallbackImages.length];

          return (
            <div key={product.product_id} className="px-2 h-100">
              <div className="card product-card shadow-sm">
                <div className="position-relative">
                  <img
                    src={mainImg}
                    className="card-img-top"
                    alt={product.name}
                    onMouseEnter={(e) => (e.currentTarget.src = hoverImg)}
                    onMouseLeave={(e) => (e.currentTarget.src = mainImg)}
                    style={{ transition: "0.3s ease" }}
                  />
                  {product.category_id && (
                    <span className="badge rounded-circle bg-white text-dark discount-badge position-absolute top-0 end-0 d-flex align-items-center justify-content-center">
                      {product.category_id}
                    </span>
                  )}
                </div>

                <div className="card-body d-flex flex-column flex-grow-1">
                  <h6 className="product-title fw-semibold bluetext sansfamily fs-6">
                    <Link
                      to={`/product/${product.product_id}`}
                      className="text-decoration-none text-dark"
                    >
                      {product.description}
                    </Link>
                  </h6>

                  <div className="d-flex align-items-center mb-2 gap-2">
                    <p className="mb-0 fw-bold bluetext fs-6">
                      Rs {Number(product.discount_price).toFixed(2)}
                    </p>
                    {product.regular_price && (
                      <p className="mb-0 text-muted text-decoration-line-through small sansfamily">
                        Rs {Number(product.regular_price).toFixed(2)}
                      </p>
                    )}
                  </div>

                  <div className="mb-2">
                    {"⭐".repeat(product.rating)}
                    {"☆".repeat(5 - product.rating)}
                    <small> ({product.quantity})</small>
                  </div>

                  <div className="d-flex gap-2 mt-auto">
                    <button
                      className="btn btn-warning flex-grow-1 text-danger fw-semibold"
                      onClick={() => handleAddToCart(product)}
                    >
                      ADD
                    </button>

                    <button
                      className="btn border border-warning rounded-2 bg-transparent d-flex align-items-center justify-content-center yellowicon"
                      onClick={() => setShowWishlist(true)}
                    >
                      <i className="bi bi-heart text-danger fs-5"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProductSlider;
