import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Placeholder = ({ name }) => <div className="p-8 text-center">{name} Page</div>;

const VendorRoutes = () => (
  <Routes>
    <Route path="login" element={<Placeholder name="Vendor Login" />} />
    <Route path="dashboard" element={<Placeholder name="Dashboard" />} />
    <Route path="product-upload" element={<Placeholder name="Product Upload" />} />
    <Route path="inventory-sync" element={<Placeholder name="Inventory Sync" />} />
    <Route path="order-fulfillment" element={<Placeholder name="Order Fulfillment" />} />
    <Route path="expiry-alerts" element={<Placeholder name="Expiry Alerts" />} />
    <Route path="performance-dashboard" element={<Placeholder name="Performance Dashboard" />} />
    <Route path="notifications" element={<Placeholder name="Notifications" />} />
    <Route path="support-chat" element={<Placeholder name="Support Chat" />} />
    <Route path="payments" element={<Placeholder name="Payments" />} />
    <Route path="vendor-calendar" element={<Placeholder name="Vendor Calendar" />} />
    <Route path="invoice-generator" element={<Placeholder name="Invoice Generator" />} />
    <Route path="vendor-profile" element={<Placeholder name="Vendor Profile" />} />
    <Route path="alert-history" element={<Placeholder name="Alert History" />} />
    <Route path="*" element={<Placeholder name="Vendor Error" />} />
  </Routes>
);

export default VendorRoutes;