import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

// Images
import icon from "../assets/icon.png";
import tel from "../assets/tel.png";
import mail from "../assets/mail.png";
import generated from "../assets/generated.png";
import yellowcircleicon from "../assets/yellowcircleicon.png";
import payment from "../assets/payment.png";

const Footer = () => {
  return (
    <>
      {/* 🔹 Top Banner Section */}
      <section className="footer-top-banner py-5">
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                <div className="icon-circle bg-warning d-flex align-items-center justify-content-center">
                  <img src={yellowcircleicon} alt="Secure Payment" width="40" height="40" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1 sansfamily bluetext">Secure payment</h5>
                  <p className="mb-0 sansfamily bluetext">Shop confidently with a secure payment gateway</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                <div className="icon-circle bg-warning d-flex align-items-center justify-content-center">
                  <img src={generated} alt="Free Delivery" width="40" height="40" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1 sansfamily bluetext">Free delivery</h5>
                  <p className="mb-0 sansfamily bluetext">
                    Free delivery on all orders above ₹399.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Main Footer Section */}
      <footer className="footersection bg-blue text-light pt-5 pb-3">
        <div className="container">
          {/* Top Columns */}
          <div className="row footer-top-row mb-4 gy-4">
            {/* ABOUT */}
            <div className="col-md-3">
              <h6 className="footer_title">ABOUT</h6>
              <p className="footer_col_text">
                Discover handcrafted luxury incense, pure puja essentials, premium gifting
                range, and curated spiritual products loved in 75 countries. Rooted in
                tradition, innovation, and eco-consciousness, Shreejeegavya.in brings the
                essence of Indian spirituality to the world, uplifting and connecting you to
                the divine.
              </p>
            </div>

            {/* POLICIES */}
            <div className="col-md-2">
              <h6 className="footer_title">POLICIES</h6>
              <ul className="list-unstyled footer_col_text">
                <li><Link to="/privacy" className="text-light text-decoration-none">Privacy Policy</Link></li>
                <li><Link to="/shippingdelivery" className="text-light text-decoration-none">Shipping & Delivery</Link></li>
                <li><Link to="/termsandcondition" className="text-light text-decoration-none">Terms & Conditions</Link></li>
                <li><Link to="/returnandrefund" className="text-light text-decoration-none">Returns & Refund</Link></li>
              </ul>
            </div>

            {/* BRANDS */}
            <div className="col-md-2">
              <h6 className="footer_title">BRANDS</h6>
              <ul className="list-unstyled footer_col_text">
                {["Amogha", "Gavi", "Karpure", "Pujaroom", "Pujayu", "Soulveda", "Pureprayer", "Om Shanthi", "Sampoorna Dhyan"].map((brand) => (
                  <li key={brand}><a href="#" className="text-light text-decoration-none">{brand}</a></li>
                ))}
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div className="col-md-2">
              <h6 className="footer_title">QUICK LINKS</h6>
              <ul className="list-unstyled footer_col_text">
                <li><Link to="/track" className="text-light text-decoration-none">Track Your Order</Link></li>
                <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
                <li><Link to="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
                <li><a href="#" className="text-light text-decoration-none">Blog Posts</a></li>
                <li><a href="#" className="text-light text-decoration-none">Vision & Mission</a></li>
                <li><a href="#" className="text-light text-decoration-none">Enquiry Form</a></li>
                <li><a href="#" className="text-light text-decoration-none">Sitemap</a></li>
              </ul>
            </div>
          </div>

          {/* Middle Row */}
          <div className="row gy-4 align-items-start">
            {/* Business Info */}
            <div className="col-md-3">
              <h6 className="middlefooter_heading">BUSINESS INFORMATION</h6>
              <div className="footer-contact d-flex align-items-start gap-2 mb-2">
                <img src={icon} alt="Location" width="20" className="mt-1" />
                <p className="mb-0">Vanivilasa Road, Mysuru, Karnataka - 570004</p>
              </div>
              <div className="footer-contact d-flex align-items-start gap-2 mb-2">
                <img src={tel} alt="Phone" width="20" className="mt-1" />
                <p className="mb-0">1800-425-7729</p>
              </div>
              <div className="footer-contact d-flex align-items-start gap-2">
                <img src={mail} alt="Email" width="20" className="mt-1" />
                <p className="mb-0">care@shreejeegavya.in</p>
              </div>
            </div>

            {/* Follow */}
            <div className="col-md-3">
              <h6 className="middlefooter_heading">FOLLOW</h6>
              <div className="d-flex gap-3 fs-5">
                {["envelope", "facebook", "instagram", "linkedin", "pinterest", "youtube"].map((icon, i) => (
                  <a key={i} href="#" className="text-light"><i className={`bi bi-${icon}`}></i></a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-md-3">
              <h6 className="middlefooter_heading">NEWSLETTER</h6>
              <form className="d-flex">
                <input type="email" className="form-control me-2" placeholder="Enter your email" />
                <button className="btn btn-secondary" type="submit">
                  <i className="bi bi-send"></i>
                </button>
              </form>
            </div>

            {/* Payment */}
            <div className="col-md-3">
              <h6 className="middlefooter_heading">PAYMENT METHODS</h6>
              <div className="bg-light p-3 rounded text-center">
                <img src={payment} alt="Payment Methods" className="img-fluid" />
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="row mt-4 border-top pt-3">
            <div className="col-md-6">
              <p className="mb-0">Copyright © 2025 Shree Jee Gavya.in</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0">Developed By BOOST STAR Experts</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
