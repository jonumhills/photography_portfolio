import React from "react";
import backgroundImage from "../data/background1.JPG";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Capturing Life's Moments
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Professional photography that tells your story
        </p>
        <a
          href="#gallery"
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          View Gallery
        </a>
      </div>
    </section>
  );
};

export default Hero;
