import Link from 'next/link';
import React from 'react';
import { GiClothes } from 'react-icons/gi';

const Navbar = () => {
  const links = (
    <>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
    </>
  );

  return (
    <div className="navbar bg-transparent shadow-sm px-5 md:px-10">
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 -ml-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-10 mt-3 p-2 shadow bg-white rounded-box"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center -ml-4">
          <GiClothes size={20} className="-mr-3" />
          <Link href="/" className="btn btn-ghost text-xl">
            Genz <span className="text-yellow-500 -ml-1">Wear</span>
          </Link>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-10">{links}</ul>
      </div>

      <div className="navbar-end">
        <Link href="/cart" className="btn btn-secondary">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
