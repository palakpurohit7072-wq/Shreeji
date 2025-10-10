import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
// import "../styles/AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Header />
        <div className="admin-content">
          {/* 🔹 This is where nested routes will show */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
