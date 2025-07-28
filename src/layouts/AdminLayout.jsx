import React from 'react';

const AdminLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <header className="p-4 bg-green-700 text-white">Admin Panel</header>
    <main className="p-4">{children}</main>
    <footer className="p-4 bg-gray-200 text-center">&copy; 2024 Grocery App Admin</footer>
  </div>
);

export default AdminLayout;