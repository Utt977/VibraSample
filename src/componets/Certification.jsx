import React from "react";
import GreenDeal from "../assets/GreenDeal.jpeg";
import PASImg from "../assets/PASImg.jpeg";

const Certification = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Text Content Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          Green Deal and ECO Installations
        </h1>
        <h2 className="text-lime-500 text-xl md:text-2xl font-bold">
          Certification Badges
        </h2>
      </div>

      {/* Image Section (in row) */}
      <div className="flex justify-center w-full">
        <img
          src={GreenDeal}
          alt="Green Deal"
          className="w-56 md:w-72 mx-2 rounded-lg shadow-lg"
        />
        <img
          src={PASImg}
          alt="PAS Certification"
          className="w-56 md:w-72 mx-2 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Certification;
