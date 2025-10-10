import React from "react";
import "../styles/Dashboard.css";
import StatCard from "../Components/StatCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "JUL", value: 100 },
  { name: "AUG", value: 200 },
  { name: "SEP", value: 150 },
  { name: "OCT", value: 220 },
  { name: "NOV", value: 350 },
];

const recentOrders = [
  {
    id: "#25426",
    product: "Lorem ipsum",
    date: "Nov 8th, 2023",
    customer: "Kavin",
    status: "Delivered",
    amount: "₹200.00",
  },
  {
    id: "#25425",
    product: "Lorem ipsum",
    date: "Nov 7th, 2023",
    customer: "Komal",
    status: "Canceled",
    amount: "₹200.00",
  },
  {
    id: "#25424",
    product: "Lorem ipsum",
    date: "Nov 6th, 2023",
    customer: "Nikhil",
    status: "Delivered",
    amount: "₹200.00",
  },
  {
    id: "#25423",
    product: "Lorem ipsum",
    date: "Nov 5th, 2023",
    customer: "Shivam",
    status: "Canceled",
    amount: "₹200.00",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard Overview</h2>

      {/* ==== STAT CARDS ==== */}
      <div className="stats">
        <StatCard title="Total Orders" amount="₹126,500" percent="+34.7%" />
        <StatCard title="Active Orders" amount="₹126,500" percent="+34.7%" />
        <StatCard title="Completed Orders" amount="₹126,500" percent="+34.7%" />
        <StatCard title="Return Orders" amount="₹126,500" percent="+34.7%" />
      </div>

      {/* ==== SALES GRAPH ==== */}
      <div className="chart-section">
        <h3>Sales Graph</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#2c2484"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ==== RECENT ORDERS ==== */}
      <div className="recent-orders">
        <h3>Recent Orders</h3>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Order ID</th>
              <th>Date</th>
              <th>Customer Name</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.product}</td>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.customer}</td>
                <td
                  className={
                    order.status === "Delivered" ? "delivered" : "canceled"
                  }
                >
                  {order.status}
                </td>
                <td>{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
