import React from "react";
import { Camera } from "lucide-react";
import logo from "../logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="relative flex items-center space-x-4">
            <div className="h-16 w-16 overflow-hidden border border-white">
              <img
                src={logo}
                alt="Manoj Srinivasa Photography"
                className="h-auto w-auto object-cover"
              />
            </div>
            <span className="font-\[Times_New_Roman\] text-base p-4">
              MANOJ SRINIVASA
            </span>
          </div>

          <div className="flex space-x-6">
            <a
              href="#home"
              className="hover:text-indigo-400 transition duration-300"
            >
              Home
            </a>
            <a
              href="#gallery"
              className="hover:text-indigo-400 transition duration-300"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-400 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Manoj Srinivasa Photography. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
