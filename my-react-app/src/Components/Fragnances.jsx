import React from "react";
import "./Fragnance.css";
import circle2 from "../assets/circle2.png";
import circle3 from "../assets/circle3.png";
import circle4 from "../assets/circle4.png";
import circle5 from "../assets/circle5.png";
import circle6 from "../assets/circle6.png";
import circle7 from "../assets/circle7.png";
import circle8 from "../assets/circle8.png";

const Fragrances = () => {
  const items = [
    { title: "Best Sellers", img: circle2 },
    { title: "Agarbatti", img: circle3 },
    { title: "Puja Essentials", img: circle4 },
    { title: "Bambooless Incense", img: circle5 },
    { title: "Incense Cones", img: circle6 },
    { title: "Karpure", img: circle7 },
    { title: "Eco-Friendly Havan Cups", img: circle8 },
    { title: "Puja Accessories", img: circle2 },
  ];

  return (
    <div className="container fragnancepart my-4">
      <h1 className="bluetext mb-4 fragnance_heading fw-semibold sansfamily">
        Gaumay sugandhit cone Dhoop
      </h1>

      <div className="fragrance-row">
        {items.map((item, index) => (
          <div key={index} className="text-center bluetext">
            <div className="round_fragnance_img rounded-circle d-inline-block mb-2">
              <img src={item.img} alt={item.title} className="img-fluid" />
            </div>
            <p className="sansfamily">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fragrances;
