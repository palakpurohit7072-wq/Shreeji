import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../Context/CartContext"; // ✅ 1. Import cart context
import shreejilogo from "../assets/shreejilogo.png";
import dropdown1 from "../assets/dropdown1.png";
import { Form, FormControl } from "react-bootstrap";
import "./Navbar.css";

function Navbar({ setShowCart }) {
  // ✅ 2. Context se cart ka data le rahe hain
  const { totalItems, totalPrice } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  // ✅ Menu toggle (hamburger open/close)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setOpenDropdown(null);
  };

  // ✅ Dropdown open/close toggle
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // ✅ Reusable Mega dropdown
  const dropdownItem = (title, menuKey) => (
    <li className="nav-item dropdown position-static mega-dropdown">
      <div className="d-flex justify-content-between align-items-center">
        <a
          href="#"
          className="nav-link fw-semibold bluetext w-100"
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown(menuKey);
          }}
        >
          {title}
        </a>

        {/* ✅ Dropdown ke liye icon (open/close) */}
        {openDropdown === menuKey ? (
          <span className="close-icon" onClick={() => setOpenDropdown(null)}>
            ×
          </span>
        ) : (
          <i
            className="bi bi-chevron-down ms-2"
            onClick={() => toggleDropdown(menuKey)}
          ></i>
        )}
      </div>

      {/* ✅ Dropdown content */}
      {openDropdown === menuKey && (
        <div className="dropdown-menu show mt-2 p-3 w-100 border-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <h6 className="fw-bold bluetext">By Brand</h6>
                <ul className="list-unstyled">
                  <li>
                    <a className="dropdown-item bluetext" href="#">
                      Amogha
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item bluetext" href="#">
                      Heritage
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <h6 className="fw-bold">By Type</h6>
                <ul className="list-unstyled">
                  <li>
                    <a className="dropdown-item" href="#">
                      Scented Bathi
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Masala Bathi
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <h6 className="fw-bold">By Fragrance</h6>
                <ul className="list-unstyled">
                  <li>
                    <a className="dropdown-item" href="#">
                      Fruity
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Woody
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <img src={dropdown1} alt="dropdownimg1" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );

  return (
    <div className="container py-3">
      {/* ==========================================================
          ✅ MOBILE/TABLET HEADER (Hamburger + Logo + Cart Button)
      =========================================================== */}
      <div className="d-flex d-lg-none align-items-center justify-content-between mobile-header">
        {/* Hamburger Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleMenu}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        {/* Logo Center me */}
        <img src={shreejilogo} alt="Logo" height="60" width="90" />

        {/* ✅ Rs Button (Cart Total) */}
        <button
          onClick={() => setShowCart((prev) => !prev)}
          className="btns fw-semibold text-light bg-blue d-flex align-items-center gap-1"
        >
          {/* ✅ Safe value format — NaN kabhi nahi aayega */}
          Rs {(totalPrice || 0).toFixed(2)} ({totalItems || 0})
        </button>
      </div>

      {/* ✅ Mobile Search Bar (hamburger ke niche dikhe) */}
      <div className="d-lg-none mt-2">
        <Form className="d-flex w-100">
          <FormControl
            type="search"
            placeholder="Search for Dhoop Stick"
            aria-label="Search"
            style={{ height: "40px", borderRadius: "10px" }}
          />
        </Form>
      </div>

      {/* ✅ Mobile Menu (dropdown items) */}
      {menuOpen && (
        <div className="mt-2 d-lg-none">
          <ul className="list-unstyled p-3 bg-light rounded">
            {dropdownItem("Agarbatti", "agarbatti")}
            {dropdownItem("Bambooless Incense", "bambooless")}
            {dropdownItem("Dhoop & Sambrani", "dhoop")}
            {dropdownItem("Puja Samagri", "puja")}
            {dropdownItem("Home & Personal Care", "home")}
            <li>
              <a className="dropdown-item" href="#">
                Gifting
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Custom Incense
              </a>
            </li>
            <li>
              <a className="dropdown-item fw-bold" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* ==========================================================
          ✅ DESKTOP HEADER (Logo + Search + Account + Cart Button)
      =========================================================== */}
      <div className="d-none d-lg-flex justify-content-between align-items-center desktop-header flex-wrap">
        {/* Logo */}
        <div className="left_part">
          <img src={shreejilogo} alt="Logo" height="80" width="100" />
        </div>

        {/* Search + Buttons */}
        <div className="right_part d-flex align-items-center gap-3 flex-grow-1 justify-content-end flex-wrap">
          {/* Search bar */}
          <Form className="d-flex flex-grow-1" style={{ maxWidth: "690px" }}>
            <FormControl
              type="search"
              placeholder="Search for Dhoop Stick"
              aria-label="Search"
              style={{ width: "100%", height: "40px" }}
            />
          </Form>

          {/* Account + Cart Buttons */}
          <div className="buttons-wrapper d-flex align-items-center gap-2">
            {/* Account */}
            {/* Account */}
            <Link
              to="/login"
              className="btns fw-semibold bg-light bluetext blueborder d-flex align-items-center gap-2 text-decoration-none"
            >
              {/* ✅ SVG Icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3333 19.25V17.4167C18.3333 16.4442 17.947 15.5116 17.2593 14.8239C16.5717 14.1363 15.6391 13.75 14.6666 13.75H7.33329C6.36083 13.75 5.4282 14.1363 4.74057 14.8239C4.05293 15.5116 3.66663 16.4442 3.66663 17.4167V19.25"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ fill: "none" }}
                />
                <path
                  d="M11 10.0833C13.0251 10.0833 14.6667 8.44171 14.6667 6.41667C14.6667 4.39162 13.0251 2.75 11 2.75C8.975 2.75 7.33337 4.39162 7.33337 6.41667C7.33337 8.44171 8.975 10.0833 11 10.0833Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ fill: "none" }}
                />
              </svg>
              Account
            </Link>

            {/* ✅ Rs Cart Button */}
            <button
              onClick={() => setShowCart((prev) => !prev)}
              className="btns fw-semibold text-light bg-blue d-flex align-items-center justify-content-center gap-2"
              style={{ minWidth: "150px" }}
            >
              {/* ✅ Cart SVG on LEFT */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block" }}
              >
                <path
                  className="circle"
                  d="M9.5 20C9.77614 20 10 19.7761 10 19.5C10 19.2239 9.77614 19 9.5 19C9.22386 19 9 19.2239 9 19.5C9 19.7761 9.22386 20 9.5 20Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="circle"
                  d="M18.5 20C18.7761 20 19 19.7761 19 19.5C19 19.2239 18.7761 19 18.5 19C18.2239 19 18 19.2239 18 19.5C18 19.7761 18.2239 20 18.5 20Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 3H6.27273L8.46545 13.7117C8.54027 14.08 8.7452 14.4109 9.04436 14.6464C9.34351 14.8818 9.71784 15.0069 10.1018 14.9997H18.0545C18.4385 15.0069 18.8129 14.8818 19.112 14.6464C19.4112 14.4109 19.6161 14.08 19.6909 13.7117L21 6.9999H7.09091"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ fill: "none" }}
                />
              </svg>

              {/* ✅ Text next to icon */}
              Rs {(totalPrice || 0).toFixed(2)} ({totalItems || 0})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

