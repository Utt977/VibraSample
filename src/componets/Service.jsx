import React from "react";
import BoilerReplacement from "../assets/BoilerReplacement.png";
import ExternalWallInsulation from "../assets/ExternalWallInsulation.jpg";
import EnergyAssessment from "../assets/EnergyAssesment.png";
import CavityWallInsulation from "../assets/CavityWallInsulation.jpg";
import CentralHeating from "../assets/CentralHeating.jpg";
import SmartHeatingControl from "../assets/SmartHeatingControl.png";
import SolarPanel from "../assets/SolarPanel.jpg";

const Service = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-5/6">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
          <h3 className="text-lg md:text-xl">
            At Vibra Energy Ltd, we offer a range of services tailored to meet
            your energy efficiency needs:
          </h3>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Service Item 1 */}
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img
              src={BoilerReplacement}
              alt="Boiler"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold mb-2">Boiler Replacement</h3>
            <p className="text-sm">
              Upgrade your home's efficiency and comfort with our Boiler
              Replacement services.
            </p>
          </div>

          {/* Service Item 2 */}
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img
              src={ExternalWallInsulation}
              alt="External Wall Insulation"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold mb-2">External Wall Insulation</h3>
            <p className="text-sm">
              External Wall Insulation is a cost-effective solution enhancing
              energy efficiency and comfort in buildings.
            </p>
          </div>

          {/* Service Item 3 */}
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img
              src={EnergyAssessment}
              alt="Energy Assessment"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold mb-2">Energy Assessment</h3>
            <p className="text-sm">
              Conduct a thorough energy assessment to enhance efficiency in
              buildings.
            </p>
          </div>

          {/* Service Item 4 */}
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img
              src={CavityWallInsulation}
              alt="Cavity Wall Insulation"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold mb-2">Cavity Wall Insulation</h3>
            <p className="text-sm">
              Fill the gap between inner and outer layers of walls with
              insulating material.
            </p>
          </div>

          {/* Service Item 5 */}
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img
              src={CentralHeating}
              alt="First Time Central Heating"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold mb-2">
              First Time Central Heating
            </h3>
            <p className="text-sm">
              Install a comprehensive heating system for the first time in a
              property.
            </p>
          </div>

          {/* Service Item 6 */}
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img
              src={SmartHeatingControl}
              alt="Smart Heating Controls"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold mb-2">Smart Heating Controls</h3>
            <p className="text-sm">
              Revolutionize home climate management with intuitive and remote
              heating controls.
            </p>
          </div>

          {/* Service Item 7 */}
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img
              src={SolarPanel}
              alt="Solar Panels"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold mb-2">Solar Panels</h3>
            <p className="text-sm">
              Harness sunlight to generate clean and renewable energy through
              solar panels.
            </p>
          </div>
          {/* Service Item 8 */}
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img src={CavityWallInsulation} alt="Cavity" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-lg font-bold mb-2">Cavity Wall Insulation</h3>
            <p className="text-sm">
              Fill the gap between inner and outer layers of walls with
              insulating material.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
