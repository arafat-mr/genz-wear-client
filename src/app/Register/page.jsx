"use client";

import React, { useState } from "react";
import Lottie from "lottie-react";
import registerlottie from "../../assets/signup.json";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { registerUser } from "../actions/auth/registerUser";
import { useRouter } from "next/navigation";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import { toast } from "react-toastify";
import LoadingSpinner from "../LoadingSpinner"; 

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      contactNumber: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true); // Show spinner
    try {
      await registerUser(data);
      toast.success("Successfully created");
      reset();
      router.push("/Login");
    } catch (err) {
      toast.error("Registration failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center gap-10 p-5 md:px-5 py-10 max-w-6xl mx-auto text-black">
      {loading && <LoadingSpinner />} {/* Show spinner when loading */}

      {/* Lottie Animation */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Lottie
          animationData={registerlottie}
          loop={true}
          className="w-[80%] max-w-md"
        />
      </div>

      {/* Form Section */}
      <div
        className="w-full md:w-1/2 shadow-2xl p-6 rounded-lg"
        style={{ boxShadow: "0 0 15px rgba(236, 72, 153, 0.8)" }}
      >
        <h3 className="text-3xl font-semibold mb-6 text-center">
          Register Now
        </h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 w-full max-w-md mx-auto relative z-10"
        >
          {/* Name */}
          <div>
            <label className="label text-black">Your Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full bg-transparent"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label text-black">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full bg-transparent"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="label text-black">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              className="input input-bordered w-full bg-transparent pr-10"
              placeholder="Enter your password"
            />
            <span
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Contact Number */}
          <div>
            <label className="label text-black">Contact Number</label>
            <input
              type="tel"
              {...register("contactNumber", {
                required: "Contact number is required",
                pattern: {
                  value: /^\+\d{7,15}$/,
                  message: "Enter a valid number starting with + and country code",
                },
              })}
              className="input input-bordered w-full bg-transparent"
              placeholder="e.g. +14155552671"
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.contactNumber.message}
              </p>
            )}
          </div>

          {/* Already have account */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-sm">
              <p>Already have an account?</p>
              <Link href="/Login" className="text-green-500 hover:underline">
                Login
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 text-center font-semibold bg-pink-500 text-white rounded-md shadow-lg 
                       hover:shadow-pink-400/80 hover:scale-105 transition duration-300 hover:animate-pulse 
                       text-sm w-full"
            style={{ boxShadow: "0 0 15px rgba(236, 72, 153, 0.8)" }}
          >
            Register
          </button>

          {/* Google Login */}
          <div className="mt-4">
            <SocialLogin />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
