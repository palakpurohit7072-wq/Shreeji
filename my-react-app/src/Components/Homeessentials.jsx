import React from "react";
import "./Homeessential.css";
import slider1 from "../assets/slider1.jpeg";
import slider2 from "../assets/slider2.jpeg";
import slider3 from "../assets/slider3.jpeg";
import slide from "../assets/slide.jpg";


const products = [
    {
        title: "Bathroom Freshener",
        desc: "Refresh Your Bathroom, Elevate Every Breath!",
        img: slider1,
    },
    {
        title: "Car freshener",
        desc: "A Fresh Start for Every Drive!",
        img: slider2,
    },
    {
        title: "Room Fresheners",
        desc: "Revive Every Room with Lasting Freshness!",
        img: slider3,
    },
    {
        title: "Gavi Collection",
        desc: "Elevating Every Ritual with Purity!",
        img: slide,
    },
];

const HomeEssentials = () => {
    return (
        <div className="container-fluid main_homeessential py-3">
            <div className="container  Homeessential_part my-5">
                <h2 className="mb-4 homeessential_text fw-semibold bluetext sansfamily">Home Essentials</h2>
                <div className="row g-4">
                    {products.map((product, index) => (
                        <div className="col-12 col-sm-6 col-lg-3" key={index}>
                            <div className="card h-100 shadow-sm ">
                                <img
                                    src={product.img}
                                    className="card-img-top p-3"
                                    alt={product.title}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h3 className="card-titles fw-semibold bluetext sansfamily">
                                        {product.title}
                                    </h3>
                                    <p className="card-text bluetext sansfamily">{product.desc}</p>
                                    <div className="mt-auto d-flex justify-content-center">
                                        <button className="px-4 shop_btn fs-6 yellow_background yellowborder sansfamily fw-semibold">
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default HomeEssentials;
