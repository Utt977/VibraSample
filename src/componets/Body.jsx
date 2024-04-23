import React from "react";

import HeroSlider from "./HeroSlider";
import Service from "./Service";
import Welcome from "./Welcome";
import EnergyDesc from "./EnergyDesc";
import Certification from "./Certification";

const Body = () => {
  return (
    <div>
      <HeroSlider />
      <Welcome />
      <EnergyDesc/>
      <Certification/>
      <Service/>
    </div>
  );
};

export default Body;
