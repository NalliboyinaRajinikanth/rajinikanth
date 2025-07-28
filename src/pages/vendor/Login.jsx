import React from 'react';

const VendorLogin = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Vendor Login</h2>
      <form>
        <input className="w-full mb-3 p-2 border rounded" type="email" placeholder="Email" />
        <input className="w-full mb-3 p-2 border rounded" type="password" placeholder="Password" />
        <button className="w-full bg-yellow-600 text-white p-2 rounded" type="submit">Login</button>
      </form>
    </div>
  );
};

export default VendorLogin;