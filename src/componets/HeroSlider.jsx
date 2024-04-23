import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SolarImg from "../assets/SolarImg.jpg";
import WorkerImg from "../assets/WorkerImg.jpg";

const Body = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div className="relative">
        <img src={SolarImg} alt="Slide 1" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-4">
          <h2 className="text-2xl font-bold mb-2">SOLAR PANEL INSTALLATION</h2>
          <p className="text-center mb-4">Reduce your electricity bills with a new SOLAR PV Installation and 0% VAT.</p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Read More
          </button>
        </div>
      </div>
      <div className="relative">
        <img src={WorkerImg} alt="Slide 2" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-4">
          <h2 className="text-2xl font-bold mb-2">SOLAR PANEL INSTALLATION</h2>
          <p className="text-center mb-4">Reduce your electricity bills with a new SOLAR PV Installation and 0% VAT.</p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Read More
          </button>
        </div>
      </div>
      <div className="relative">
        <img src={SolarImg} alt="Slide 3" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-4">
          <h2 className="text-2xl font-bold mb-2">SOLAR PANEL INSTALLATION</h2>
          <p className="text-center mb-4">Reduce your electricity bills with a new SOLAR PV Installation and 0% VAT.</p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Read More
          </button>
        </div>
      </div>
    </Slider>
  );
};

export default Body;
