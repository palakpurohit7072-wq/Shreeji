import React from "react";
import { FaTachometerAlt, FaBoxOpen, FaList, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2 className="admin-logo">Arik</h2>
      <ul>
        <li><Link to="/admin"><FaTachometerAlt /> Dashboard</Link></li>
        <li><Link to="/admin/products"><FaBoxOpen /> All Products</Link></li>
        <li><Link to="/admin/orders"><FaList /> Orders List</Link></li>
         <li><Link to="/admin/change-password"><FaUser /> Admin</Link></li> 
       
      </ul>
    </div>
  );
};

export default Sidebar;
