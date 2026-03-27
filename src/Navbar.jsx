import React from "react";
import img from '../src/assets/Vector.png';
import logo from '../src/assets/logo.png';

const Navbar = ({coin}) => {
  return (
    <div>
      <div className=" navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="flex items-center">
            <img src={logo} alt="logo image" className="w-12 h-12 object-center" />
          </a>
        </div>
        
        <div className="flex-none">
          <button className="btn btn-soft gap-2">
            <p>{coin} Coins</p>
            <img src={img} alt="icon image" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
