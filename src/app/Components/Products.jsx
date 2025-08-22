import React from "react";

const products = [
  {
    id: "p001",
    name: "Slim Fit Dress Shirt",
    category: "Shirts",
    brand: "GenzWear",
    description: "Elegant slim fit dress shirt for formal and semi-formal occasions.",
    image: "https://i.ibb.co/hxr1Mp7N/nimble-made-7-RIMS-NMsbc-unsplash.jpg",
    price: 39.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["white", "blue", "black"],
    stock: 50
  },
  {
    id: "p002",
    name: "Polo T-Shirt",
    category: "T-Shirts",
    brand: "GenzWear",
    description: "Comfortable and stylish polo t-shirt for casual wear.",
    image: "https://i.ibb.co/pBn7mMBQ/tuananh-blue-0-VAlyu7j5w-E-unsplash.jpg",
    price: 24.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["blue", "black", "gray"],
    stock: 80
  },
  {
    id: "p003",
    name: "Denim Jacket",
    category: "Jackets",
    brand: "GenzWear",
    description: "Classic denim jacket with durable stitching and stylish look.",
    image: "https://i.ibb.co/ynSTgTWB/northleg-official-r-ZMdz-BOw-o-unsplash.jpg",
    price: 59.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["blue", "black"],
    stock: 40
  },
  {
    id: "p004",
    name: "Trench Coat",
    category: "Coats",
    brand: "GenzWear",
    description: "Stylish trench coat perfect for formal and outdoor wear.",
    image: "https://i.ibb.co/nsDZQh4N/download.jpg",
    price: 89.99,
    sizes: ["M", "L", "XL"],
    colors: ["beige", "black"],
    stock: 30
  },
  {
    id: "p005",
    name: "Leather Oxford Shoes",
    category: "Shoes",
    brand: "GenzWear",
    description: "Premium leather oxford shoes for formal occasions.",
    image: "https://i.ibb.co/CKGZ2Gz8/premium-photo-1670984281009-863453504c52.jpg",
    price: 79.99,
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["brown", "black"],
    stock: 25
  },
  {
    id: "p006",
    name: "Chronograph Sports Watch",
    category: "Watches",
    brand: "GenzWear",
    description: "High-performance chronograph sports watch with stylish design.",
    image: "https://i.ibb.co/Qj9pywfY/vvs-Yhi-Bvqg-b-HE-unsplash.jpg",
    price: 129.99,
    colors: ["black", "silver"],
    stock: 15
  }
];

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-xl overflow-hidden p-4 flex flex-col justify-between
                       shadow-[0_0_20px_rgba(255,0,150,0.4),0_0_30px_rgba(0,200,255,0.3)]
                       transition-transform duration-300 hover:scale-105"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            {/* Product Info */}
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.category}</p>
              {product.sizes && (
                <p className="text-sm">
                  <span className="font-semibold">Sizes:</span> {product.sizes.join(", ")}
                </p>
              )}
              {product.colors && (
                <p className="text-sm">
                  <span className="font-semibold">Colors:</span> {product.colors.join(", ")}
                </p>
              )}
              {product.stock !== undefined && (
                <p className="text-sm">
                  <span className="font-semibold">Stock:</span> {product.stock}
                </p>
              )}

              <div className="flex items-center justify-between mt-2">
                <span className="text-xl font-bold text-yellow-500">${product.price}</span>
                <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md shadow hover:bg-blue-400 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
