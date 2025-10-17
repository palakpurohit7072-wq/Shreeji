import React, { useEffect, useState } from "react";
import { supabase } from "./Dbconnection";

function App() {
  const [editingProduct, setEditingProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const [newProduct, setNewProduct] = useState({
    sku: "",
    name: "",
    description: "",
    state_id: "",
    regular_price: "",
    discount_price: "",
    quantity: "",
    taxable: true,
  });

  // ✅ Fetch all products
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("product_id", { ascending: true }); // ✅ FIXED

    if (error) {
      console.error("❌ Fetch error:", error);
    } else {
      setProducts(data || []);
      console.log("✅ Fetched Products:", data);
    }
  }

  // ✅ Add new product
  async function addProduct() {
    if (!newProduct.sku || !newProduct.name) {
      alert("❌ SKU and Name are required!");
      return;
    }

    const { data, error } = await supabase.from("products").insert([
      {
        sku: newProduct.sku,
        name: newProduct.name,
        description: newProduct.description || null,
        state_id: newProduct.state_id ? Number(newProduct.state_id) : null,
        regular_price: Number(newProduct.regular_price) || 0,
        discount_price: Number(newProduct.discount_price) || 0,
        quantity: Number(newProduct.quantity) || 0,
        taxable: newProduct.taxable,
      },
    ]);

    if (error) {
      console.error("❌ Insert error:", error);
      alert("❌ Failed to add product. Check console.");
    } else {
      console.log("✅ Product added:", data);
      alert("✅ Product added successfully!");
      resetForm();
      fetchProducts();
    }
  }

  // ✅ Update existing product
  async function updateProduct() {
    if (!newProduct.sku || !newProduct.name) {
      alert("❌ SKU and Name are required!");
      return;
    }

    const { data, error } = await supabase
      .from("products")
      .update({
        sku: newProduct.sku,
        name: newProduct.name,
        description: newProduct.description || null,
        state_id: newProduct.state_id ? Number(newProduct.state_id) : null,
        regular_price: Number(newProduct.regular_price) || 0,
        discount_price: Number(newProduct.discount_price) || 0,
        quantity: Number(newProduct.quantity) || 0,
        taxable: newProduct.taxable,
      })
      .eq("product_id", editingProduct); // ✅ FIXED

    if (error) {
      console.error("❌ Update error:", error);
      alert("❌ Failed to update product.");
    } else {
      console.log("✅ Product updated:", data);
      alert("✅ Product updated successfully!");
      resetForm();
      fetchProducts();
    }
  }

  // ✅ Delete a product
  async function deleteProduct(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    const { data, error } = await supabase
      .from("products")
      .delete()
      .eq("product_id", id); // ✅ FIXED

    if (error) {
      console.error("❌ Delete error:", error);
      alert("❌ Failed to delete product.");
    } else {
      console.log("✅ Deleted:", data);
      alert("✅ Product deleted successfully!");
      fetchProducts();
    }
  }

  // Reset form
  function resetForm() {
    setNewProduct({
      sku: "",
      name: "",
      description: "",
      state_id: "",
      regular_price: "",
      discount_price: "",
      quantity: "",
      taxable: true,
    });
    setEditingProduct(null);
  }

  // Start edit mode
  function startEdit(product) {
    setEditingProduct(product.product_id); // ✅ FIXED
    setNewProduct({
      sku: product.sku || "",
      name: product.name || "",
      description: product.description || "",
      state_id: product.state_id || "",
      regular_price: product.regular_price || "",
      discount_price: product.discount_price || "",
      quantity: product.quantity || "",
      taxable: product.taxable ?? true,
    });
  }

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h2>🧪 Supabase Product Testing API</h2>
      <p style={{ color: "#666" }}>
        (Console me check karo: Added, Updated, Deleted aur Fetched data logs)
      </p>

      {/* Product Form */}
      <div
        style={{
          padding: 20,
          border: "1px solid #ccc",
          borderRadius: 8,
          background: "#f9f9f9",
          width: "fit-content",
        }}
      >
        <h3>{editingProduct ? "✏️ Edit Product" : "➕ Add Product"}</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <input
            placeholder="SKU *"
            value={newProduct.sku}
            onChange={(e) => setNewProduct({ ...newProduct, sku: e.target.value })}
          />
          <input
            placeholder="Name *"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
          <input
            placeholder="State ID"
            type="number"
            value={newProduct.state_id}
            onChange={(e) =>
              setNewProduct({ ...newProduct, state_id: e.target.value })
            }
          />
          <input
            placeholder="Regular Price"
            type="number"
            value={newProduct.regular_price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, regular_price: e.target.value })
            }
          />
          <input
            placeholder="Discount Price"
            type="number"
            value={newProduct.discount_price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, discount_price: e.target.value })
            }
          />
          <input
            placeholder="Quantity"
            type="number"
            value={newProduct.quantity}
            onChange={(e) =>
              setNewProduct({ ...newProduct, quantity: e.target.value })
            }
          />
          <label>
            Taxable:
            <input
              type="checkbox"
              checked={newProduct.taxable}
              onChange={(e) =>
                setNewProduct({ ...newProduct, taxable: e.target.checked })
              }
            />
          </label>

          <div style={{ marginTop: 10 }}>
            {editingProduct ? (
              <>
                <button onClick={updateProduct}>💾 Update</button>{" "}
                <button onClick={resetForm}>❌ Cancel</button>
              </>
            ) : (
              <button onClick={addProduct}>➕ Add Product</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
