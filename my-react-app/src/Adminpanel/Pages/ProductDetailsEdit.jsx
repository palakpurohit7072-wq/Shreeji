import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import "../Styles/ProductDetails.css";

const ProductDetailsEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addUserProduct, removeUserProduct } = useCart();
  const productId = location.state?.productId;

  const [product, setProduct] = useState({
    id: Date.now(),
    name: "",
    regularPrice: "",
    salePrice: "",
    price: "",
    rating: 0,
    reviews: 0,
    discount: "",
    img: null,
    galleryImages: [],
  });

  // 🟢 Load product details
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("userProducts")) || [];
    if (productId) {
      const existing = savedProducts.find((p) => p.id === Number(productId));
      if (existing) setProduct(existing);
      else alert("⚠️ Product not found!");
    }
  }, [productId]);

  // 🟢 Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      let updated = { ...prev, [name]: value };
      if (name === "regularPrice") {
        updated.price = prev.salePrice ? prev.salePrice : value;
      }
      if (name === "salePrice") {
        updated.price = value || prev.regularPrice;
      }
      return updated;
    });
  };

  // 🟢 Handle image upload (main + gallery)
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProduct((prev) => {
            const newGallery = [...(prev.galleryImages || []), reader.result];
            // ✅ Make latest uploaded image main preview
            return {
              ...prev,
              img: reader.result,
              galleryImages: newGallery,
            };
          });
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // 🟢 Delete gallery thumbnail
  const handleDeleteThumb = (index) => {
    setProduct((prev) => {
      const updatedGallery = prev.galleryImages.filter((_, i) => i !== index);
      const updatedMain =
        prev.img === prev.galleryImages[index]
          ? updatedGallery[0] || null
          : prev.img;
      return { ...prev, galleryImages: updatedGallery, img: updatedMain };
    });
  };

  // 🟢 Save product (FIXED mainImage update)
  const handleSave = () => {
    const savedProducts = JSON.parse(localStorage.getItem("userProducts")) || [];

    const updatedProduct = {
      ...product,
      id: Number(product.id),
      regularPrice: Number(product.regularPrice),
      salePrice: Number(product.salePrice),
      price: Number(product.salePrice || product.regularPrice),
      rating: Number(product.rating),
      reviews: Number(product.reviews),
      image: product.img,
      img: product.img,
      mainImage: product.img, // ✅ FIX: this makes AllProducts show updated image
    };

    const existingIndex = savedProducts.findIndex(
      (p) => p.id === Number(product.id)
    );
    if (existingIndex !== -1) savedProducts[existingIndex] = updatedProduct;
    else savedProducts.push(updatedProduct);

    localStorage.setItem("userProducts", JSON.stringify(savedProducts));
    addUserProduct(updatedProduct);

    alert("✅ Product updated successfully!");
    navigate("/admin/products");
  };

  // 🟢 Delete product
  const handleDelete = () => {
    if (window.confirm("🗑️ Are you sure you want to delete this product?")) {
      const savedProducts = JSON.parse(localStorage.getItem("userProducts")) || [];
      const filtered = savedProducts.filter((p) => p.id !== Number(product.id));
      localStorage.setItem("userProducts", JSON.stringify(filtered));
      removeUserProduct(product.id);
      alert("🗑️ Product deleted successfully!");
      navigate("/admin/products");
    }
  };

  const handleCancel = () => navigate("/admin/products");

  return (
    <div className="product-details-wrapper">
      <div className="details-header">
        <div className="header-left">
          <h2>Product Details</h2>
          <div className="breadcrumb">
            <Link to="/admin" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">›</span>
            <Link to="/admin/products" className="breadcrumb-link">All Products</Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-link active">Edit Product</span>
          </div>
        </div>
      </div>

      <div className="product-details-content">
        {/* FORM SECTION */}
        <div className="form-section">
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={product.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Regular Price (₹)</label>
              <input
                type="number"
                name="regularPrice"
                className="form-control"
                value={product.regularPrice}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Sale Price (₹)</label>
              <input
                type="number"
                name="salePrice"
                className="form-control"
                value={product.salePrice}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Rating (0–5)</label>
              <input
                type="number"
                name="rating"
                className="form-control"
                value={product.rating}
                min={0}
                max={5}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Reviews Count</label>
              <input
                type="number"
                name="reviews"
                className="form-control"
                value={product.reviews}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Discount</label>
            <input
              type="text"
              name="discount"
              className="form-control"
              value={product.discount}
              onChange={handleChange}
            />
          </div>

          <div className="buttons">
            <button className="btn btn-dark" onClick={handleSave}>UPDATE</button>
            <button className="btn btn-danger" onClick={handleDelete}>DELETE</button>
            <button className="btn btn-outline-secondary" onClick={handleCancel}>CANCEL</button>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="image-section">
          <h4>Product Gallery</h4>
          <div className="image-preview">
            {product.img ? (
              <img src={product.img} alt="Main Preview" className="uploaded-img" />
            ) : (
              <p className="placeholder-text">
                Drop your image here, or browse<br />
                <small>.jpeg, .png are allowed</small>
              </p>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="form-control upload-input"
          />

          {product.galleryImages && product.galleryImages.length > 0 && (
            <div className="gallery-list">
              {product.galleryImages.map((imgSrc, index) => (
                <div key={index} className="gallery-item">
                  <img src={imgSrc} alt={`thumb-${index}`} className="gallery-thumb" />
                  <button
                    className="thumb-delete"
                    onClick={() => handleDeleteThumb(index)}
                    title="Remove"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsEdit;
