"use client";

import LoadingSpinner from "@/app/LoadingSpinner";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false); // Spinner state
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    data.sizes = data.sizes.split(",").map(s => s.trim());
    data.colors = data.colors.split(",").map(c => c.trim());

    setLoading(true); // Show spinner
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        toast.success('Product Added Successfully');
        reset();
      } else {
        toast.error("Failed to add product: " + result.error);
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  return (
    <div className="relative max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
      {/* Spinner */}
      {loading && <LoadingSpinner />}

      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add Product</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product ID */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Product ID</label>
          <input
            {...register("id", { required: "Product ID is required" })}
            className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-yellow-400"
            placeholder="p001"
            disabled={loading}
          />
          {errors.id && <span className="text-red-500">{errors.id.message}</span>}
        </div>

        {/* Name */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Name</label>
          <input
            {...register("name", { required: "Product name is required" })}
            className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-yellow-400"
            placeholder="Slim Fit Dress Shirt"
            disabled={loading}
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Category</label>
          <input
            {...register("category", { required: "Category is required" })}
            className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-yellow-400"
            placeholder="Shirts"
            disabled={loading}
          />
          {errors.category && <span className="text-red-500">{errors.category.message}</span>}
        </div>

        {/* Brand */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Brand</label>
          <input
            {...register("brand", { required: "Brand is required" })}
            className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-yellow-400"
            placeholder="GenzWear"
            disabled={loading}
          />
          {errors.brand && <span className="text-red-500">{errors.brand.message}</span>}
        </div>

        {/* Description */}
        <div className="flex flex-col md:col-span-2">
          <label className="mb-1 font-medium text-gray-700">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-yellow-400"
            placeholder="Elegant slim fit dress shirt..."
            disabled={loading}
          />
          {errors.description && <span className="text-red-500">{errors.description.message}</span>}
        </div>

        {/* Image URL */}
        <div className="flex flex-col md:col-span-2">
          <label className="mb-1 font-medium text-gray-700">Image URL</label>
          <input
            {...register("image", { required: "Image URL is required" })}
            className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-yellow-400"
            placeholder="https://i.ibb.co/..."
            disabled={loading}
          />
          {errors.image && <span className="text-red-500">{errors.image.message}</span>}
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Price ($)</label>
          <input
            type="number"
            step="0.01"
            {...register("price", { required: "Price is required" })}
            className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-yellow-400"
            placeholder="39.99"
            disabled={loading}
          />
          {errors.price && <span className="text-red-500">{errors.price.message}</span>}
        </div>

        {/* Stock */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Stock</label>
          <input
            type="number"
            {...register("stock", { required: "Stock is required" })}
            className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-yellow-400"
            placeholder="50"
            disabled={loading}
          />
          {errors.stock && <span className="text-red-500">{errors.stock.message}</span>}
        </div>

        {/* Sizes */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Sizes (comma separated)</label>
          <input
            {...register("sizes", { required: "Sizes are required" })}
            className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-yellow-400"
            placeholder="S,M,L,XL"
            disabled={loading}
          />
          {errors.sizes && <span className="text-red-500">{errors.sizes.message}</span>}
        </div>

        {/* Colors */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Colors (comma separated)</label>
          <input
            {...register("colors", { required: "Colors are required" })}
            className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-yellow-400"
            placeholder="white,blue,black"
            disabled={loading}
          />
          {errors.colors && <span className="text-red-500">{errors.colors.message}</span>}
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md w-full mt-4"
            disabled={loading}
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
