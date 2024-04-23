import React from "react";

const Welcome = () => {
  return (
    <div className="w-5/6 md:w-6/6 lg:w-3/4 xl:w-3/3 mx-auto p-4 md:p-8">
      <div className="text-center mb-4 md:mb-8">
        <p className="text-lg md:text-xl text-lime-400">Meets Sustainability</p>
        <h2 className="text-2xl md:text-4xl font-bold">
          Welcome To <span className="text-lime-600">Vibra Energy</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Grants & Funding */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            className="w-full mb-4"
            src="/path/to/grants-image.jpg"
            alt="Grants & Funding"
          />
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-lime-500">
            Grants & Funding
          </h2>
          <p className="text-sm md:text-base text-lime-500">
            Check out our grants page for the latest info on funding - FREE home
            insulation for homes in Council Tax Bands A - D
          </p>
          <button className="mt-4 hover:text-lime-500 bg-black text-white py-2 px-4 rounded-md">
            Find Out More
          </button>
        </div>

        {/* Solar Panels */}
        <div className="bg-lime-500 rounded-lg shadow-md p-6">
          <img
            className="w-full mb-4"
            src="/path/to/solar-panels-image.jpg"
            alt="Solar Panels"
          />
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">
            Solar Panels
          </h2>
          <p className="text-sm md:text-base text-white">
            Generate your own electricity and beat the energy price rises, with
            a new solar panels installation complete with solar storage
          </p>
          <button className="mt-4 hover:text-white bg-black text-white py-2 px-4 rounded-md">
            Find Out More
          </button>
        </div>

        {/* Landlords */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            className="w-full mb-4"
            src="/path/to/landlords-image.jpg"
            alt="Landlords"
          />
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-lime-500">
            Landlords
          </h2>
          <p className="text-sm md:text-base text-lime-500">
            Partner with a long-established trusted national installer to
            deliver your energy efficiency projects.
          </p>
          <button className="mt-4 bg-black text-white hover:text-lime-500 py-2 px-4 rounded-md">
            Find Out More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
