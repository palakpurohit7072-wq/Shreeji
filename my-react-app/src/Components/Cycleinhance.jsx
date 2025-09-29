import React from 'react';
import "./Cycleinhance.css";
import yellowcircle1 from "../assets/yellowcircle1.png";
import yellowcircle2 from "../assets/yellowcircle2.png";
import yellowcircle3 from "../assets/yellowcircle3.png";
import yellowcircle4 from "../assets/yellowcircle4.png";
import yellowcircle5 from "../assets/yellowcircle5.png";
import yellowcircle6 from "../assets/yellowcircle6.png";
import yellowcircle7 from "../assets/yellowcircle7.png";
import yellowcircle8 from "../assets/yellowcircle8.png";

// 🔹 Items data array
const items = [
  { title: "Zero carbon manufacturer", img: yellowcircle1 },
  { title: "Plants sacred native trees", img: yellowcircle2 },
  { title: "International fragrance standards", img: yellowcircle3 },
  { title: "Trusted in 75 countries", img: yellowcircle4 },
  { title: "Global best practices", img: yellowcircle5 },
  { title: "Ethical practices", img: yellowcircle6 },
  { title: "Pure ingredients", img: yellowcircle7 },
  { title: "Three generations in fragrance creation", img: yellowcircle8 },
];

const Cycleinhance = () => {
  return (
    <div className="container Cycleinhancepart my-4">
      {/* 🔹 Heading */}
      <h2 className="bluetext mb-4 fragnance_heading fw-semibold sansfamily">
        Cycle Incense Makes Sense
      </h2>

      {/* 🔹 Main content wrapper */}
      <div className="d-flex justify-content-center flex-wrap cycle_content flex-lg-nowrap">
        {items.map((item, index) => (
          <div key={index} className="text-center bluetext">
            {/* 🔹 Circle image */}
            <div className="round_fragnance_img rounded-circle d-inline-block mb-2">
              <img 
                src={item.img} 
                alt={item.title} 
                className="img-fluid fragnance-img" 
              />
            </div>          

            {/* 🔹 Text below image */}
            <p className="sansfamily fragnance-text bluetext">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cycleinhance;

