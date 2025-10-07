// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { Form, FormControl } from "react-bootstrap";
import shreejilogo from "../assets/shreejilogo.png";
import dropdown1 from "../assets/dropdown1.png";
import "./Navbar.css";

function Navbar({ setShowCart }) {
  const { totalItems, totalPrice } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [openItems, setOpenItems] = useState({});

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
    setOpenItems({});
  };

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
    setOpenSubDropdown(null);
    setOpenItems({});
  };

  const toggleSubDropdown = (key) => {
    setOpenSubDropdown(openSubDropdown === key ? null : key);
    setOpenItems((prev) => ({ ...prev, [key]: false }));
  };

  const toggleItemDetails = (key) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // ------------------ Dropdown Data ------------------
  const dropdownData = {
    pooja: {
      title: "Pooja Path",
      image: dropdown1,
      col1: { title: "Product", items: ["Dhoop Cone in 6 fragrances", "Stick Dhoop in 6 fragrances", "Sambrani Cups (Guggal & Loban)"] },
      col2: { title: "Price", items: ["70/150 Rs", "80 Rs", "70 Rs"] },
      col3: { title: "Quantity", items: ["100 gm / 200 gm", "100 gm", "1 Box (12 pcs)"] },
    },
    panchgavya: {
      title: "Panchgavya Cosmetic Products",
      image: dropdown1,
      col1: { title: "Product", items: ["Neem Soap", "Ubtan Soap", "Face Pack"] },
      col2: { title: "Price", items: ["50 Rs", "50 Rs", "70 Rs"] },
      col3: { title: "Quantity", items: ["100 gm", "100 gm", "100 gm"] },
    },
    sanitary: {
      title: "Herbal Sanitary Products",
      image: dropdown1,
      col1: { title: "Product", items: ["Herbal Hand Wash", "Sandal Hand Wash", "Glass Cleaner"] },
      col2: { title: "Price", items: ["80 Rs", "80 Rs", "60 Rs"] },
      col3: { title: "Quantity", items: ["250 ml", "250 ml", "500 ml"] },
    },
  };

  // ------------------ Render SubDropdown ------------------
  const renderSubDropdown = (menuKey) => {
    const data = dropdownData[menuKey];
    if (!data) return null;
    const cols = [data.col1, data.col2, data.col3];

    return (
      <div className="ps-3 mt-2">
        {cols.map((col, colIdx) => (
          <div key={colIdx} className="mb-2">
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-semibold">{col.title}</span>
              <i
                className={`bi ${openSubDropdown === `${menuKey}-${colIdx}` ? "bi-chevron-up" : "bi-chevron-down"}`}
                onClick={() => toggleSubDropdown(`${menuKey}-${colIdx}`)}
              ></i>
            </div>

            {openSubDropdown === `${menuKey}-${colIdx}` &&
              col.items.map((item, idx) => (
                <div key={idx} className="ps-3 mt-1 d-flex flex-column align-items-start">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <span>{item}</span>
                    <i
                      className={`bi ${openItems[`${menuKey}-${colIdx}-${idx}`] ? "bi-chevron-up" : "bi-chevron-down"}`}
                      onClick={() => toggleItemDetails(`${menuKey}-${colIdx}-${idx}`)}
                    ></i>
                  </div>

                  {openItems[`${menuKey}-${colIdx}-${idx}`] && (
                    <div className="ps-3 mt-1 w-100 d-flex justify-content-between">
                      <span>Product: {data.col1.items[idx]}</span>
                      <span>Price: {data.col2.items[idx]}</span>
                      <span>Quantity: {data.col3.items[idx]}</span>
                    </div>
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>
    );
  };

  // ------------------ Render Main Dropdown ------------------
  const renderDropdownItem = (key) => {
    const data = dropdownData[key];
    if (!data) return null;

    return (
      <li className="nav-item mb-2">
        <div className="d-flex justify-content-between align-items-center">
          <a
            href="#"
            className="nav-link fw-semibold bluetext w-100"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown(key);
            }}
          >
            {data.title}
          </a>
          <i
            className={`bi ms-2 ${openDropdown === key ? "bi-chevron-up" : "bi-chevron-down"}`}
            onClick={() => toggleDropdown(key)}
          ></i>
        </div>
        {openDropdown === key && renderSubDropdown(key)}
      </li>
    );
  };

  // ------------------ JSX ------------------
  return (
    <div className="container py-3">
      {/* Mobile Header */}
      <div className="d-flex d-lg-none align-items-center justify-content-between mobile-header">
        <button className="navbar-toggler border-0" onClick={toggleMenu}>
          {menuOpen ? "×" : "☰"}
        </button>
        <img src={shreejilogo} alt="Logo" height="60" width="90" />
        <button
          onClick={() => setShowCart((prev) => !prev)}
          className="btns fw-semibold text-light bg-blue d-flex align-items-center gap-1"
        >
          Rs {(Number(totalPrice) || 0).toFixed(2)} ({totalItems || 0})
        </button>
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

      {/* Hamburger Menu */}
      {menuOpen && (
        <ul className="list-unstyled p-3 bg-light rounded d-lg-none">
          {Object.keys(dropdownData).map((key) => renderDropdownItem(key))}
          <li>
            <a className="dropdown-item fw-bold" href="#">
              Blog
            </a>
          </li>
        </ul>
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
            {/* Account Button */}
            <Link
              to="/login"
              className="btns fw-semibold bg-light bluetext blueborder d-flex align-items-center justify-content-center gap-2 text-decoration-none"
              style={{ minWidth: "150px", padding: "8px 12px" }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M18.3333 19.25V17.4167C18.3333 16.4442 17.947 15.5116 17.2593 14.8239C16.5717 14.1363 15.6391 13.75 14.6666 13.75H7.33329C6.36083 13.75 5.4282 14.1363 4.74057 14.8239C4.05293 15.5116 3.66663 16.4442 3.66663 17.4167V19.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 10.0833C13.0251 10.0833 14.6667 8.44171 14.6667 6.41667C14.6667 4.39162 13.0251 2.75 11 2.75C8.975 2.75 7.33337 4.39162 7.33337 6.41667C7.33337 8.44171 8.975 10.0833 11 10.0833Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Account
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => setShowCart((prev) => !prev)}
              className="btns fw-semibold text-light bg-blue d-flex align-items-center justify-content-center gap-2"
              style={{ minWidth: "150px", padding: "8px 12px" }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ marginLeft: "-2px" }}>
                <path className="circle" d="M9.5 20C9.77614 20 10 19.7761 10 19.5C10 19.2239 9.77614 19 9.5 19C9.22386 19 9 19.2239 9 19.5C9 19.7761 9.22386 20 9.5 20Z" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path className="circle" d="M18.5 20C18.7761 20 19 19.7761 19 19.5C19 19.2239 18.7761 19 18.5 19C18.2239 19 18 19.2239 18 19.5C18 19.7761 18.2239 20 18.5 20Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 3H6.27273L8.46545 13.7117C8.54027 14.08 8.7452 14.4109 9.04436 14.6464C9.34351 14.8818 9.71784 15.0069 10.1018 14.9997H18.0545C18.4385 15.0069 18.8129 14.8818 19.112 14.6464C19.4112 14.4109 19.6161 14.08 19.6909 13.7117L21 6.9999H7.09091" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Rs {(Number(totalPrice) || 0).toFixed(2)} ({totalItems || 0})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
