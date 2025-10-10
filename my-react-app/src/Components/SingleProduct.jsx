import React, { useState } from "react";
import Slider from "react-slick";
import "./SingleProduct.css";

import slider1 from "../assets/slider1.jpeg";
import slider2 from "../assets/slider2.jpeg";
import slider3 from "../assets/slider3.jpeg";
import slide from "../assets/slide.jpg";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom"; // ✅ added useOutletContext
function SingleProduct() {
  const [quantity, setQuantity] = useState(1);
  const [mainImg, setMainImg] = useState(slide);
  const { setShowCart } = useOutletContext(); // ✅ get setShowCart from Layout
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = {
    id: 1,
    title: "Camphor Vaporizer (Premium) with Bhimseni Camphor Tablets 100 gm",
    price: 691,
    oldPrice: 769,
    discount: "-10%",
    rating: 5,
    reviews: 34,
    brand: "Karpure",
    thumbs: [slide, slider1, slider2, slider3, slider1, slider2],
    desc: "Premium camphor vaporizer with Bhimseni camphor tablets for fresh air.",
  };

  // Thumbnail slider (NO ARROWS)
  const thumbSettings = {
    dots: true,
    arrows: false,   // ✅ no arrows
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="container my-5 single-product">
      <div className="row g-4">
        {/* LEFT IMAGE SECTION */}
        <div className="col-lg-6">
          <div className="product-image-box">
            <img src={mainImg} alt={product.title} className="main-image" />
          </div>

          {/* ✅ Thumbnail Slider (unique classes) */}
          <div className="single-thumb-slider mt-3">
            <Slider {...thumbSettings}>
              {product.thumbs.map((thumb, idx) => (
                <div key={idx} className="single-thumb-slide">
                  <img
                    src={thumb}
                    alt="thumb"
                    className="single-thumb-img"
                    onClick={() => setMainImg(thumb)}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* RIGHT DETAILS SECTION */}
        <div className="col-lg-6">
          <h5 className="bluetext fw-semibold">{product.brand}</h5>
          <h3 className="fw-bold bluetext sansfamily">{product.title}</h3>

          <div className="mb-2">
            {"⭐".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
            <span className="ms-2 small">({product.reviews} reviews)</span>
          </div>

          <div className="d-flex align-items-center gap-3 mb-3">
            <h4 className="fw-bold bluetext">Rs. {product.price}.00</h4>
            <span className="text-muted text-decoration-line-through">
              Rs. {product.oldPrice}.00
            </span>
            <span className="text-danger fw-semibold">{product.discount}</span>
          </div>

          {/* Quantity + Buttons */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="quantity-box">
              <button
                className="qty-btn"
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </button>
              <span className="qty-value">{quantity}</span>
              <button
                className="qty-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            {/* Add to cart */}
            <button
              className="btn btn-warning text-danger fw-bold px-4"
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addToCart({
                    id: product.id,
                    name: product.title,
                    desc: product.desc,
                    price: product.price,
                    img: mainImg, // 👈 add main image for CartDrawer
                  });
                }
                setShowCart(true); // 👈 Drawer khulega
              }}
            >
              ADD
            </button>


            {/* Buy Now */}
            <button
              className="btn btn-outline-dark fw-bold px-4"
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addToCart({
                    id: product.id,
                    name: product.title,
                    desc: product.desc,
                    price: product.price,
                    img: mainImg, // 👈 yahan bhi main image pass karo
                  });
                }
                navigate("/checkout"); // drawer kholne ki need nahi, direct checkout
              }}
            >
              Buy Now
            </button>

          </div>

          {/* Offers */}
          <h6 className="fw-semibold">Available Offers:</h6>
          <p className="text-muted">Free shipping on all orders above ₹399</p>

          {/* Trust Badges */}
          <div className="trust-icons d-flex gap-3 mb-4">
            <span>✅ Razorpay Trusted Business</span>
            <span>🔒 Secured Payments</span>
            <span>📞 Prompt Support</span>
          </div>

          {/* Share */}
          <div className="d-flex gap-3 align-items-center">
            <span>Share:</span>
            <i className="bi bi-facebook fs-5"></i>
            <i className="bi bi-whatsapp fs-5"></i>
          </div>

          {/* Tabs */}
          <div className="mt-4">
            <button
              className="btn w-100 text-start border rounded mb-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#desc"
            >
              Product Description
            </button>
            <div className="collapse show" id="desc">
              <div className="card card-body">{product.desc}</div>
            </div>

            <button
              className="btn w-100 text-start border rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#specs"
            >
              Specifications
            </button>
            <div className="collapse" id="specs">
              <div className="card card-body">Details about specifications…</div>
            </div>
            <div className="text-center mt-5">
              <button className="btn btn-outline-secondary" onClick={() => navigate("/")}>
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
