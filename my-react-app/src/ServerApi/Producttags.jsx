import React, { useEffect } from "react";
import { supabase } from "./Dbconnection";

function App() {

  // ✅ Fetch product_tags on load
  useEffect(() => {
    fetchProductTags();
  }, []);

  // Fetch all product_tags
  async function fetchProductTags() {
    const { data, error } = await supabase
      .from("product_tags")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("❌ Fetch error:", error);
    } else {
      console.log("✅ Fetched Product Tags:", data);
    }
  }

  // Add product tag
  async function addProductTag(newTag) {
    // newTag should be like: { product_id, tag_id }
    const { data, error } = await supabase.from("product_tags").insert([newTag]);
    if (error) console.error("❌ Insert error:", error);
    else console.log("✅ Product Tag added:", data);
  }

  // Update product tag
  async function updateProductTag(id, updatedFields) {
    const { data, error } = await supabase
      .from("product_tags")
      .update(updatedFields)
      .eq("id", id);
    if (error) console.error("❌ Update error:", error);
    else console.log("✅ Product Tag updated:", data);
  }

  // Delete product tag
  async function deleteProductTag(id) {
    const { data, error } = await supabase
      .from("product_tags")
      .delete()
      .eq("id", id);
    if (error) console.error("❌ Delete error:", error);
    else console.log("✅ Product Tag deleted:", data);
  }

  return (
    <div>
      <h2> Supabase Product Tags API Console Testing</h2>
      <p>Check console for logs of fetched, added, updated, or deleted product tags.</p>
    </div>
  );
}

export default App;


