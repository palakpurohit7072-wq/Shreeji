import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { Form, FormControl } from "react-bootstrap";
import shreejilogo from "../assets/shreejilogo.png";
import dropdown1 from "../assets/dropdown1.png";
import "./Navbar.css";

const dropdownData = {
  pooja: {
    title: "Pooja Path",
    col1: {
      title: "Product Type",
      items: [
        { name: "Dhoop Cone", subItems: ["Gugal Cone Dhoop", "Loban Cone Dhoop", "Sandalwood Cone Dhoop", "Jasmine Cone Dhoop", "Lavender Cone Dhoop", "Rose Cone Dhoop"] },
        { name: "Stick Dhoop", subItems: ["Gugal Stick Dhoop", "Loban Stick Dhoop", "Sandalwood Stick Dhoop", "Jasmine Stick Dhoop", "Lavender Stick Dhoop", "Rose Stick Dhoop"] },
        "Sambrani Cups (Guggal & Loban)",
        "Navgrah Shanti Stick Dhoop",
        "Sambrani Cups (21 ingredients)",
        "Havan Tikki",
        "Havan Samagri",
        "Gaukripa Chandan Tikka",
      ],
    },
    col3: {
      title: "Quantity",
      items: ["100 gm / 200 gm", "100 gm", "1 Box (12 pcs)", "100 gm", "1 Box (12 pcs)", "12 pcs", "250 gm", "1 pcs"],
    },
    image: dropdown1,
  },
  panchgavya: {
    title: "Panchgavya Cosmetic Products",
    col1: {
      title: "Product Type",
      items: [
        "Panchgavya Neem, Aloe Vera, Tulsi Soap",
        "Panchgavya Ubtan Soap",
        "Panchgavya Milk Soap",
        "Panchgavya Aloe Vera Soap",
        "Panchgavya Amla Reetha & Shikakai Shampoo Regular",
        "Panchgavya Advance Hair Oil",
        "Face Pack",
        "Face Cream",
      ],
    },
    col3: { title: "Quantity", items: ["100 gm", "100 gm", "100 gm", "100 gm", "250 ml", "100 ml", "100 gm", "100 gm"] },
    image: dropdown1,
  },
  sanitary: {
    title: "Herbal Sanitary Products",
    col1: {
      title: "Product Type",
      items: [
        "Herbal Neem-Tulsi Hand Wash",
        "Herbal Sandal Wood Hand Wash",
        "Herbal Lavender Hand Wash",
        "Herbal Rakh & Neem Dishwash Gel",
        "Herbal Lemon Dishwash Gel",
        "Gaunile Floor Cleaner",
        "Herbal Toilet Cleaner",
        "Glass Cleaner",
        "Bathroom Cleaner",
      ],
    },
    col3: { title: "Quantity", items: ["250 ml / 500 ml", "250 ml / 500 ml", "250 ml / 500 ml", "250 ml / 500 ml", "250 ml / 500 ml", "1 Ltr / 5 Ltr", "250 ml / 500 ml", "500 ml", "500 ml"] },
    image: dropdown1,
  },
  murti: {
    title: "Murti",
    col1: { title: "Product Type", items: ["Lord Ganesha Murti", "Lord Krishna Murti", "Lord Lakshmee Ganesh Murti"] },
    col3: { title: "Quantity", items: ["6 inch", "8 inch", "10 inch"] },
    image: dropdown1,
  },
  others: {
    title: "Others",
    col1: { title: "Product Type", items: ["GauNile Floor Cleaner", "Gaumay Vaidik Asana", "Gaumay Vaidik Mela"] },
    col3: { title: "Quantity", items: ["1 Ltr / 5 Ltr", "1 pcs", "1 pcs"] },
    image: dropdown1,
  },
};

