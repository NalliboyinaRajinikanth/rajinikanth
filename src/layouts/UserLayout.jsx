import React from 'react';

const UserLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <header className="p-4 bg-blue-600 text-white">User Panel</header>
    <main className="p-4">{children}</main>
    <footer className="p-4 bg-gray-200 text-center">&copy; 2024 Grocery App</footer>
  </div>
);

export default UserLayout;