import React, { useState } from "react";

const Tab = () => {
  const [isActive, setIsActive] = useState("available");

  return (
    <div className="flex justify-between items-center p-8 max-w-7xl mx-auto">
      <h1 className="text-xl font-bold">
        {isActive === "available" ? "Available Players" : "Selected Players (0/11)"}
      </h1>

      <div className="flex border rounded-xl overflow-hidden">
        {/* --- Available Button --- */}
        <button 
          onClick={() => setIsActive('available')} // Ekhane setIsActive hobe
          className={`px-6 py-3 font-bold transition-all ${
            isActive === 'available' 
            ? 'bg-yellow-400 text-black' 
            : 'bg-white text-gray-500'
          }`}
        > 
          Available
        </button>

        {/* --- Selected Button --- */}
        <button 
          onClick={() => setIsActive('selected')} 
          className={`px-6 py-3 font-bold transition-all ${
            isActive === 'selected' ? 
            'bg-yellow-400 text-black' : 
            'bg-white text-gray-500'
          }`} 
        > 
          Selected (0)
        </button>
      </div>
    </div>
  );
};

export default Tab;