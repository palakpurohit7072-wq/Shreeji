import React from "react";
import "./Footer.css";

// Apni saari images import karo
import icon from "../assets/icon.png";
import tel from "../assets/tel.png";
import mail from "../assets/mail.png";
import generated from "../assets/generated.png";
import yellowcircleicon from "../assets/yellowcircleicon.png";
import payment from "../assets/payment.png"; // ek single image jisme saare payment logos hai

const Footer = () => {
    return (
        <>
            {/* Secure Payment & Free Delivery Section */}
            <section className="footer-top-banner py-5">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Secure Payment */}
                        <div className="col-md-6 mb-3 mb-md-0">
                            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center payment_part">
                                <div className="icon-circle bg-warning d-flex align-items-center justify-content-center me-md-3 mb-2 mb-md-0">
                                    <img src={yellowcircleicon} alt="Secure Payment" width="40" height="40" />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1 secure_payment_heading sansfamily bluetext">Secure payment</h5>
                                    <p className="mb-0 secure_payment_title sansfamily bluetext">
                                        Shop confidently with a secure payment gateway
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Free Delivery */}
                        <div className="col-md-6">
                            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center payment_part">
                                <div className="icon-circle bg-warning d-flex align-items-center justify-content-center me-md-3 mb-2 mb-md-0">
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

            {/* Actual Footer */}
            <footer className="footersection bg-blue text-light pt-5 pb-3 mt-0">
                <div className="container">
                    {/* Top Section */}
                    <div className="row footer-top-row d-flex">
                        {/* About */}
                        <div className="col-md-3 mb-4">
                            <h6 className="about_column footer_title sansfamily font_size fw-medium text-light">ABOUT</h6>
                            <p className="small footer_col_text sansfamily font_size text-light">
                                Discover handcrafted luxury incense, pure puja essentials, premium gifting
                                range, and curated spiritual products loved in 75 countries. Rooted in
                                tradition, innovation, and eco-consciousness, Shreejeegavya.in brings the essence
                                of Indian spirituality to the world, uplifting and connecting you to the
                                divine.
                            </p>
                        </div>

                        {/* Policies */}
                        <div className="col-md-2 mb-4">
                            <h6 className="sansfamily fw-medium footer_title font_size">POLICIES</h6>
                            <ul className="list-unstyled font_size footer_col_text sansfamily">
                                <li><a href="#" className="text-light text-decoration-none ">Privacy Policy</a></li>
                                <li><a href="#" className="text-light text-decoration-none ">Shipping & Delivery</a></li>
                                <li><a href="#" className="text-light text-decoration-none ">Terms & Conditions</a></li>
                                <li><a href="#" className="text-light text-decoration-none ">Returns & Refund</a></li>
                            </ul>
                        </div>

                        {/* Brands */}
                        <div className="col-md-2 mb-4">
                            <h6 className="sansfamily fw-medium footer_title font_size">BRANDS</h6>
                            <ul className="list-unstyled font_size  footer_col_text sansfamily ">                              
                                <li><a href="#" className="text-light text-decoration-none ">Amogha</a></li>
                                <li><a href="#" className="text-light text-decoration-none ">Gavi</a></li>
                                <li><a href="#" className="text-light text-decoration-none ">Karpure</a></li>
                                <li><a href="#" className="text-light text-decoration-none ">Pujaroom</a></li>
                                <li><a href="#" className="text-light text-decoration-none ">Pujayu</a></li>
                                <li><a href="#" className="text-light text-decoration-none ">Soulveda</a></li>
                                <li><a href="#" className="text-light text-decoration-none ">Pureprayer</a></li>
                                <li><a href="#" className="text-light text-decoration-none ">Om Shanthi</a></li>
                                <li><a href="#" className="text-light text-decoration-none ">Sampoorna Dhyan</a></li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="col-md-2 mb-4">
                            <h6 className="sansfamily fw-medium footer_title font_size">QUICK LINKS</h6>
                            <ul className="list-unstyled  font_size  footer_col_text sansfamily ">
                                <li><a href="#" className="text-light text-decoration-none">Track Your Order</a></li>
                                <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Blog Posts</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Vision & Mission</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Enquiry Form</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div className="row mt-4">
                        {/* Business Information */}
                        <div className="col-md-3 mb-4">
                            <h6 className="sansfamily fw-medium middlefooter_heading font_size">BUSINESS INFORMATION</h6>
                            <div className="d-flex align-items-center mb-1">
                                <img src={icon} alt="Location" width="20" className="me-2" />
                                <p className="middle_col_text font_size sansfamily mb-0">Vanivilasa Road, Mysuru, Karnataka - 570004</p>
                            </div>
                            <div className="d-flex align-items-center mb-1">
                                <img src={tel} alt="Phone" width="20" className="me-2" />
                                <p className="middle_col_text font_size sansfamily mb-0">1800-425-7729</p>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <img src={mail} alt="Email" width="20" className="me-2" />
                                <p className="middle_col_text font_size sansfamily mb-0">@shreejeegavya.in</p>
                            </div>
                        </div>

                        {/* Follow */}
                        <div className="col-md-3 mb-4">
                            <h6 className="sansfamily fw-medium middlefooter_heading font_size">FOLLOW</h6>
                            <div className="d-flex gap-3">
                                <a href="#" className="text-light fs-5"><i className="bi bi-envelope"></i></a>
                                <a href="#" className="text-light fs-5"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="text-light fs-5"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="text-light fs-5"><i className="bi bi-linkedin"></i></a>
                                <a href="#" className="text-light fs-5"><i className="bi bi-pinterest"></i></a>
                                <a href="#" className="text-light fs-5"><i className="bi bi-youtube"></i></a>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="col-md-3 mb-4">
                            <h6 className="sansfamily fw-medium middlefooter_heading">NEWSLETTER</h6>
                            <form className="d-flex">
                                <input
                                    type="email"
                                    className="form-control me-2"
                                    placeholder="Enter your email"
                                />
                                <button className="btn btn-secondary" type="submit">
                                    <i className="bi bi-send"></i>
                                </button>
                            </form>
                        </div>

                        {/* Payment Methods (Single Image) */}
                        <div className="col-md-3 mb-4">
                            <h6 className="sansfamily fw-medium middlefooter_heading">PAYMENT METHODS</h6>
                            <div className="bg-light p-3 rounded text-center">
                                <img src={payment} alt="Payment Methods" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="row mt-4 border-top pt-3">
                        <div className="col-md-6">
                            <p className="mb-0 sansfamily font_size text-light">Copyright © 2025 Shree Jee Gavya.in</p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <p className="mb-0 sansfamily font_size text-light">Developed By BOOST STAR Experts</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;


