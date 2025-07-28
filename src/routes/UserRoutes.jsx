import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Placeholder = ({ name }) => <div className="p-8 text-center">{name} Page</div>;

const UserRoutes = () => (
  <Routes>
    <Route path="auth/login" element={<Placeholder name="User Login" />} />
    <Route path="auth/register" element={<Placeholder name="User Register" />} />
    <Route path="profile" element={<Placeholder name="Profile" />} />
    <Route path="product-catalog" element={<Placeholder name="Product Catalog" />} />
    <Route path="product-details" element={<Placeholder name="Product Details" />} />
    <Route path="cart" element={<Placeholder name="Cart" />} />
    <Route path="checkout" element={<Placeholder name="Checkout" />} />
    <Route path="subscription-pack" element={<Placeholder name="Subscription Pack" />} />
    <Route path="grocery-checklist" element={<Placeholder name="Grocery Checklist" />} />
    <Route path="auto-order-suggestion" element={<Placeholder name="Auto Order Suggestion" />} />
    <Route path="barcode-scanner" element={<Placeholder name="Barcode Scanner" />} />
    <Route path="expiry-tracker" element={<Placeholder name="Expiry Tracker" />} />
    <Route path="nutrition-tracker" element={<Placeholder name="Nutrition Tracker" />} />
    <Route path="health-planner" element={<Placeholder name="Health Planner" />} />
    <Route path="order-tracking" element={<Placeholder name="Order Tracking" />} />
    <Route path="whatsapp-reminders" element={<Placeholder name="WhatsApp Reminders" />} />
    <Route path="payment" element={<Placeholder name="Payment Page" />} />
    <Route path="notifications" element={<Placeholder name="Notifications" />} />
    <Route path="chat-support" element={<Placeholder name="Chat Support" />} />
    <Route path="order-history" element={<Placeholder name="Order History" />} />
    <Route path="analytics" element={<Placeholder name="Analytics" />} />
    <Route path="settings" element={<Placeholder name="Settings" />} />
    <Route path="*" element={<Placeholder name="User Error" />} />
  </Routes>
);

export default UserRoutes;