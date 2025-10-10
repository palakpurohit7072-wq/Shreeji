import React from "react";
import "../Styles/StatCard.css";

const StatCard = ({ title, amount, percent }) => {
  return (
    <div className="stat-card">
      <h4>{title}</h4>
      <p>{amount}</p>
      <span>{percent}</span>
    </div>
  );
};

export default StatCard;
