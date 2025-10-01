import React, { useState } from "react";
import shreejilogo from "../assets/shreejilogo.png";
import dropdown1 from "../assets/dropdown1.png";
import { Form, FormControl } from "react-bootstrap";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

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
        {openDropdown === menuKey ? (
          <span
            className="close-icon"
            onClick={() => setOpenDropdown(null)}
          >
            ×
          </span>
        ) : (
          <i
            className="bi bi-chevron-down ms-2"
            onClick={() => toggleDropdown(menuKey)}
          ></i>
        )}
      </div>

      {openDropdown === menuKey && (
        <div className="dropdown-menu show mt-2 p-3 w-100 border-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <h6 className="fw-bold bluetext">By Brand</h6>
                <ul className="list-unstyled">
                  <li><a className="dropdown-item bluetext" href="#">Cycle</a></li>
                  <li><a className="dropdown-item bluetext" href="#">Amogha</a></li>
                  <li><a className="dropdown-item bluetext" href="#">Heritage</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h6 className="fw-bold">By Type</h6>
                <ul className="list-unstyled">
                  <li><a className="dropdown-item" href="#">Scented Bathi</a></li>
                  <li><a className="dropdown-item" href="#">Masala Bathi</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h6 className="fw-bold">By Fragrance</h6>
                <ul className="list-unstyled">
                  <li><a className="dropdown-item" href="#">Fruity</a></li>
                  <li><a className="dropdown-item" href="#">Woody</a></li>
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
      {/* ✅ Mobile/Tablet Layout */}
      <div className="d-flex align-items-center justify-content-between d-lg-none mobile-header">
        {/* Hamburger */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo */}
        <img src={shreejilogo} alt="Logo" height="60" width="90" />

        {/* Heart Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="heart-icon"
        >
          <path d="M29.728 10.656q0-1.472-0.384-2.56t-0.992-1.76-1.472-1.056-1.664-0.576-1.76-0.128-1.984 0.448-1.984 1.152-1.536 1.28-1.088 1.088q-0.32 0.416-0.864 0.416t-0.864-0.416q-0.448-0.48-1.088-1.088t-1.536-1.28-1.984-1.152-1.984-0.448-1.76 0.128-1.664 0.576-1.472 1.056-0.992 1.76-0.384 2.56q0 2.976 3.36 6.336l10.368 9.984 10.368-9.984q3.36-3.36 3.36-6.336zM32 10.656q0 3.936-4.096 8.032l-11.104 10.72q-0.32 0.32-0.8 0.32t-0.8-0.32l-11.136-10.752q-0.16-0.16-0.48-0.48t-0.992-1.184-1.216-1.728-0.96-2.144-0.416-2.464q0-3.936 2.272-6.144t6.272-2.24q1.088 0 2.24 0.384t2.144 1.056 1.728 1.216 1.344 1.216q0.64-0.64 1.344-1.216t1.728-1.216 2.144-1.056 2.24-0.384q4 0 6.272 2.24t2.272 6.144z"></path>
        </svg>
      </div>

      {/* ✅ Mobile Search */}
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

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="mt-2 d-lg-none">
          <ul className="list-unstyled p-3 bg-light rounded">
            {dropdownItem("Agarbatti", "agarbatti")}
            {dropdownItem("Bambooless Incense", "bambooless")}
            {dropdownItem("Dhoop & Sambrani", "dhoop")}
            {dropdownItem("Puja Samagri", "puja")}
            {dropdownItem("Home & Personal Care", "home")}
            <li><a className="dropdown-item" href="#">Gifting</a></li>
            <li><a className="dropdown-item" href="#">Custom Incense</a></li>
            <li><a className="dropdown-item fw-bold" href="#">Blog</a></li>
          </ul>
        </div>
      )}

      {/* ✅ Desktop/Laptop Layout */}
      <div className="d-none d-lg-flex justify-content-between align-items-center flex-wrap desktop-header">
        {/* Logo */}
        <div className="left_part">
          <img src={shreejilogo} alt="Logo" height="80" width="100" />
        </div>

        {/* Right Part */}
        <div className="right_part d-flex align-items-center gap-3 flex-grow-1 justify-content-end flex-wrap">
          {/* Search */}
          <Form className="d-flex flex-grow-1" style={{ maxWidth: "690px" }}>
            <FormControl
              type="search"
              placeholder="Search for D"
              aria-label="Search"
              style={{ width: "100%", height: "40px" }}
            />
          </Form>

          {/* Buttons */}
          <div className="buttons-wrapper">
            <button className="btns fw-semibold bg-light bluetext blueborder">
              Account
            </button>
            <button className="btns fw-semibold text-light bg-blue">
              Rs000.0
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="wlh-svg-Icon"
              style={{ width: "1em", fontSize: "21px", paddingTop: "7px" }}
            >
              <path d="M29.728 10.656q0-1.472-0.384-2.56t-0.992-1.76-1.472-1.056-1.664-0.576-1.76-0.128-1.984 0.448-1.984 1.152-1.536 1.28-1.088 1.088q-0.32 0.416-0.864 0.416t-0.864-0.416q-0.448-0.48-1.088-1.088t-1.536-1.28-1.984-1.152-1.984-0.448-1.76 0.128-1.664 0.576-1.472 1.056-0.992 1.76-0.384 2.56q0 2.976 3.36 6.336l10.368 9.984 10.368-9.984q3.36-3.36 3.36-6.336zM32 10.656q0 3.936-4.096 8.032l-11.104 10.72q-0.32 0.32-0.8 0.32t-0.8-0.32l-11.136-10.752q-0.16-0.16-0.48-0.48t-0.992-1.184-1.216-1.728-0.96-2.144-0.416-2.464q0-3.936 2.272-6.144t6.272-2.24q1.088 0 2.24 0.384t2.144 1.056 1.728 1.216 1.344 1.216q0.64-0.64 1.344-1.216t1.728-1.216 2.144-1.056 2.24-0.384q4 0 6.272 2.24t2.272 6.144z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

