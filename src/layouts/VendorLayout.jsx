import React from 'react';

const VendorLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <header className="p-4 bg-yellow-600 text-white">Vendor Panel</header>
    <main className="p-4">{children}</main>
    <footer className="p-4 bg-gray-200 text-center">&copy; 2024 Grocery App Vendor</footer>
  </div>
);

export default VendorLayout;