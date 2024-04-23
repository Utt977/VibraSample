import React from "react";
import FuelFilling from "../assets/FuelFilling.jpg";

const EnergyDesc = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-5/6 mx-auto mt-8 md:mt-12">
      {/* Image Section */}
      <div className="md:w-1/2 mb-4 md:mb-0">
        <img src={FuelFilling} alt="Fuel Filling" className="rounded-lg shadow-lg" />
      </div>

      {/* Text Content Section */}
      <div className="md:w-1/2 md:ml-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to <span className="text-lime-500">Vibra Energy Ltd</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Setting the standards for <span className="text-lime-500">over 10 years</span>
        </h2>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          Based in Berkshire and supported by our sister company Incell Build & Design Ltd,
          Vibra Energy Ltd is a successful company operating throughout the UK. We specialize
          in providing energy-efficient solutions and are deeply committed to hard work,
          exceptional customer service, and offering high-quality products.
        </p>
        <button className="bg-lime-500 hover:bg-lime-600 text-white py-2 px-6 rounded-md shadow-md">
          Know More About Us
        </button>
      </div>
    </div>
  );
};

export default EnergyDesc;
