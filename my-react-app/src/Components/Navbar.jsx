import React from "react";
import logo from "../assets/logo.png";
import { Form, FormControl } from "react-bootstrap";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container d-flex justify-content-between align-items-center py-3 flex-wrap">
      {/* Left Part */}
      <div className="left_part mb-2 mb-md-0">
        <img src={logo} alt="Logo" height="40" />
      </div>

      {/* Right Part */}
      <div className="right_part d-flex align-items-center gap-3 flex-grow-1 justify-content-end flex-wrap">
        {/* Search Form */}
        <Form className="d-flex flex-grow-1" style={{ maxWidth: "690px" }}>
          <FormControl
            type="search"
            placeholder="Search for D"
            aria-label="Search"
            style={{
              width: "100%",
              minWidth: "200px",
              height: "40px",
            }}
          />
        </Form>

        {/* Account Button */}
        <button className="btns fw-semibold bg-light bluetext blueborder d-flex align-items-center justify-content-center gap-2">
          {/* SVG */}
          Account
        </button>

        {/* Cart Button */}
        <button className="btns fw-semibold text-light bg-blue d-flex align-items-center justify-content-center gap-2">
          {/* SVG */}
          Rs000.0
        </button>
      </div>
    </div>
  );
}

export default Navbar;
