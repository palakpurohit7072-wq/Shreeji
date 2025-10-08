import React from "react";
import dropdown1 from "../assets/dropdown1.png";
import "./Dropdown.css";

const Dropdownmenu = () => {
  // 🔹 Reusable Mega Dropdown Function
  const MegaDropdown = ({ title, content }) => (
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
                    {item.subItems ? (
                      /* 🔹 Sub-dropdown for items like Dhoop Cone / Stick Dhoop */
                      <div className="dropdown-submenu">
                        <a className="dropdown-item bluetext" href="#">
                          {item.name} <i className="bi bi-chevron-right ms-1"></i>
                        </a>
                        <ul className="list-unstyled sub-items">
                          {item.subItems.map((sub, i) => (
                            <li key={i}>
                              <a className="dropdown-item bluetext" href="#">
                                {sub}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <a className="dropdown-item bluetext" href="#">
                        {item.name || item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* ✅ Column 2: Quantity */}
            {content.col3 && (
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
            )}

            {/* ✅ Column 3: Image */}
            <div className="col-md-4 text-center">
              <img src={content.image || dropdown1} alt="Dropdown" className="dropdown-img" />
            </div>
          </div>
        </div>
      </div>
    </li>
  );

  // 🔹 Dropdown Contents
  const poojaContent = {
    col1: {
      title: "Product Type",
      items: [
        {
          name: "Dhoop Cone",
          subItems: [
            "Gugal Cone Dhoop",
            "Loban Cone Dhoop",
            "Sandalwood Cone Dhoop",
            "Jasmine Cone Dhoop",
            "Lavender Cone Dhoop",
            "Rose Cone Dhoop",
          ],
        },
        {
          name: "Stick Dhoop",
          subItems: [
            "Gugal Stick Dhoop",
            "Loban Stick Dhoop",
            "Sandalwood Stick Dhoop",
            "Jasmine Stick Dhoop",
            "Lavender Stick Dhoop",
            "Rose Stick Dhoop",
          ],
        },
        "Sambrani Cups (Guggal & Loban)",
        "Navgrah Shanti Stick Dhoop",
        "Sambrani Cups (21 ingredients)",
        "Havan Tikki",
        "Havan Samagri",
        "Gaukripa Chandan Tikka",
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
      ],
    },
    image: dropdown1,
  };

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
      items: ["100 gm", "100 gm", "100 gm", "100 gm", "250 ml", "100 ml", "100 gm", "100 gm"],
    },
    image: dropdown1,
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
    image: dropdown1,
  };

  const murtiContent = {
    col1: {
      title: "Product Type",
      items: ["Lord Ganesha Murti", "Lord Krishna Murti", "Lord Lakshmee Ganesh Murti"],
    },
    col3: {
      title: "Quantity",
      items: ["6 inch", "8 inch"],
    },
    image: dropdown1,
  };

  const othersContent = {
    col1: {
      title: "Product Type",
      items: ["GauNile Floor Cleaner", "Gaumay Vaidik Asana", "Gaumay Vaidik mela"],
    },
    col3: {
      title: "Quantity",
      items: ["1 Ltr / 5 Ltr", "1 pcs", "1 pcs"], // example quantities
    },
    image: dropdown1,
  };

  return (
    <nav className="navbar navbar-expand-lg border-top border-bottom main-navbar d-none d-lg-block">
      <div className="container">
        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav gap-3">
            <MegaDropdown title="Pooja Path" content={poojaContent} />
            <MegaDropdown title="Panchgavya Cosmetic Products" content={panchgavyaContent} />
            <MegaDropdown title="Herbal Sanitary Products" content={sanitaryContent} />
            <MegaDropdown title="Murti" content={murtiContent} />
            <MegaDropdown title="Others" content={othersContent} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Dropdownmenu;
