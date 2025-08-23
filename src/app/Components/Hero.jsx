import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
  <img
    src="https://i.ibb.co/MkbsK4v1/faith-lee-rg5-Wfu-Aih-U8-unsplash.jpg"
    alt="GenzWear Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />
  {/* <div className="absolute inset-0 bg-black bg-opacity-40 -z-10"></div> */}
  <div className="relative z-10 px-4 ">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
      Step Into <span className="text-yellow-400">GenzWear</span>
    </h1>
    <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
      Trendy clothing & fashion essentials for your bold style.
    </p>
    <a
      href="#products"
      className="relative inline-block px-8 py-4 font-bold text-white bg-blue-500 rounded-lg shadow-xl
                 hover:bg-blue-400 hover:shadow-blue-500 transition-all duration-300
                 before:absolute before:inset-0 before:rounded-lg "
    >
      View Products
    </a>
  </div>
</section>
  );
};

export default Hero;
