 import React, { useState } from "react";
 import "./Shopnow.css";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import product1 from "../assets/slider1.jpeg";
import product2 from "../assets/slider2.jpeg";
import product3 from "../assets/slider3.jpeg";
import product4 from "../assets/slide.jpg";
 import arrowImg from "../assets/download.png"; // ✅ import your custom arrow image

const Shopnow = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [priceRange, setPriceRange] = useState([0, 400]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sortOption, setSortOption] = useState("");

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  const products = [
    { id: 1, title: "Stop-O Power Bag - Lavender Camphor", price: 62, oldPrice: 65, discount: "-5%", rating: 4, reviews: 2, img: product1, hoverImg: product2 },
    { id: 2, title: "Stop-O Power Bag - Amber Rose Air Freshener", price: 65, oldPrice: null, discount: "", rating: 5, reviews: 45, img: product2, hoverImg: product3 },
    { id: 3, title: "Stop-O 4 in 1 Scented Bricks Pack", price: 172, oldPrice: 240, discount: "", rating: 4, reviews: 22, img: product3, hoverImg: product4 },
    { id: 4, title: "Stop-O Power Bag - Tangerine Air Freshener", price: 65, oldPrice: null, discount: "", rating: 4, reviews: 1, img: product4, hoverImg: product1 },
    { id: 5, title: "Stop-O Power Bag - Musk Bliss", price: 70, oldPrice: 75, discount: "-6%", rating: 5, reviews: 8, img: product1, hoverImg: product2 },
    { id: 6, title: "Stop-O Power Bag - Sandalwood Fresh", price: 68, oldPrice: null, discount: "", rating: 4, reviews: 12, img: product2, hoverImg: product3 },
    { id: 7, title: "Stop-O Power Bag - Aqua Wave", price: 72, oldPrice: 80, discount: "-10%", rating: 5, reviews: 10, img: product3, hoverImg: product4 },
    { id: 8, title: "Stop-O Power Bag - Citrus Zest", price: 66, oldPrice: null, discount: "", rating: 4, reviews: 5, img: product4, hoverImg: product1 },
    { id: 9, title: "Stop-O 2 in 1 Combo Pack", price: 120, oldPrice: 140, discount: "-14%", rating: 5, reviews: 7, img: product1, hoverImg: product2 },
    { id: 10, title: "Stop-O Room Freshener - Floral Delight", price: 99, oldPrice: null, discount: "", rating: 4, reviews: 11, img: product2, hoverImg: product3 },
    { id: 11, title: "Stop-O Power Bag - Jasmine Mist", price: 75, oldPrice: 85, discount: "-12%", rating: 5, reviews: 6, img: product3, hoverImg: product4 },
    { id: 12, title: "Stop-O Power Bag - Ocean Breeze", price: 90, oldPrice: null, discount: "", rating: 4, reviews: 9, img: product4, hoverImg: product1 },
    { id: 13, title: "Stop-O Room Freshener - Vanilla Bliss", price: 110, oldPrice: 130, discount: "-15%", rating: 5, reviews: 4, img: product1, hoverImg: product2 },
    { id: 14, title: "Stop-O Combo Pack - Lavender & Rose", price: 180, oldPrice: 210, discount: "-14%", rating: 4, reviews: 15, img: product2, hoverImg: product3 },
    { id: 15, title: "Stop-O Power Bag - Green Apple Fresh", price: 78, oldPrice: 90, discount: "-13%", rating: 5, reviews: 13, img: product3, hoverImg: product4 },
  ];

  const filteredProducts = products.filter(
    (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "lowToHigh") return a.price - b.price;
    if (sortOption === "highToLow") return b.price - a.price;
    if (sortOption === "aToZ") return a.title.localeCompare(b.title);
    if (sortOption === "zToA") return b.title.localeCompare(a.title);
    return 0;
  });

  const clearAllFilters = () => {
    setPriceRange([0, 400]);
    setSortOption("");
    setOpenDropdown(null);
  };

  return (
    <div className="container my-5 shopnow-container">
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <button className="text-white backbtn fw-semibold bg-blue" onClick={() => navigate("/")}>
          Back to Home
        </button>
        <button className="text-white backbtn fw-semibold bg-blue" onClick={clearAllFilters}>
          Clear All
        </button>
      </div>

      <div className="mb-4">
        <h2 className="bluetext font_weight sansfamily heading_shop_page">Bathroom Freshner</h2>
      </div>

      <p className="sansfamily bluetext pt-4 font_size filter_title">Filter:</p>

      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div className="d-flex flex-wrap gap-2 position-relative">
          {/* PRICE DROPDOWN */}
          <div className="dropdown">
            <button className="btn btn-light border sansfamily font_size bluetext dropdown-toggle arrow-img" onClick={() => toggleDropdown("price")}>
              Price
            </button>
            {openDropdown === "price" && (
              <div className="dropdown-menu show p-3 shadow-sm" style={{ minWidth: "260px" }}>
                <h6 className="fw-semibold mb-2">Filter by Price</h6>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <input type="number" className="form-control" style={{ width: "80px" }} min="0" max="400" value={priceRange[0]} onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])} />
                  <span>to</span>
                  <input type="number" className="form-control" style={{ width: "80px" }} min="0" max="400" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], +e.target.value])} />
                </div>
                <input type="range" className="form-range" min="0" max="400" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], +e.target.value])} />
                <p className="text-muted small mb-2">Rs. {priceRange[0]} - Rs. {priceRange[1]}</p>
                <button className="btn btn-sm btn-outline-secondary w-100" onClick={() => { setPriceRange([0, 400]); setOpenDropdown(null); }}>
                  Reset
                </button>
              </div>
            )}
          </div>

          {/* BRAND DROPDOWN */}
          <div className="dropdown">
            <button className="btn btn-light border sansfamily font_size bluetext dropdown-toggle arrow-img" onClick={() => toggleDropdown("brand")}>
              Brand
            </button>
            {openDropdown === "brand" && (
              <div className="dropdown-menu show p-3 shadow-sm" style={{ minWidth: "200px" }}>
                <h6 className="fw-semibold mb-2">Select Brand</h6>
                <ul className="list-unstyled mb-0">
                  <li><button className="dropdown-item">Stop-O</button></li>
                  <li><button className="dropdown-item">FreshAir</button></li>
                  <li><button className="dropdown-item">AromaPlus</button></li>
                </ul>
              </div>
            )}
          </div>

          {/* PRODUCT TYPE DROPDOWN */}
          <div className="dropdown">
            <button className="btn btn-light border sansfamily font_size bluetext dropdown-toggle arrow-img" onClick={() => toggleDropdown("type")}>
              Product Type
            </button>
            {openDropdown === "type" && (
              <div className="dropdown-menu show p-3 shadow-sm" style={{ minWidth: "200px" }}>
                <h6 className="fw-semibold mb-2">Select Product Type</h6>
                <ul className="list-unstyled mb-0">
                  <li><button className="dropdown-item">Power Bag</button></li>
                  <li><button className="dropdown-item">Room Freshener</button></li>
                  <li><button className="dropdown-item">Scented Bricks</button></li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* SORT DROPDOWN */}
        <div>
          <select className="form-select sansfamily bluetext font_size border" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="">Sort by</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
            <option value="aToZ">Name: A to Z</option>
            <option value="zToA">Name: Z to A</option>
          </select>
        </div>
      </div>

      <p className="text-muted">{sortedProducts.length} products</p>

      <div className="row">
        {sortedProducts.map((product) => (
          <div key={product.id} className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100 product-card shadow-sm">
              <div className="position-relative">
                <img
                  src={product.img}
                  className="card-img-top"
                  alt={product.title}
                  onMouseEnter={(e) => (e.currentTarget.src = product.hoverImg)}
                  onMouseLeave={(e) => (e.currentTarget.src = product.img)}
                  style={{ transition: "0.3s ease" }}
                />
                {product.discount && (
                  <span className="badge bg-white text-dark discount-badge position-absolute top-0 end-0">
                    {product.discount}
                  </span>
                )}
              </div>

              <div className="card-body d-flex flex-column">
                <h6 className="product-title ansfamily fs-5 bluetext ">{product.title}</h6>
                <div className="d-flex align-items-center mb-2 gap-2">
                  <p className="mb-0 sansfamily font_size bluetext fs-5">Rs. {product.price}</p>
                  {product.oldPrice && (
                    <p className="mb-0 sansfamily font_size fs-5 text-decoration-line-through old_price">
                      Rs. {product.oldPrice}
                    </p>
                  )}
                </div>

                <div className="mb-2">
                  {"⭐".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                  <small> ({product.reviews})</small>
                </div>

                <div className="d-flex gap-2 mt-auto">
                  <button
                    className="btn btn-warning flex-grow-1 fw-semibold text-danger"
                    onClick={() =>
                      addToCart({ id: product.id, name: product.title, price: product.price, img: product.img })
                    }
                  >
                    ADD
                  </button>
                  <button
                    className="btn border border-warning bg-transparent d-flex align-items-center justify-content-center hearticon"
                  
                    onClick={() => navigate("/wishlist")}
                  >
                    <i className="bi bi-heart text-danger fs-5"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopnow;
