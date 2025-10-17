import React, { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Dashboard.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useCart } from "../../Context/CartContext";

const data = [
  { name: "JUL", value: 100 },
  { name: "AUG", value: 200 },
  { name: "SEP", value: 150 },
  { name: "OCT", value: 220 },
  { name: "NOV", value: 350 },
  { name: "DEC", value: 700 },
];

const Dashboard = () => {
  const { orders, userProducts = [] } = useCart();

  const stats = useMemo(() => {
    const totalOrders = orders.length;
    const activeOrders = orders.filter(
      (o) => o.status === "Order Placed" || o.status === "Transect"
    ).length;
    const completedOrders = orders.filter((o) => o.status === "Delivered").length;

    // ✅ Fix: count both "Return" and "Cancelled" orders together
    const returnOrders = orders.filter(
      (o) => o.status === "Return" || o.status === "Cancelled"
    ).length;

    return {
      totalOrders,
      activeOrders,
      completedOrders,
      returnOrders,
    };
  }, [orders]);

  const bestSellers = useMemo(() => {
    if (!orders || orders.length === 0) return [];

    const salesMap = {};

    orders.forEach((order) => {
      // ✅ SAFE: fallback to items array if product string is missing
      const productsInOrder = order.product
        ? order.product.split(",").map((p) => p.trim())
        : order.items?.map((i) => i.name) || [];

      productsInOrder.forEach((name) => {
        const amount = Number(order.amount?.toString().replace(/[₹,]/g, "")) || 0;

        if (!salesMap[name]) {
          salesMap[name] = { name, totalSales: 0, totalAmount: 0 };
        }
        salesMap[name].totalSales += 1;
        // Divide amount equally if multiple products
        salesMap[name].totalAmount +=
          productsInOrder.length > 0 ? amount / productsInOrder.length : 0;
      });
    });

    return Object.values(salesMap)
      .sort((a, b) => b.totalAmount - a.totalAmount)
      .slice(0, 3);
  }, [orders]);

  const recentOrders = useMemo(() => {
    if (!orders || orders.length === 0) return [];
    return [...orders]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
  }, [orders]);

  return (
    <div className="page-container dashboard-page">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h4 className="fw-bold text-dark mb-2">Dashboard</h4>
        <p className="text-muted small mb-0">
          {new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>

      {/* ==== STAT CARDS ==== */}
      <div className="row g-3 mb-4">
        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
          <div className="stat-card shadow-sm p-3 rounded text-center">
            <h6 className="text-secondary mb-1">Total Orders</h6>
            <h4 className="fw-bold mb-0">{stats.totalOrders}</h4>
            <span className="text-success small fw-semibold">+100%</span>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
          <div className="stat-card shadow-sm p-3 rounded text-center">
            <h6 className="text-secondary mb-1">Active Orders</h6>
            <h4 className="fw-bold mb-0">{stats.activeOrders}</h4>
            <span className="text-warning small fw-semibold">
              {((stats.activeOrders / (stats.totalOrders || 1)) * 100).toFixed(0)}%
            </span>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
          <div className="stat-card shadow-sm p-3 rounded text-center">
            <h6 className="text-secondary mb-1">Completed Orders</h6>
            <h4 className="fw-bold mb-0">{stats.completedOrders}</h4>
            <span className="text-primary small fw-semibold">
              {((stats.completedOrders / (stats.totalOrders || 1)) * 100).toFixed(0)}%
            </span>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
          <div className="stat-card shadow-sm p-3 rounded text-center">
            <h6 className="text-secondary mb-1">Return Orders</h6>
            <h4 className="fw-bold mb-0">{stats.returnOrders}</h4>
            <span className="text-danger small fw-semibold">
              {((stats.returnOrders / (stats.totalOrders || 1)) * 100).toFixed(0)}%
            </span>
          </div>
        </div>
      </div>

      {/* ==== GRAPH + BEST SELLERS ==== */}
      <div className="row g-3 mb-4">
        <div className="col-lg-8 col-12">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold mb-0">Sales Graph</h6>
                <div className="btn-group btn-group-sm">
                  <button className="btn btn-outline-secondary active">Weekly</button>
                  <button className="btn btn-outline-secondary">Monthly</button>
                  <button className="btn btn-outline-secondary">Yearly</button>
                </div>
              </div>
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
          </div>
        </div>

        <div className="col-lg-4 col-12">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h6 className="fw-bold mb-3">Best Sellers</h6>
              {bestSellers.length > 0 ? (
                bestSellers.map((item, i) => {
                  const matchedProduct = userProducts.find(
                    (p) =>
                      p.name &&
                      item.name &&
                      p.name.toLowerCase().includes(item.name.toLowerCase())
                  );

                  const productImage =
                    matchedProduct?.mainImage ||
                    matchedProduct?.img ||
                    matchedProduct?.image ||
                    "https://via.placeholder.com/50x50.png?text=No+Img";

                  return (
                    <div key={i} className="d-flex align-items-center mb-3">
                      <div className="seller-img me-3">
                        <img
                          src={productImage}
                          alt={item.name}
                          className="rounded"
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                            border: "1px solid #eee",
                          }}
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-0 small text-dark fw-semibold">
                          {item.name}
                        </h6>
                        <span className="text-muted small">
                          Sales: {item.totalSales}
                        </span>
                      </div>
                      <span className="fw-bold text-primary small">
                        ₹{item.totalAmount.toFixed(2)}
                      </span>
                    </div>
                  );
                })
              ) : (
                <p className="text-muted small">No sales data available</p>
              )}
              <button className="btn btn-sm btn-primary w-100 mt-3">
                View Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==== RECENT ORDERS ==== */}
      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <h6 className="fw-bold mb-3">Recent Orders</h6>
          <div className="table-responsive">
            <table className="table table-striped align-middle">
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.length > 0 ? (
                  recentOrders.map((order, index) => (
                    <tr key={index}>
                      <td>
                        {order.product ||
                          order.items?.map((i) => i.name).join(", ") ||
                          "No Products"}
                      </td>
                      <td>{order.id}</td>
                      <td>{order.date}</td>
                      <td>{order.customer}</td>
                      <td>
                        <span
                          className={`badge px-3 py-2 ${
                            order.status === "Delivered"
                              ? "bg-success-subtle text-success"
                              : order.status === "Order Placed" ||
                                order.status === "Transect"
                              ? "bg-warning-subtle text-warning"
                              : "bg-danger-subtle text-danger"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td>{order.amount}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center text-muted py-3">
                      No recent orders found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
