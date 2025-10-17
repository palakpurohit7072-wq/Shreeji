import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Styles/ProductDetails.css";
import { useCart } from "../../Context/CartContext";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { addUserProduct } = useCart();

  const [product, setProduct] = useState({
    id: Date.now(),
    name: "",
    description: "",
    category: "",
    brand: "",
    sku: "",
    stock: 0,
    regularPrice: "",
    salePrice: "",
    discount: "",
    rating: "",
    reviews: "",
    mainImage: null,
    galleryImages: [],
  });

  // 🟢 Handle field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
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
            return {
              ...prev,
              mainImage: reader.result,
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
        prev.mainImage === prev.galleryImages[index]
          ? updatedGallery[0] || null
          : prev.mainImage;
      return { ...prev, galleryImages: updatedGallery, mainImage: updatedMain };
    });
  };

  // 🟢 Save new product
  const handleSave = () => {
    const newProduct = {
      ...product,
      id: Date.now(),
      image: product.mainImage,
    };
    addUserProduct(newProduct);
    alert("✅ Product added successfully!");
    navigate("/admin/products");
  };

  const handleCancel = () => navigate("/admin/products");

  return (
    <div className="product-details-wrapper">
      <div className="details-header">
        <div className="header-left">
          <h2>Add Product</h2>
          <div className="breadcrumb">
            <Link to="/admin" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">›</span>
            <Link to="/admin/products" className="breadcrumb-link">All Products</Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-link active">Add Product</span>
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

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              className="form-control"
              value={product.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              className="form-control"
              value={product.category}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Brand Name</label>
            <input
              type="text"
              name="brand"
              className="form-control"
              value={product.brand}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>SKU</label>
              <input
                type="text"
                name="sku"
                className="form-control"
                value={product.sku}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Stock Quantity</label>
              <input
                type="number"
                name="stock"
                className="form-control"
                value={product.stock}
                onChange={handleChange}
              />
            </div>
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
              <label>Discount</label>
              <input
                type="text"
                name="discount"
                className="form-control"
                value={product.discount}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Rating (0–5)</label>
              <input
                type="number"
                name="rating"
                className="form-control"
                min="0"
                max="5"
                value={product.rating}
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

          <div className="buttons">
            <button className="btn btn-dark" onClick={handleSave}>SAVE</button>
            <button className="btn btn-outline-secondary" onClick={handleCancel}>CANCEL</button>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="image-section">
          <h4>Product Gallery</h4>
          <div className="image-preview">
            {product.mainImage ? (
              <img src={product.mainImage} alt="Preview" className="uploaded-img" />
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

export default ProductDetails;
