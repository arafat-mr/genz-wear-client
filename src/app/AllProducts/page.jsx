import dbConnect from "@/Library/dbConnect";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const AllProducts = async () => {
  // Fetch products from MongoDB
  const serviceCollection = await dbConnect("products");
  const products = await serviceCollection.find({}).sort({_id:-1}).toArray();

  return (
    <div className="container mx-auto px-4 py-10 max-w-7xl">
      <h2 className="text-3xl font-bold text-center mb-8">All Products</h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id.toString()}
            className="bg-white rounded-xl overflow-hidden p-4 flex flex-col justify-between
                       shadow-lg transition-transform duration-300 z-10"
          >
            {/* Product Image */}
            <div className="relative w-full h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-2 mt-4">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <span className="text-xl font-bold text-yellow-500">
                ${product.price.$numberDouble || product.price}
              </span>

              {/* Details Button */}
              <Link
                href={`/products/${product._id.toString()}`}
                className="mt-3 px-4 py-2 bg-blue-500 text-white font-bold rounded-md text-center hover:bg-blue-400 transition"
              >
                Show Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
