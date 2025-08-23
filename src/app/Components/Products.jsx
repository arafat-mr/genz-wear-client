import dbConnect from "@/Library/dbConnect";
import Image from "next/image";
import Link from "next/link";

const Products = async () => {
  const serviceCollection = await dbConnect("products");
  const products = await serviceCollection.find({}).toArray();

  return (
    <div className=" mx-auto px-2 py-10 max-w-11/12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id.toString()}
            className="relative bg-white rounded-xl overflow-hidden p-4 flex flex-col justify-between
                       shadow-[0_0_20px_rgba(255,0,150,0.4),0_0_30px_rgba(0,200,255,0.3)]
                       transition-transform duration-300 hover:scale-105"
          >
            {/* Product Image */}
            <div className="relative w-full h-64">
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
              <p className="text-gray-600 text-sm">{product.category}</p>
              {product.sizes && (
                <p className="text-sm">
                  <span className="font-semibold">Sizes:</span>{" "}
                  {product.sizes.join(", ")}
                </p>
              )}
              {product.colors && (
                <p className="text-sm">
                  <span className="font-semibold">Colors:</span>{" "}
                  {product.colors.join(", ")}
                </p>
              )}
              {product.stock !== undefined && (
                <p className="text-sm">
                  <span className="font-semibold">Stock:</span> {product.stock}
                </p>
              )}

              <div className="flex items-center justify-between mt-3">
                <span className="text-xl font-bold text-yellow-500">
                  ${product.price}
                </span>
              </div>

              {/* Buttons */}
      <div className="flex gap-4 mt-3 w-full ">
  <Link
    href={`/products/${product._id.toString()}`}
    className="flex-1 btn btn-sm md:btn-md bg-gray-200 text-gray-800 font-bold rounded-md text-center hover:bg-gray-300 transition text-sm"
  >
    Show Details
  </Link>

  <button className=" flex-1 btn btn-sm md:btn-md  bg-blue-500 text-white font-bold rounded-md shadow hover:bg-blue-400 transition text-sm">
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
