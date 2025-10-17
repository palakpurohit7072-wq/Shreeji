import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/OrderDetails.css";
import { useCart } from "../../Context/CartContext";

const OrderDetails = () => {
  const location = useLocation();
  const orderData = location.state?.order;
  const { orders, setOrders } = useCart();

  const [order, setOrder] = useState(orderData);
  const [selectedStatus, setSelectedStatus] = useState(order?.status || "");

  if (!order) {
    return <div className="p-5 text-center">⚠️ No order details found.</div>;
  }

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    setOrder({ ...order, status: newStatus });
  };

  const handleSave = () => {
    const updatedOrders = orders.map((o) =>
      o.id === order.id ? { ...o, status: selectedStatus } : o
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    alert("Status updated successfully!");
  };

  return (
    <div className="order-details-page">
      <div className="order-sidebar">
        <h4 className="order-sidebar-logo">Admin Dashboard</h4>
        <ul className="order-sidebar-menu">
          <li>Dashboard</li>
          <li>All Products</li>
          <li>Order List</li>
        </ul>
      </div>

      <div className="order-main-content">
        <header className="order-page-header d-flex align-items-center justify-content-between">
          <h5 className="m-0 fw-semibold text-dark">Orders Details</h5>
          <div className="d-flex align-items-center">
            <select
              className="form-select me-2"
              style={{ width: "180px" }}
              value={selectedStatus}
              onChange={handleStatusChange}
            >
              <option value="Order Placed">Order Placed</option>
              <option value="In Transit">In Transit</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Return">Return</option> {/* ✅ Changed Rejected → Return */}
            </select>

            <button className="btn btn-dark" onClick={handleSave}>
              Save
            </button>
          </div>
        </header>

        <div className="order-info-section container-fluid mt-4">
          <div className="order-header mb-3">
            <h6>
              Order ID: <span className="fw-semibold">{order.id}</span>{" "}
              <span
                className={`badge ${
                  selectedStatus === "Delivered"
                    ? "bg-success"
                    : selectedStatus === "Cancelled"
                    ? "bg-danger"
                    : selectedStatus === "Return"
                    ? "bg-secondary"
                    : selectedStatus === "In Transit"
                    ? "bg-info text-dark"
                    : "bg-warning text-dark"
                } ms-2`}
              >
                {selectedStatus}
              </span>
            </h6>
            <p className="text-muted small">{order.date}</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="order-info-card bg-white shadow-sm">
                <h6 className="fw-bold text-dark">Customer</h6>
                <p className="m-0 text-muted">Full Name: {order.customer}</p>
                <p className="m-0 text-muted">
                  Email: {order.email || "Not Provided"}
                </p>
                <p className="m-0 text-muted">
                  Phone: {order.phone || "Not Provided"}
                </p>
                <button className="btn btn-outline-secondary w-100 mt-2">
                  View Profile
                </button>
              </div>
            </div>

            <div className="col-md-4">
              <div className="order-info-card bg-white shadow-sm">
                <h6 className="fw-bold text-dark">Order Info</h6>
                <p className="m-0 text-muted">
                  Shipping: {order.shipping || "Next Express"}
                </p>
                <p className="m-0 text-muted">
                  Payment Method: {order.payment || "PayPal"}
                </p>
                <p className="m-0 text-muted">Status: {selectedStatus}</p>
                <button className="btn btn-outline-secondary w-100 mt-2">
                  Download Info
                </button>
              </div>
            </div>

            <div className="col-md-4">
              <div className="order-info-card bg-white shadow-sm">
                <h6 className="fw-bold text-dark">Deliver To</h6>
                <p className="m-0 text-muted">
                  Address: {order.address || "Not Provided"}
                </p>
                <button className="btn btn-outline-secondary w-100 mt-2">
                  View Profile
                </button>
              </div>
            </div>
          </div>

          <div className="order-payment-info bg-white shadow-sm mt-4 p-3 rounded">
            <h6 className="fw-bold text-dark">Payment Info</h6>
            <p className="text-muted mb-0">
              💳 {order.payment || "PayPal"} <br />
              Business Name: {order.customer} <br />
              Phone: {order.phone || "Not Provided"}
            </p>
          </div>

          <div className="order-note-section bg-white shadow-sm mt-3 p-3 rounded">
            <h6 className="fw-bold text-dark mb-2">Note</h6>
            <textarea
              className="form-control"
              rows="2"
              placeholder="Type some notes..."
            ></textarea>
          </div>

          <div className="order-products-table bg-white shadow-sm mt-5 p-3 rounded">
            <h6 className="fw-bold text-dark mb-3">Products</h6>
            <table className="table table-bordered align-middle text-center">
              <thead className="table-light">
                <tr>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.items?.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>₹{item.price}</td>
                    <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="order-totals text-end pe-3">
              <p className="mb-1 text-muted">
                Subtotal: ₹
                {order.items?.reduce((a, i) => a + i.price * i.quantity, 0)}
              </p>
              <p className="mb-1 text-muted">
                Shipping: ₹{order.shippingCost || 0}
              </p>
              <h5 className="fw-bold text-dark">Total: {order.amount}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

