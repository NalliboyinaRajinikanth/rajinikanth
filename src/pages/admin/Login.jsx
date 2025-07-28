import React from 'react';

const AdminLogin = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <form>
        <input className="w-full mb-3 p-2 border rounded" type="email" placeholder="Email" />
        <input className="w-full mb-3 p-2 border rounded" type="password" placeholder="Password" />
        <button className="w-full bg-green-700 text-white p-2 rounded" type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;