"use client";
import LoadingSpinner from "@/app/LoadingSpinner";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true); // Show spinner
    try {
      await signIn("google", { callbackUrl: "/" });
      toast.success("Login Successful");
    } catch (err) {
      toast.error("Google login failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  return (
    <div className="relative">
      {loading && <LoadingSpinner />} {/* Spinner in the middle of screen */}
      <div className="divider divider-primary">Or</div>
      <button
        onClick={handleGoogleLogin}
        className="btn bg-white text-black border-[#e5e5e5] w-full flex items-center justify-center gap-2"
        style={{ boxShadow: "0 0 15px rgba(236, 72, 153, 0.8)" }}
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
