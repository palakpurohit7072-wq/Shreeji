import React from "react";
import dropdown1 from "../assets/dropdown1.png";
import "./Dropdown.css";

const Dropdownmenu = () => {
  // 🔹 Reusable Mega Dropdown Function
  const MegaDropdown = ({ title, content, image }) => (
    <li className="nav-item dropdown position-static mega-dropdown">
      <a
        className="nav-link fw-semibold bluetext"
        href="#"
        data-bs-toggle="dropdown"
      >
        {title} <i className="bi bi-chevron-down ms-1"></i>
      </a>

      <div className="dropdown-menu mt-0 p-4 w-100">
        <div className="container-fluid">
          <div className="row">
            {/* ✅ Column 1: Product Type */}
            <div className="col-md-4">
              <h6 className="fw-bold bluetext">{content.col1.title}</h6>
              <ul className="list-unstyled">
                {content.col1.items.map((item, idx) => (
                  <li key={idx}>
                    <a className="dropdown-item bluetext" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ✅ Column 3: Quantity */}
            <div className="col-md-4">
              <h6 className="fw-bold bluetext">{content.col3.title}</h6>
              <ul className="list-unstyled">
                {content.col3.items.map((item, idx) => (
                  <li key={idx}>
                    <a className="dropdown-item bluetext" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ✅ Column 4: Image */}
            <div className="col-md-4 text-center">
              <img src={image} alt="Dropdown" className="dropdown-img" />
            </div>
          </div>
        </div>
      </div>
    </li>
  );

  // 🔹 Dropdown Content Data
  const panchgavyaContent = {
    col1: {
      title: "Product Type",
      items: [
        "Panchgavya Neem, Aloe Vera, Tulsi Soap",
        "Panchgavya Ubtan Soap",
        "Panchgavya Milk Soap",
        "Panchgavya Aloe Vera Soap",
        "Panchgavya Amla Reetha & Shikakai Shampoo Regular",
        "Panchgavya Advance Hair Oil",
        "Face Pack",
        "Face Cream",
      ],
    },
    col3: {
      title: "Quantity",
      items: [
        "100 gm",
        "100 gm",
        "100 gm",
        "100 gm",
        "250 ml",
        "100 ml",
        "100 gm",
        "100 gm",
      ],
    },
  };

  const poojaContent = {
    col1: {
      title: "Product Type",
      items: [
        "Dhoop Cone in 6 fragrances",
        "Stick Dhoop in 6 fragrances",
        "Sambrani Cups (Guggal & Loban)",
        "Navgrah Shanti Stick Dhoop",
        "Sambrani Cups (21 ingredients)",
        "Havan Tikki",
        "Havan Samagri",
        "Gaukripa Chandan Tikka",
        "Deepak 1.5 inch",
        "Deepak 2.5 inch",
      ],
    },
    col3: {
      title: "Quantity",
      items: [
        "100 gm / 200 gm",
        "100 gm",
        "1 Box (12 pcs)",
        "100 gm",
        "1 Box (12 pcs)",
        "12 pcs",
        "250 gm",
        "1 pcs",
        "1 pcs",
        "1 pcs",
      ],
    },
  };

  const sanitaryContent = {
    col1: {
      title: "Product Type",
      items: [
        "Herbal Neem-Tulsi Hand Wash",
        "Herbal Sandal Wood Hand Wash",
        "Herbal Lavender Hand Wash",
        "Herbal Rakh & Neem Dishwash Gel",
        "Herbal Lemon Dishwash Gel",
        "Gaunile Floor Cleaner",
        "Herbal Toilet Cleaner",
        "Glass Cleaner",
        "Bathroom Cleaner",
      ],
    },
    col3: {
      title: "Quantity",
      items: [
        "250 ml / 500 ml",
        "250 ml / 500 ml",
        "250 ml / 500 ml",
        "250 ml / 500 ml",
        "250 ml / 500 ml",
        "1 Ltr / 5 Ltr",
        "250 ml / 500 ml",
        "500 ml",
        "500 ml",
      ],
    },
  };

  const murtiContent = {
    col1: {
      title: "Product Type",
      items: [
        "Lord Ganesha Murti",
        "Lord Krishna Murti",
        "Lord Lakshmee Ganesh Murti"      
      ],
    },
    col3: {
      title: "Quantity",
      items: [
        "6 inch",
        "8 inch",     
      ],
    },
  };

  // 🔹 New “Others” Dropdown Content
  const othersContent = {
    col1: {
      title: "Product Type",
      items: [
        "Cow Dung Cake",
        "Cow Dung Powder",
        "Gomay Ash (Cow Dung Bhasma)",
        "Natural Compost Fertilizer",
        "Gaukripa Herbal Agarbatti",
        "Herbal Mosquito Repellent",
        "Eco-Friendly Dustbin",
        "Gaushala Gift Hampers",
      ],
    },
    col3: {
      title: "Quantity / Size",
      items: [
        "1 Kg Pack",
        "500 gm",
        "250 gm",
        "5 Kg Bag",
        "100 gm",
        "50 ml Spray",
        "Medium / Large",
        "Custom Pack",
      ],
    },
  };

  return (
    <nav className="navbar navbar-expand-lg border-top border-bottom main-navbar d-none d-lg-block">
      <div className="container">
        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav gap-3">
            <MegaDropdown title="Pooja Path" content={poojaContent} image={dropdown1} />
            <MegaDropdown
              title="Panchgavya Cosmetic Products"
              content={panchgavyaContent}
              image={dropdown1}
            />
            <MegaDropdown
              title="Herbal Sanitary Products"
              content={sanitaryContent}
              image={dropdown1}
            />
            <MegaDropdown title="Murti" content={murtiContent} image={dropdown1} />
            {/* ✅ Newly Added “Others” Column */}
            <MegaDropdown title="Others" content={othersContent} image={dropdown1} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Dropdownmenu;
