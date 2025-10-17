import React, { useEffect } from "react";
import { supabase } from "./Dbconnection";

function App() {

  // ✅ Fetch product_statuses on load
  useEffect(() => {
    fetchProductStatuses();
  }, []);

  // Fetch all product_statuses
  async function fetchProductStatuses() {
    const { data, error } = await supabase
      .from("product_statuses")
      .select("*")
      .order("status_id", { ascending: true });

    if (error) {
      console.error("❌ Fetch error:", error);
    } else {
      console.log("✅ Fetched Product Statuses:", data);
    }
  }

  // Add product status
  async function addProductStatus(newStatus) {
    // newStatus should be like: { status_name }
    const { data, error } = await supabase.from("product_statuses").insert([newStatus]);
    if (error) console.error("❌ Insert error:", error);
    else console.log("✅ Product Status added:", data);
  }

  // Update product status
  async function updateProductStatus(status_id, updatedFields) {
    const { data, error } = await supabase
      .from("product_statuses")
      .update(updatedFields)
      .eq("status_id", status_id);
    if (error) console.error("❌ Update error:", error);
    else console.log("✅ Product Status updated:", data);
  }

  // Delete product status
  async function deleteProductStatus(status_id) {
    const { data, error } = await supabase
      .from("product_statuses")
      .delete()
      .eq("status_id", status_id);
    if (error) console.error("❌ Delete error:", error);
    else console.log("✅ Product Status deleted:", data);
  }

  return (
    <div>
      <h2>🧪 Supabase Product Statuses API Console Testing</h2>
      <p>Check console for logs of fetched, added, updated, or deleted product statuses.</p>
    </div>
  );
}

export default App;

