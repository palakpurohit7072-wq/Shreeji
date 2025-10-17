import React from "react";
import "../Styles/AllProducts.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import sliderFallback from "../../assets/slider1.jpeg";

const AllProducts = () => {
  const navigate = useNavigate();
  const { userProducts, addToCart } = useCart();
  const { setShowCart, setShowWishlist } = useOutletContext();

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      desc: product.name,
      price: product.salePrice || product.regularPrice,
      img: product.mainImage || sliderFallback,
    });
    setShowCart(true);
  };

  const handleCardClick = (productId) => {
    navigate("/admin/productdetailsedit", { state: { productId } });
  };

  return (
    <div className="all-products-page">
      <div className="products-header">
        <div>
          <h2>All Products</h2>
          <p>
            <span style={{ color: "gray" }}>Home &gt; </span>All Products
          </p>
        </div>
        <button
          className="add-product-btn"
          onClick={() => navigate("/admin/productdetailsadd")}
        >
          + Add New Product
        </button>
      </div>

      <div className="products-grid">
        {userProducts.length === 0 && <p>No products available.</p>}

        {userProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleCardClick(product.id)}
          >
            <div className="product-card-header position-relative">
              <img
                src={product.mainImage || sliderFallback}
                alt={product.name}
                className="product-image"
                style={{ transition: "0.3s ease" }}
              />

              {product.discount && (
                <span className="badge discount-badge position-absolute top-0 end-0 d-flex align-items-center justify-content-center">
                  {product.discount}
                </span>
              )}
            </div>

            <div className="product-card-body d-flex flex-column flex-grow-1">
              <h6 className="product-title fw-semibold bluetext sansfamily fs-6">
                {product.name}
              </h6>

              <div className="d-flex align-items-center gap-2 mb-2">
                {product.salePrice ? (
                  <>
                    <p className="mb-0 fw-bold bluetext fs-6">
                      ₹{product.salePrice}
                    </p>
                    <p className="mb-0 text-muted text-decoration-line-through small sansfamily">
                      ₹{product.regularPrice}
                    </p>
                  </>
                ) : (
                  <p className="mb-0 fw-bold bluetext fs-6">
                    ₹{product.regularPrice}
                  </p>
                )}
              </div>

              {product.rating && (
                <div className="mb-2">
                  {"⭐".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                  {product.reviews && <small> ({product.reviews})</small>}
                </div>
              )}

              <div className="d-flex gap-2 mt-auto">
                <button
                  className="btn btn-warning flex-grow-1 text-danger fw-semibold"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                >
                  ADD
                </button>

                <button
                  className="btn border border-warning rounded-2 bg-transparent d-flex align-items-center justify-content-center yellowicon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowWishlist(true);
                  }}
                >
                  <i className="bi bi-heart text-danger fs-5"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
