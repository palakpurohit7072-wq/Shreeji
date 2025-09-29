import React from "react";
import dropdown1 from "../assets/dropdown1.png";

const DropdownMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg border-top border-bottom">
      <div className="container">      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>     
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav gap-3">

            <li className="nav-item dropdown position-static">
              <a
                className="nav-link fw-semibold d-flex align-items-center"
                href="#"
                data-bs-toggle="dropdown"
              >
                Agarbatti <i className="bi bi-chevron-down ms-1"></i>
              </a>

              <div className="dropdown-menu mt-0 p-4">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-3">
                      <h6 className="fw-bold">By Brand</h6>
                      <ul className="list-unstyled">
                        <li><a className="dropdown-item" href="#">Cycle</a></li>
                        <li><a className="dropdown-item" href="#">Cycle Speciality</a></li>
                        <li><a className="dropdown-item" href="#">Amogha</a></li>
                        <li><a className="dropdown-item" href="#">Heritage</a></li>
                        <li><a className="dropdown-item" href="#">Pushkarini</a></li>
                        <li><a className="dropdown-item" href="#">Lia</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h6 className="fw-bold">By Type</h6>
                      <ul className="list-unstyled">
                        <li><a className="dropdown-item" href="#">Scented Bathi</a></li>
                        <li><a className="dropdown-item" href="#">Masala Bathi</a></li>
                        <li><a className="dropdown-item" href="#">Base Bathi</a></li>
                        <li><a className="dropdown-item" href="#">Long Bathi</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h6 className="fw-bold">By Fragrance</h6>
                      <ul className="list-unstyled">
                        <li><a className="dropdown-item" href="#">Fruity</a></li>
                        <li><a className="dropdown-item" href="#">Sandalwood</a></li>
                        <li><a className="dropdown-item" href="#">Woody</a></li>
                        <li><a className="dropdown-item" href="#">Floral</a></li>
                        <li><a className="dropdown-item" href="#">Oriental</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <img src={dropdown1} alt="dropdownimg1" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Normal Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link fw-semibold d-flex align-items-center" href="#" data-bs-toggle="dropdown">
                Bambooless Incense <i className="bi bi-chevron-down ms-1"></i>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Type 1</a></li>
                <li><a className="dropdown-item" href="#">Type 2</a></li>
              </ul>
            </li>          
            <li className="nav-item"><a className="nav-link fw-semibold" href="#">Dhoop & Sambrani</a></li>
            <li className="nav-item"><a className="nav-link fw-semibold" href="#">Puja Samagri</a></li>
            <li className="nav-item"><a className="nav-link fw-semibold" href="#">Home & Personal Care</a></li>
            <li className="nav-item"><a className="nav-link fw-semibold text-primary" href="#">Gifting</a></li>
            <li className="nav-item"><a className="nav-link fw-semibold" href="#">Custom Incense</a></li>
            <li className="nav-item"><a className="nav-link fw-semibold" href="#">Blog</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DropdownMenu;

