import React, { useEffect } from "react";
import { supabase } from "./Dbconnection";

function App() {

  // ✅ Fetch order_products on load
  useEffect(() => {
    fetchOrderProducts();
  }, []);

  // Fetch all order_products
  async function fetchOrderProducts() {
    const { data, error } = await supabase
      .from("order_products")
      .select("*")
      .order("order_id", { ascending: true }); // primary key column

    if (error) {
      console.error("❌ Fetch error:", error);
    } else {
      console.log("✅ Fetched Order Products:", data);
    }
  }

  // Add order product
  async function addOrderProduct(newOrderProduct) {
    // newOrderProduct should be an object like:
    // { order_id, sku, name, description, price, quantity, subtotal, product_id }
    const { data, error } = await supabase.from("order_products").insert([newOrderProduct]);
    if (error) console.error("❌ Insert error:", error);
    else console.log("✅ Order Product added:", data);
  }

  // Update order product
  async function updateOrderProduct(order_id, updatedFields) {
    const { data, error } = await supabase
      .from("order_products")
      .update(updatedFields)
      .eq("order_id", order_id); // primary key
    if (error) console.error("❌ Update error:", error);
    else console.log("✅ Order Product updated:", data);
  }

  // Delete order product
  async function deleteOrderProduct(order_id) {
    const { data, error } = await supabase
      .from("order_products")
      .delete()
      .eq("order_id", order_id); // primary key
    if (error) console.error("❌ Delete error:", error);
    else console.log("✅ Order Product deleted:", data);
  }

  return (
    <div>
      <h2>🧪 Supabase Order Products API Console Testing</h2>
      <p>Check console for logs of fetched, added, updated, or deleted order products.</p>
    </div>
  );
}

export default App;
