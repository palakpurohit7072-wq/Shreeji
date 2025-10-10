import React from "react";
import "../Styles/Header.css";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="admin-header ">
      <h3>Dashboard</h3>
      <div className="admin-info d-flex gap-2">
        <FaUserCircle size={24} />
        <span>Admin ▼</span>
      </div>
    </div>
  );
};

export default Header;
