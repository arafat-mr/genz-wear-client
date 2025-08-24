"use client";

import React from "react";
import Link from "next/link";

export default function DashBoardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100 relative z-5">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5">
        <h2 className="text-xl font-bold mb-5">Dashboard</h2>
        <nav className="flex flex-col gap-3">
          <Link href="/DashBoard/AddProduct" className="hover:text-yellow-500">
            Add Product
          </Link>
        
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        {children} {/* This renders page.jsx or subpage content */}
      </main>
    </div>
  );
}
