import React from "react";
import shreejilogo from "../assets/shreejilogo.png";
import { Form, FormControl } from "react-bootstrap";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container d-flex justify-content-between align-items-center py-3 flex-wrap">
      {/* Left Part */}
      <div className="left_part mb-2 mb-md-0">
        <img src={shreejilogo} alt="Logo" height="80" width="100" />
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
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3333 19.25V17.4167C18.3333 16.4442 17.947 15.5116 17.2593 14.8239C16.5717 14.1363 15.6391 13.75 14.6666 13.75H7.33329C6.36083 13.75 5.4282 14.1363 4.74057 14.8239C4.05293 15.5116 3.66663 16.4442 3.66663 17.4167V19.25"
              stroke="#2c2484"   // ✅ changed to custom color
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 10.0833C13.0251 10.0833 14.6667 8.44171 14.6667 6.41667C14.6667 4.39162 13.0251 2.75 11 2.75C8.975 2.75 7.33337 4.39162 7.33337 6.41667C7.33337 8.44171 8.975 10.0833 11 10.0833Z"
              stroke="#2c2484"   // ✅ changed to custom color
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Account
        </button>




        {/* Cart Button */}
        <button className="btns fw-semibold text-light bg-blue d-flex align-items-center justify-content-center gap-2">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: "-2px" }}
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
          Rs000.0
        </button>
      </div>
    </div>
  );
}

export default Navbar;

