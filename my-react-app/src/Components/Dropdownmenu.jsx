import React from "react";
import dropdown1 from "../assets/dropdown1.png";
import "./Dropdown.css";

const DropdownMenu = () => {
  // Reusable Mega Dropdown function
  const megaDropdown = (title) => (
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
    </li>
  );

  return (
    <nav className="navbar navbar-expand-lg border-top border-bottom main-navbar d-none d-lg-block">
      <div className="container Dropdowncontainer">
        <div className="collapse navbar-collapse show" id="mainNavbar">
          <ul className="navbar-nav gap-3">
            {megaDropdown("Agarbatti")}
            {megaDropdown("Bambooless Incense")}
            {megaDropdown("Dhoop & Sambrani")}
            {megaDropdown("Puja Samagri")}
            {megaDropdown("Home & Personal Care")}
            <li className="nav-item">
              <a className="nav-link fw-bold bluetext" href="#">Gifting</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold bluetext" href="#">Custom Incense</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold bluetext" href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DropdownMenu;


