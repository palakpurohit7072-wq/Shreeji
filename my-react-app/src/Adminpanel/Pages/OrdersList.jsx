import React, { useState, useMemo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { useCart } from "../../Context/CartContext";
import "../Styles/OrderList.css";

const OrdersList = () => {
  const navigate = useNavigate();
  const { orders } = useCart(); // ❌ setOrders not needed anymore
  const [searchTerm, setSearchTerm] = useState("");
  const [localOrders, setLocalOrders] = useState([]);

  useEffect(() => {
    setLocalOrders(orders);
  }, [orders]);

  // ✅ Filtered orders for search
  const filteredOrders = useMemo(() => {
    if (!searchTerm) return localOrders;
    const term = searchTerm.toLowerCase();
    return localOrders.filter(
      (order) =>
        order.id.toLowerCase().includes(term) ||
        order.product.toLowerCase().includes(term) ||
        order.customer.toLowerCase().includes(term) ||
        order.status.toLowerCase().includes(term)
    );
  }, [searchTerm, localOrders]);

  // ✅ Navigate to order detail page on row click
  const handleRowClick = (order) => {
    const cleanId = order.id.replace("#", "");
    navigate(`/admin/orders/${cleanId}`, { state: { order } });
  };

  // ✅ Columns definition (Status is plain text now)
  const columns = [
    {
      name: "Product",
      selector: (row) => row.product,
      sortable: true,
      cell: (row) => (
        <span
          className="order-product-link"
          onClick={() => handleRowClick(row)}
        >
          {row.product}
        </span>
      ),
    },
    { name: "Order ID", selector: (row) => row.id, sortable: true },
    { name: "Date", selector: (row) => row.date, sortable: true },
    { name: "Customer Name", selector: (row) => row.customer, sortable: true },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <span
          className={`status-badge ${row.status
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {row.status}
        </span>
      ),
    },
    { name: "Amount", selector: (row) => row.amount },
  ];

  return (
    <div className="admin-orders-page">
      <div className="container-fluid px-4">
        {/* Header with title and search */}
        <div className="page-header d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <h2 className="fw-bold">Orders List</h2>
            <p className="breadcrumb-text mb-0">
              <Link to="/admin" className="breadcrumb-link">
                Home
              </Link>
              &nbsp;/&nbsp;
              <Link to="/admin/orders" className="breadcrumb-link active">
                Order List
              </Link>
            </p>
          </div>

          {/* Search input */}
          <input
            type="text"
            className="form-control form-control-sm search-input"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Orders table */}
        <div className="card mt-4 border-0 shadow-sm order-card">
          <div className="card-body">
            <h6 className="fw-semibold mb-3 section-title">Recent Purchases</h6>
            <DataTable
              columns={columns}
              data={filteredOrders}
              pagination
              highlightOnHover
              striped
              pointerOnHover
              responsive
              onRowClicked={handleRowClick}
              noDataComponent="No matching orders found."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
