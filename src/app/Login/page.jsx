"use client";

import React, { useState } from "react";
import Lottie from "lottie-react";
import login from "../../assets/logIn.json";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { getSession, signIn } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import SocialLogin from "./SocialLogin/SocialLogin";
import LoadingSpinner from '../../app/LoadingSpinner'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });


const onSubmit = async (data) => {
  setLoginError("");
  setLoading(true); // show spinner

  try {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.ok) {
      const session = await getSession();
      toast.success(`Welcome ${session?.user?.name}`, { position: "top-right" });
      router.push("/");
    } else {
      setLoginError("Invalid email or password");
      toast.error("Invalid email or password", { position: "top-right" });
    }
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong. Please try again.", { position: "top-right" });
  } finally {
    setLoading(false); // hide spinner
  }
};

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 p-5 md:px-5 py-10 max-w-7xl mx-auto">
      {loading && (
  <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
    <LoadingSpinner />
  </div>
)}

      {/* Lottie Animation */}
      <div className="md:w-1/2 w-full">
        <Lottie animationData={login} loop={true} />
      </div>

      {/* Form Section */}
      <div
        className="w-full md:w-1/2 bg-transparent p-6 rounded-lg text-black"
        style={{ boxShadow: "0 0 15px rgba(236, 72, 153, 0.8)" }}
      >
        <h3 className="text-3xl font-semibold mb-6 text-center">
          Please Login
        </h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 relative z-10"
        >
          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full bg-transparent"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              className="input input-bordered w-full bg-transparent pr-10"
              placeholder="Password"
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
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Error */}
          {loginError && <p className="text-red-500 text-sm">{loginError}</p>}

          {/* Forgot Password */}
          <div>
            <Link href="#" className="link link-hover text-sm">
              Forgot password?
            </Link>
          </div>

          {/* Register Link */}
          <p className="text-sm">
            Don't have an account?{" "}
            <Link href="/Register" className="text-green-400 hover:underline">
              Register Now
            </Link>
          </p>

          {/* Submit Button */}
          <button
  type="submit"
  className="px-6 py-3 w-full text-center font-semibold bg-pink-500 text-white rounded-md shadow-lg
             hover:shadow-pink-400/80 hover:scale-105 transition duration-300 hover:animate-pulse text-sm flex items-center justify-center gap-2"
  disabled={loading}
>
  {loading ? <LoadingSpinner /> : "Login"}
</button>
          <div>
            <SocialLogin/>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
