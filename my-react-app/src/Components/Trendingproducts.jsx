import React from "react";
import "./Trendingproducts.css";

const Trendingproducts = () => {
  const products = [
    {
      id: 1,
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "NEW LAUNCHES JUST DROPPED!",
      desc: "Get ready to enhance your sacred space with our newest arrivals.",
    },
    {
      id: 2,
      video: "https://www.w3schools.com/html/movie.mp4",
      title: "100 % PURE BHIMSENI CAMPHOR TABLETS",
      desc: "Karpure Bhimseni Camphor Tablets is made from absolute high quality, 100% pure camphor.",
    },
    {
      id: 3,
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "NAIVEDYA CUP SAMBRANI 15 CUPS",
      desc: "Instantly refresh and energize your living spaces with Om Shanthi Naivedya Cup Sambrani.",
    },
    {
      id: 4,
      video: "https://www.w3schools.com/html/movie.mp4",
      title: "NAIVEDYA GOLD SERIES, SAMBRANI CUPS",
      desc: "Handcrafted charcoal-free Havan cups with Free Holder.",
    },
  ];

  return (
    <div className="container trendcontainer my-5">
      <h3 className="fw-bold mb-4 font_main_section bluetext sansfamily">Trending Products</h3>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card trending-card h-100 shadow-sm">
              {/* Video instead of Image */}
              <video
                className="card-video"
                src={product.video}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="card-body">
                <h6 className="card-title fw-bold sansfamily bluetext">{product.title}</h6>
                <p className="card-text sansfamily bluetext font_size"> {product.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trendingproducts;
