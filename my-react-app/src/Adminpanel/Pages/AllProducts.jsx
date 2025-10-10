import React, { useState } from "react";
import "../styles/AllProducts.css";

const AllProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: 500, stock: 20 },
    { id: 2, name: "Product B", price: 700, stock: 15 },
    { id: 3, name: "Product C", price: 400, stock: 10 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: "", price: "", stock: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [editProduct, setEditProduct] = useState(null);

  // ➕ Add product
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.stock) return;
    setProducts([
      ...products,
      {
        id: Date.now(),
        name: newProduct.name,
        price: Number(newProduct.price),
        stock: Number(newProduct.stock),
      },
    ]);
    setNewProduct({ name: "", price: "", stock: "" });
  };

  // ✏️ Edit
  const handleEdit = (product) => setEditProduct(product);

  // ✅ Update
  const handleUpdate = (e) => {
    e.preventDefault();
    setProducts(products.map((p) => (p.id === editProduct.id ? editProduct : p)));
    setEditProduct(null);
  };

  // ❌ Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  // 🔍 Filter
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="all-products-page">
      <div className="products-container">
        <div className="products-header">
          <h2>All Products</h2>
          <input
            type="text"
            placeholder="🔍 Search product..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* ➕ Add Form */}
        <form className="add-form" onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price (₹)"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <input
            type="number"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
          />
          <button type="submit" className="add-btn">+ Add Product</button>
        </form>

        {/* 📋 Product Table */}
        <div className="table-container">
          <table className="product-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price (₹)</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((p) => (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>₹{p.price}</td>
                    <td>{p.stock}</td>
                    <td>
                      <button className="edit-btn" onClick={() => handleEdit(p)}>
                        Edit
                      </button>
                      <button className="delete-btn" onClick={() => handleDelete(p.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-data">No products found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✏️ Modal */}
      {editProduct && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Product</h3>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                value={editProduct.name}
                onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
              />
              <input
                type="number"
                value={editProduct.price}
                onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
              />
              <input
                type="number"
                value={editProduct.stock}
                onChange={(e) => setEditProduct({ ...editProduct, stock: e.target.value })}
              />
              <div className="modal-btns">
                <button type="submit" className="save-btn">Save</button>
                <button type="button" className="cancel-btn" onClick={() => setEditProduct(null)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
