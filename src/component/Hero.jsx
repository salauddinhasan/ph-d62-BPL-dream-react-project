import React from "react";
import heroImg from "../assets/banner-main.png";
import bgImg from "../assets/bg-shadow.png";

const Hero = () => {
  return (
    <div
      className="bg-black rounded-2xl mx-4 md:mx-10 my-8 overflow-hidden bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex flex-col justify-center items-center text-center py-16 px-6">
        {/* Main Image */}
        <div className="mb-6">
          <img
            src={heroImg}
            alt="Cricket Hero"
            className="w-full max-w-xs md:max-w-md animate-pulse-slow"
          />
        </div>

        {/* Text Content */}
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Assemble Your Ultimate <br className="hidden md:block" /> Dream 11
          Cricket Team
        </h1>

        <p className="text-gray-400 text-lg md:text-xl font-medium mb-8">
          Beyond Boundaries Beyond Limits
        </p>

        {/* Call to Action Button */}
        <div className="p-1 border-2 border-yellow-400 rounded-2xl">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
