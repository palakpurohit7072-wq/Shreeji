import React, { useEffect } from "react";
import { supabase } from "./Dbconnection";

function App() {

  // ✅ Fetch roles on load
  useEffect(() => {
    fetchRoles();
  }, []);

  // Fetch all roles
  async function fetchRoles() {
    const { data, error } = await supabase
      .from("roles")
      .select("*")
      .order("role_id", { ascending: true });

    if (error) {
      console.error("❌ Fetch error:", error);
    } else {
      console.log("✅ Fetched Roles:", data);
    }
  }

  // Add role
  async function addRole(newRole) {
    // newRole should be like: { name: "Admin" }
    const { data, error } = await supabase.from("roles").insert([newRole]);
    if (error) console.error("❌ Insert error:", error);
    else console.log("✅ Role added:", data);
  }

  // Update role
  async function updateRole(role_id, updatedFields) {
    const { data, error } = await supabase
      .from("roles")
      .update(updatedFields)
      .eq("role_id", role_id);
    if (error) console.error("❌ Update error:", error);
    else console.log("✅ Role updated:", data);
  }

  // Delete role
  async function deleteRole(role_id) {
    const { data, error } = await supabase
      .from("roles")
      .delete()
      .eq("role_id", role_id);
    if (error) console.error("❌ Delete error:", error);
    else console.log("✅ Role deleted:", data);
  }

  return (
    <div>
      <h2>🧪 Supabase Roles API Console Testing</h2>
      <p>Check console for logs of fetched, added, updated, or deleted roles.</p>
    </div>
  );
}

export default App;

