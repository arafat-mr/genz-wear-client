"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { GiClothes } from "react-icons/gi";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { data: session, status } = useSession();
  // console.log(session?.user);
  const router = useRouter();
 

  const links = (
    <>
      <Link href="/">Home</Link>
      <Link href="/AllProducts">Products</Link>

      {
        session?.user ? 

      <Link href='/DashBoard'>Dashboard</Link>:  <></>
      }
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
          <Link href="/" className=" text-xl">
            Genz <span className="text-yellow-500 -ml-1">Wear</span>
          </Link>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-10">{links}</ul>
      </div>

      <div className="navbar-end space-x-2 md:space-x-3">
        {status === "loading" ? (
          <span className="loading loading-spinner"></span>
        ) : !session ? (
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
            <div className="h-10 w-10 rounded-full  overflow-hidden">
              <Image
                src={
                  session?.user?.image ||
                  "https://i.ibb.co/qMCMB6Tq/360-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8.png"
                }
                width={40}
                height={40}
                alt="user image"
                className="object-cover w-full h-full"
              />
            </div>

            <button
              onClick={async () => {
                toast.success("Logged out successfully", { autoClose: 2000 });
                await signOut({ redirect: false }); // toast triggers before session changes
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
