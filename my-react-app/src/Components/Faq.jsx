import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import "./Faq.css";

import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
const Faq = () => {
  const [activeKey, setActiveKey] = useState(null);

  const faqs = [
    {
      question: "What is the legacy of Cycle?",
      answer:
        "Established in 1948, Cycle Pure Agarbathi has been with India's prayers since the time of independence. Trusted by millions, Cycle has a presence in over 75 countries, making a global name in luxury incense and prayer essentials.",
    },
    {
      question: "What products does Cycle offer?",
      answer: "Cycle offers incense sticks, cones, dhoop, puja kits, and more.",
    },
    {
      question: "Are Cycle products pure and eco-friendly?",
      answer: "Yes, all products are made with eco-friendly and natural ingredients.",
    },
    {
      question: "How can I find the right product for my needs?",
      answer: "You can browse categories or use our product finder tool on the website.",
    },
    {
      question: "Does Cycle provide complete puja kits?",
      answer: "Yes, we provide complete puja kits with all essentials included.",
    },
     {
      question: "Does Cycle offer exclusive or premium products??",
      answer: "Yes, Cycle features luxury incense collections designed for unique aromatic experiences. We also offer a specially curated premium gifting range, perfect for treating yourself or delighting your loved ones!",
    },
  ];

  return (
    <div className="container faq_container my-5">
      <h2 className="text-center mb-4 font_main_section bluetext font_weight_semi">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <Accordion
        activeKey={activeKey}
        onSelect={(key) => setActiveKey(key === activeKey ? null : key)}
      >
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>
              <span className="faq-icon me-2">
                <img
                  src={activeKey === index.toString() ? minus : plus}
                  alt={activeKey === index.toString() ? "minus" : "plus"}
                  style={{ width: "20px", height: "20px" }}
                />
              </span>{" "}
              {faq.question}
            </Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;

