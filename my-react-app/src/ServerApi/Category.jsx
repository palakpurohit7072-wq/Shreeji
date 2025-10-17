import React, { useEffect } from "react";
import { supabase } from "./Dbconnection";

function App() {

  // ✅ Fetch categories on load
  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch all categories
  async function fetchCategories() {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("category_id", { ascending: true }); // primary key column

    if (error) {
      console.error("❌ Fetch error:", error);
    } else {
      console.log("✅ Fetched Categories:", data);
    }
  }

  // Add category
  async function addCategory(newCategory) {
    // newCategory should be an object like { name: "Category Name" }
    const { data, error } = await supabase.from("categories").insert([newCategory]);
    if (error) console.error("❌ Insert error:", error);
    else console.log("✅ Category added:", data);
  }

  // Update category
  async function updateCategory(category_id, updatedFields) {
    const { data, error } = await supabase
      .from("categories")
      .update(updatedFields)
      .eq("category_id", category_id);
    if (error) console.error("❌ Update error:", error);
    else console.log("✅ Category updated:", data);
  }

  // Delete category
  async function deleteCategory(category_id) {
    const { data, error } = await supabase
      .from("categories")
      .delete()
      .eq("category_id", category_id);
    if (error) console.error("❌ Delete error:", error);
    else console.log("✅ Category deleted:", data);
  }

  return (
    <div>
      <h2>🧪 Supabase Categories API Console Testing</h2>
      <p>Check console for logs of fetched, added, updated, or deleted categories.</p>
    </div>
  );
}

export default App;
