"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { GiClothes } from "react-icons/gi";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { data: session, status } = useSession();
  console.log(session);

  const links = (
    <>
      <Link href="/">Home</Link>
      <Link href="/AllProducts">Products</Link>
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

      <div className="navbar-end space-x-2 md:space-x-3">
        {status !== "authenticated" ? (
          <>
            <Link
              href="/Login"
              className="btn btn-sm md:btn-md btn-secondary btn-outline rounded-md"
            >
              Login
            </Link>
            <Link
              href="/Register"
              className="btn btn-sm md:btn-md btn-secondary btn-outline rounded-md"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                toast.success("Logged out successfully", { autoClose: 2000 });
                signOut({ redirect: false });
              }}
              className="btn btn-sm md:btn-md btn-secondary btn-outline rounded-md"
            >
              Logout
            </button>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
