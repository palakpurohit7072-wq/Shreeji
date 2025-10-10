import React from "react";
import "../Styles/AdminPages.css";

const OrdersList = () => {
  const orders = [
    { id: "#1001", customer: "Palak", date: "10 Oct 2025", status: "Delivered", total: "₹1200" },
    { id: "#1002", customer: "Komal", date: "8 Oct 2025", status: "Canceled", total: "₹800" },
    { id: "#1003", customer: "Shivam", date: "6 Oct 2025", status: "Pending", total: "₹950" },
  ];

  return (
    <div className="admin-page-container">
      <h2>Orders List</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customer}</td>
              <td>{o.date}</td>
              <td
                className={
                  o.status === "Delivered"
                    ? "delivered"
                    : o.status === "Canceled"
                    ? "canceled"
                    : "pending"
                }
              >
                {o.status}
              </td>
              <td>{o.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
