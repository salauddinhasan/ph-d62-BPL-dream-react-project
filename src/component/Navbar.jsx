import React from "react";
import logo from "../assets/logo.png";
import { FaBitcoin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-8 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-auto cursor-pointer hover:scale-105 transition-transform"
        />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:block">
        <ul className="flex gap-8 text-gray-600 font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition-colors">
            Home
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">
            Fixture
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">
            Teams
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">
            Schedules
          </li>
        </ul>
      </nav>

      {/* Action Button/Coin Section */}
      <div>
        <button className="bg-white border-2 border-yellow-400 hover:bg-yellow-50 transition-all px-4 py-2 rounded-xl shadow-sm">
          <div className="flex gap-2 items-center">
            <span className="font-bold text-gray-800">30,000</span>
            <FaBitcoin className="text-yellow-500 text-xl" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
