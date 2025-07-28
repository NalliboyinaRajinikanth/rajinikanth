import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Placeholder = ({ name }) => <div className="p-8 text-center">{name} Page</div>;

const AdminRoutes = () => (
  <Routes>
    <Route path="login" element={<Placeholder name="Admin Login" />} />
    <Route path="dashboard" element={<Placeholder name="Dashboard" />} />
    <Route path="role-management" element={<Placeholder name="Role Management" />} />
    <Route path="product-management" element={<Placeholder name="Product Management" />} />
    <Route path="vendor-list" element={<Placeholder name="Vendor List" />} />
    <Route path="vendor-onboard" element={<Placeholder name="Vendor Onboard" />} />
    <Route path="inventory-overview" element={<Placeholder name="Inventory Overview" />} />
    <Route path="low-stock-alerts" element={<Placeholder name="Low Stock Alerts" />} />
    <Route path="warehouse-transfer" element={<Placeholder name="Warehouse Transfer" />} />
    <Route path="orders" element={<Placeholder name="Orders" />} />
    <Route path="delivery-management" element={<Placeholder name="Delivery Management" />} />
    <Route path="subscription-editor" element={<Placeholder name="Subscription Editor" />} />
    <Route path="coupon-offers" element={<Placeholder name="Coupon Offers" />} />
    <Route path="customer-management" element={<Placeholder name="Customer Management" />} />
    <Route path="content-editor" element={<Placeholder name="Content Editor" />} />
    <Route path="notification-manager" element={<Placeholder name="Notification Manager" />} />
    <Route path="reports-dashboard" element={<Placeholder name="Reports Dashboard" />} />
    <Route path="privacy-compliance" element={<Placeholder name="Privacy Compliance" />} />
    <Route path="admin-support-desk" element={<Placeholder name="Admin Support Desk" />} />
    <Route path="system-logs" element={<Placeholder name="System Logs" />} />
    <Route path="api-security" element={<Placeholder name="API Security" />} />
    <Route path="flash-sales" element={<Placeholder name="Flash Sales" />} />
    <Route path="delivery-agents" element={<Placeholder name="Delivery Agents" />} />
    <Route path="admin-calendar" element={<Placeholder name="Admin Calendar" />} />
    <Route path="*" element={<Placeholder name="Admin Error" />} />
  </Routes>
);

export default AdminRoutes;