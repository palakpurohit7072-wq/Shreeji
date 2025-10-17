import React, { useEffect } from "react";
import { supabase } from "./Dbconnection";

function App() {

  // ✅ Fetch coupons on load
  useEffect(() => {
    fetchCoupons();
  }, []);

  // Fetch all coupons
  async function fetchCoupons() {
    const { data, error } = await supabase
      .from("coupons")
      .select("*")
      .order("coupons_id", { ascending: true }); // correct primary key column

    if (error) {
      console.error("❌ Fetch error:", error);
    } else {
      console.log("✅ Fetched Coupons:", data);
    }
  }

  // Add coupon
  async function addCoupon(newCoupon) {
    // newCoupon should be an object like:
    // { code, description, active, value, multiple, start_date, end_date }
    const { data, error } = await supabase.from("coupons").insert([newCoupon]);
    if (error) console.error("❌ Insert error:", error);
    else console.log("✅ Coupon added:", data);
  }

  // Update coupon
  async function updateCoupon(coupons_id, updatedFields) {
    const { data, error } = await supabase
      .from("coupons")
      .update(updatedFields)
      .eq("coupons_id", coupons_id); // corrected column name
    if (error) console.error("❌ Update error:", error);
    else console.log("✅ Coupon updated:", data);
  }

  // Delete coupon
  async function deleteCoupon(coupons_id) {
    const { data, error } = await supabase
      .from("coupons")
      .delete()
      .eq("coupons_id", coupons_id); // corrected column name
    if (error) console.error("❌ Delete error:", error);
    else console.log("✅ Coupon deleted:", data);
  }

  return (
    <div>
      <h2>🧪 Supabase Coupons API Console Testing</h2>
      <p>Check console for logs of fetched, added, updated, or deleted coupons.</p>
    </div>
  );
}

export default App;


