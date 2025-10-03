import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import shreejilogo from "../assets/shreejilogo.png";
import dropdown1 from "../assets/dropdown1.png";
import { Form, FormControl } from "react-bootstrap";
import "./Navbar.css";

function Navbar({ setShowCart, totalItems, totalPrice }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Mega dropdown component
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

      {openDropdown === menuKey && (
        <div className="dropdown-menu show mt-2 p-3 w-100 border-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <h6 className="fw-bold bluetext">By Brand</h6>
                <ul className="list-unstyled">
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
      {/* Mobile / Tablet Header */}
      <div className="d-flex d-lg-none align-items-center justify-content-between mobile-header">
        <button className="navbar-toggler border-0" type="button" onClick={toggleMenu}>
          {menuOpen ? "×" : "☰"}
        </button>

        <img src={shreejilogo} alt="Logo" height="60" width="90" />

        {/* RS Button */}
        {location.pathname === "/" && (
          <button
            onClick={() => setShowCart((prev) => !prev)}
            className="btns fw-semibold text-light bg-blue d-flex align-items-center gap-1"
          >
            Rs {totalPrice} ({totalItems})
          </button>
        )}
      </div>

      {/* Mobile Search */}
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

      {/* Mobile Menu */}
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

      {/* Desktop Header */}
      <div className="d-none d-lg-flex justify-content-between align-items-center desktop-header flex-wrap">
        <div className="left_part">
          <img src={shreejilogo} alt="Logo" height="80" width="100" />
        </div>

        <div className="right_part d-flex align-items-center gap-3 flex-grow-1 justify-content-end flex-wrap">
          <Form className="d-flex flex-grow-1" style={{ maxWidth: "690px" }}>
            <FormControl
              type="search"
              placeholder="Search for Dhoop Stick"
              aria-label="Search"
              style={{ width: "100%", height: "40px" }}
            />
          </Form>

          <div className="buttons-wrapper d-flex align-items-center gap-2">
            {/* Account */}
            <Link
              to="/login"
              className="btns fw-semibold bg-light bluetext blueborder d-flex align-items-center gap-1 text-decoration-none"
            >
              Account
            </Link>

            {/* RS Cart Button */}
            {location.pathname === "/" && (
              <button
                onClick={() => setShowCart((prev) => !prev)}
                className="btns fw-semibold text-light bg-blue d-flex align-items-center gap-1"
              >
                Rs {totalPrice} ({totalItems})
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

