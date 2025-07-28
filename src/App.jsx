import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserRoutes from './routes/UserRoutes';
import AdminRoutes from './routes/AdminRoutes';
import VendorRoutes from './routes/VendorRoutes';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/user">User</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/vendor">Vendor</Link>
      </nav>
      <Routes>
        <Route path="/user/*" element={<UserRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/vendor/*" element={<VendorRoutes />} />
        <Route path="*" element={<div className="p-8 text-center">Welcome to the Grocery App Platform</div>} />
      </Routes>
    </Router>
  );
}

export default App;