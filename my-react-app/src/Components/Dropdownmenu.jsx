import React, { useEffect, useState } from "react";
import dropdown1 from "../assets/dropdown1.png";
import { supabase } from "../ServerApi/Dbconnection.jsx";
import "./Dropdown.css";

const Dropdownmenu = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch categories on mount
  useEffect(() => {
    fetchCategories();
  }, []);

  // ✅ Fetch from Supabase with safe parsing
  async function fetchCategories() {
    try {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("category_id", { ascending: true });

      if (error) throw error;

      // Parse content_json for each category safely 
      const parsedCategories = data.map((cat) => {
        let parsedContent;
        try {
          parsedContent = cat.content_json
            ? JSON.parse(cat.content_json)
            : null;
        } catch (e) {
          console.warn("⚠️ Invalid JSON for:", cat.name);
          parsedContent = null;
        }

        // Fallback structure if API JSON missing or invalid
        if (!parsedContent || !parsedContent.col1 || !parsedContent.col3) {
          parsedContent = {
            col1: { title: "Product Type", items: [] },
            col3: { title: "Quantity", items: [] },
            image: dropdown1,
          };
        } else {
          // Ensure items arrays exist
          parsedContent.col1.items = parsedContent.col1.items || [];
          parsedContent.col3.items = parsedContent.col3.items || [];
          parsedContent.image = parsedContent.image || dropdown1;
        }

        return { ...cat, parsedContent };
      });

      setCategories(parsedCategories);
      setLoading(false);
      console.log("✅ Categories fetched:", parsedCategories);
    } catch (err) {
      console.error("❌ Fetch categories error:", err.message);
      setLoading(false);
    }
  }

  // 🔹 MegaDropdown Component (Design preserved)
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
            {/* Column 1: Product Type */}
            <div className="col-md-4">
              <h6 className="fw-bold bluetext">
                {content.col1?.title || "Product Type"}
              </h6>
              <ul className="list-unstyled">
                {content.col1?.items.length > 0 ? (
                  content.col1.items.map((item, idx) => (
                    <li key={idx}>
                      {item.subItems ? (
                        <div className="dropdown-submenu">
                          <a className="dropdown-item bluetext" href="#">
                            {item.name}{" "}
                            <i className="bi bi-chevron-right ms-1"></i>
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
                  ))
                ) : (
                  <li>
                    <span className="dropdown-item text-muted">
                      No items available
                    </span>
                  </li>
                )}
              </ul>
            </div>

            {/* Column 2: Quantity */}
            <div className="col-md-4">
              <h6 className="fw-bold bluetext">
                {content.col3?.title || "Quantity"}
              </h6>
              <ul className="list-unstyled">
                {content.col3?.items.length > 0 ? (
                  content.col3.items.map((item, idx) => (
                    <li key={idx}>
                      <a className="dropdown-item bluetext" href="#">
                        {item}
                      </a>
                    </li>
                  ))
                ) : (
                  <li>
                    <span className="dropdown-item text-muted">No data found</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Column 3: Image */}
            <div className="col-md-4 text-center">
              <img
                src={content.image || dropdown1}
                alt="Dropdown"
                className="dropdown-img"
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );

  // 🔹 Navbar Render
  return (
    <nav className="navbar navbar-expand-lg border-top border-bottom main-navbar d-none d-lg-block">
      <div className="container">
        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav gap-3">
            {loading ? (
              <li className="nav-item">
                <span className="nav-link text-muted">Loading...</span>
              </li>
            ) : categories.length > 0 ? (
              categories.map((cat) => (
                <MegaDropdown
                  key={cat.category_id}
                  title={cat.name}
                  content={cat.parsedContent}
                />
              ))
            ) : (
              <li className="nav-item">
                <span className="nav-link text-muted">No categories found</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Dropdownmenu;
