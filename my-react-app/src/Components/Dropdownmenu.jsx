import React from "react";
import dropdown1 from "../assets/dropdown1.png"; 
import "./Dropdown.css";

const DropdownMenu = () => {
  // Reusable Mega Dropdown with dynamic content
  const megaDropdown = (title, content, image) => (
    <li className="nav-item dropdown position-static mega-dropdown">
      <a
        className="nav-link fw-semibold bluetext"
        href="#"
        data-bs-toggle="dropdown"
      >
        {title} <i className="bi bi-chevron-down ms-1"></i>
      </a>
      <div className="dropdown-menu mt-0 p-4 w-100 border-top">
        <div className="container-fluid">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3">
              <h6 className="fw-bold bluetext">{content.col1.title}</h6>
              <ul className="list-unstyled">
                {content.col1.items.map((item, idx) => (
                  <li key={idx}>
                    <a className="dropdown-item bluetext" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="col-md-3">
              <h6 className="fw-bold">{content.col2.title}</h6>
              <ul className="list-unstyled">
                {content.col2.items.map((item, idx) => (
                  <li key={idx}>
                    <a className="dropdown-item" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-md-3">
              <h6 className="fw-bold">{content.col3.title}</h6>
              <ul className="list-unstyled">
                {content.col3.items.map((item, idx) => (
                  <li key={idx}>
                    <a className="dropdown-item" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 (Image) */}
            <div className="col-md-3">
              <img src={image} alt="dropdownimg" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </li>
  );

  // =========================
  // Different Dropdown Content
  // =========================

  const poojaPathContent = {
    col1: {
      title: "Product Type",
      items: [
        "Dhoop Cone in 6 fragrances",
        "Stick Dhoop in 6 fragrances",
        "Sambrani Cups in Guggal & Loban",
        "Navgrah Shanti Stick Dhoop",
        "Sambrani Cups (21 ingredients)",
        "Havan Tikki",
        "Havan Samagri",
        "Gaukripa Chandan Tikka",
        "Deepak 1.5 inch",
        "Deepak 2.5 inch",
      ],
    },
    col2: {
      title: "By Type",
      items: ["Scented Bathi", "Masala Bathi"],
    },
    col3: {
      title: "By Fragrance",
      items: ["Fruity", "Woody", "Floral", "Herbal"],
    },
  };

  const panchgavyaContent = {
    col1: {
      title: "Skin Care",
      items: [
        "Aloe Vera Gel",
        "Neem Soap",
        "Turmeric Face Wash",
        "Herbal Face Pack",
        "Moisturizing Cream",
      ],
    },
    col2: {
      title: "Hair Care",
      items: [
        "Amla Hair Oil",
        "Herbal Shampoo",
        "Conditioner",
        "Anti-Dandruff Hair Oil",
      ],
    },
    col3: {
      title: "Wellness",
      items: [
        "Body Lotion",
        "Lip Balm",
        "Hand & Foot Cream",
        "Herbal Scrub",
      ],
    },
  };

  const sanitaryContent = {
    col1: {
      title: "Sanitary Pads",
      items: [
        "Herbal Pads Regular",
        "Herbal Pads XL",
        "Overnight Pads",
        "Ultra Thin Pads",
      ],
    },
    col2: {
      title: "Menstrual Cups",
      items: ["Small Size Cup", "Medium Size Cup", "Large Size Cup"],
    },
    col3: {
      title: "Other Products",
      items: ["Panty Liners", "Disposal Bags", "Intimate Wash"],
    },
  };

  return (
    <nav className="navbar navbar-expand-lg border-top border-bottom main-navbar d-none d-lg-block">
      <div className="container Dropdowncontainer">
        <div className="collapse navbar-collapse show" id="mainNavbar">
          <ul className="navbar-nav gap-3">
            {megaDropdown("Pooja Path", poojaPathContent, dropdown1)}
            {megaDropdown("Panchgavya Cosmetic Products", panchgavyaContent, dropdown1)}
            {megaDropdown("Herbal Sanitary Products", sanitaryContent, dropdown1)}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DropdownMenu;
