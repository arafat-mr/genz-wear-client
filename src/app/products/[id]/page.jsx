import dbConnect from '@/Library/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

const ProductDetails = async ({ params }) => {
  const p = await params;
  const data = await dbConnect('products').findOne({ _id: new ObjectId(p.id) });

  if (!data) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-10 min-h-[70vh]">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="relative w-full md:w-1/2 h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <p className="text-gray-600 text-lg">{data.category} | {data.brand}</p>
          <p className="text-gray-800">{data.description}</p>

          <div className="text-2xl font-bold text-yellow-500 mt-2">
            ${data.price}
          </div>

          {/* Sizes */}
          {data.sizes && (
            <div className="mt-4">
              <p className="font-semibold mb-1">Sizes:</p>
              <div className="flex gap-2">
                {data.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 font-semibold"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Colors */}
          {data.colors && (
            <div className="mt-4">
              <p className="font-semibold mb-1">Colors:</p>
              <div className="flex gap-2">
                {data.colors.map((color) => (
                  <span
                    key={color}
                    className="w-8 h-8 rounded-full border-2"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          )}

          {/* Stock */}
          <p className="mt-4 text-gray-700">
            <span className="font-semibold">Stock:</span> {data.stock.$numberInt}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="flex-1 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-400 transition">
              Buy Now
            </button>
            <button className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded-lg shadow hover:bg-gray-300 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