function Navbar({ setShowCart, setShowWishlist, totalItems, totalPrice }) {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  const renderSubItems = (subItems, parentKey, idx) => (
    <ul className="list-unstyled ps-3 mb-1">
      {subItems.map((sub, subIdx) => (
        <li key={subIdx}>
          <a href="#" className="nav-link small">{sub}</a>
        </li>
      ))}
    </ul>
  );

  const renderDropdownContent = (key) => {
    const data = dropdownData[key];
    if (!data) return null;

    return (
      <div className="p-3 bg-light rounded mb-3 border">
        <div className="row text-start">
          {data.col1 && (
            <div className="col-12 mb-2">
              <strong>{data.col1.title}</strong>
              <ul className="list-unstyled">
                {data.col1.items.map((item, idx) => (
                  <li key={idx}>
                    {item.subItems ? (
                      <>
                        <span
                          className="nav-link small d-flex justify-content-between align-items-center"
                          style={{ cursor: "pointer" }}
                          onClick={() => setOpenSubDropdown(openSubDropdown === `${key}-${idx}` ? null : `${key}-${idx}`)}
                        >
                          {item.name} <span>{openSubDropdown === `${key}-${idx}` ? "▾" : "▸"}</span>
                        </span>
                        {openSubDropdown === `${key}-${idx}` && renderSubItems(item.subItems, key, idx)}
                      </>
                    ) : (
                      <a href="#" className="nav-link small">{item.name || item}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.col3 && (
            <div className="col-12 mb-2">
              <strong>{data.col3.title}</strong>
              <ul className="list-unstyled">
                {data.col3.items.map((item, idx) => (
                  <li key={idx}><a href="#" className="nav-link small">{item}</a></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container py-3">
      {/* Mobile Header */}
      <div className="d-flex d-lg-none align-items-center justify-content-between mobile-header">
        <button className="navbar-toggler border-0" onClick={toggleMenu}>{menuOpen ? "×" : "☰"}</button>
        <img src={shreejilogo} alt="Logo" height="60" width="90" />
        <Link to="/wishlist">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="mobile-heart">
            <path d="M29.728 10.656q0-1.472-0.384-2.56t-0.992-1.76-1.472-1.056-1.664-0.576-1.76-0.128-1.984 0.448-1.984 1.152-1.536 1.28-1.088 1.088q-0.32 0.416-0.864 0.416t-0.864-0.416q-0.448-0.48-1.088-1.088t-1.536-1.28-1.984-1.152-1.984-0.448-1.76 0.128-1.664 0.576-1.472 1.056-0.992 1.76-0.384 2.56q0 2.976 3.36 6.336l10.368 9.984 10.368-9.984q3.36-3.36 3.36-6.336zM32 10.656q0 3.936-4.096 8.032l-11.104 10.72q-0.32 0.32-0.8 0.32t-0.8-0.32l-11.136-10.752q-0.16-0.16-0.48-0.48t-0.992-1.184-1.216-1.728-0.96-2.144-0.416-2.464q0-3.936 2.272-6.144t6.272-2.24q1.088 0 2.24 0.384t2.144 1.056 1.728 1.216 1.344 1.216q0.64-0.64 1.344-1.216t1.728-1.216 2.144-1.056 2.24-0.384q4 0 6.272 2.24t2.272 6.144z"></path>
          </svg>
        </Link>
      </div>

      {/* Mobile Search */}
      <div className="d-lg-none mt-2">
        <Form className="d-flex w-100">
          <FormControl type="search" placeholder="Search for Dhoop Stick" aria-label="Search" style={{ height: "40px", borderRadius: "10px" }} />
        </Form>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="list-unstyled p-3 bg-light rounded d-lg-none">
          {Object.keys(dropdownData).map((key) => (
            <li key={key} className="mb-2">
              <a href="#" className="nav-link fw-semibold d-flex justify-content-between align-items-center"
                onClick={(e) => { e.preventDefault(); setOpenDropdown(openDropdown === key ? null : key); setOpenSubDropdown(null); }}>
                {dropdownData[key].title} <span>{openDropdown === key ? "▾" : "▸"}</span>
              </a>
              {openDropdown === key && renderDropdownContent(key)}
            </li>
          ))}
        </ul>
      )}

      {/* Desktop Navbar */}
      <div className="d-none d-lg-flex justify-content-between align-items-center desktop-header flex-wrap">
        <div className="left_part">
          <img src={shreejilogo} alt="Logo" height="80" width="100" />
        </div>
        <div className="right_part d-flex align-items-center gap-3 flex-grow-1 justify-content-end">
          <Form className="d-flex flex-grow-1" style={{ maxWidth: "690px" }}>
            <FormControl type="search" placeholder="Search for Dhoop Stick" aria-label="Search" />
          </Form>
          <div className="buttons-wrapper d-flex align-items-center gap-2">
            <Link
              to="/login"
              className="btns fw-semibold bg-light bluetext blueborder d-flex align-items-center justify-content-center gap-2 text-decoration-none"
              style={{ minWidth: "150px", padding: "8px 12px" }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M18.3333 19.25V17.4167C18.3333 16.4442 17.947 15.5116 17.2593 14.8239C16.5717 14.1363 15.6391 13.75 14.6666 13.75H7.33329C6.36083 13.75 5.4282 14.1363 4.74057 14.8239C4.05293 15.5116 3.66663 16.4442 3.66663 17.4167V19.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 10.0833C13.0251 10.0833 14.6667 8.44171 14.6667 6.41667C14.6667 4.39162 13.0251 2.75 11 2.75C8.975 2.75 7.33337 4.39162 7.33337 6.41667C7.33337 8.44171 8.975 10.0833 11 10.0833Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

            <button onClick={() => setShowWishlist(true)} className="btn border-0 bg-transparent p-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="heart-icon d-none d-lg-block">
                <path d="M29.728 10.656q0-1.472-0.384-2.56t-0.992-1.76-1.472-1.056-1.664-0.576-1.76-0.128-1.984 0.448-1.984 1.152-1.536 1.28-1.088 1.088q-0.32 0.416-0.864 0.416t-0.864-0.416q-0.448-0.48-1.088-1.088t-1.536-1.28-1.984-1.152-1.984-0.448-1.76 0.128-1.664 0.576-1.472 1.056-0.992 1.76-0.384 2.56q0 2.976 3.36 6.336l10.368 9.984 10.368-9.984q3.36-3.36 3.36-6.336zM32 10.656q0 3.936-4.096 8.032l-11.104 10.72q-0.32 0.32-0.8 0.32t-0.8-0.32l-11.136-10.752q-0.16-0.16-0.48-0.48t-0.992-1.184-1.216-1.728-0.96-2.144-0.416-2.464q0-3.936 2.272-6.144t6.272-2.24q1.088 0 2.24 0.384t2.144 1.056 1.728 1.216 1.344 1.216q0.64-0.64 1.344-1.216t1.728-1.216 2.144-1.056 2.24-0.384q4 0 6.272 2.24t2.272 6.144z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
