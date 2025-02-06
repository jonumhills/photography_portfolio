import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 h-16 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ">
        <div className="flex justify-between items-center h-full">
          {/* Logo & Name */}
          <div className="relative flex items-center">
            <div className="h-16 w-16 rounded-full overflow-hidden border border-white">
              <img
                src={logo}
                alt="Manoj Srinivasa Photography"
                className="h-auto w-auto object-cover"
              />
            </div>
            <span className="font-\[Times_New_Roman\] text-base p-4  text-gray-800">
              MANOJ SRINIVASA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-indigo-600">
              Home
            </a>
            <a href="#gallery" className="text-gray-600 hover:text-indigo-600">
              Gallery
            </a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#gallery"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
