import Link from 'next/link';
import React from 'react';

const DashBoard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-400">
      <div className="bg-white shadow-2xl rounded-2xl p-12 text-center max-w-lg w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Dashboard</h1>
        <p className="text-gray-600 mb-6">
          This is your control center. Here you can manage your products, orders, and account settings.
        </p>
        <Link href='/AllProducts' className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition">
          Go to Products
        </Link>
      </div>
    </div>
  );
};

export default DashBoard;
