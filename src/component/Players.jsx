import React, { use } from "react";
import { FaUser } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";

const Players = ({ getDataPromise }) => {
  const players = use(getDataPromise);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {players.map((p) => (
        <div
          key={p.playerId}
          className="p-6 border rounded-2xl shadow-sm bg-white hover:shadow-lg transition-all"
        >
          {/* Player Image */}
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-52 object-cover rounded-xl mb-4"
          />

          {/* Name Section */}
          <div className="flex items-center gap-3 mb-3">
            <FaUser className="text-gray-500 text-lg" />
            <h2 className="text-xl font-bold">{p.name}</h2>
          </div>

          {/* Country & Role */}
          <div className="flex justify-between items-center text-gray-500 mb-4">
            <div className="flex items-center gap-2">
              <IoFlag />
              <span className="font-medium">{p.country}</span>
            </div>
            <span className="bg-gray-100 px-3 py-1 rounded-lg text-xs font-bold uppercase">
              {p.role}
            </span>
          </div>

          <hr className="mb-4" />

          {/* Rating Section (আপনার সেই ডিভ গুলো যা আমি কেটেছিলাম) */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-800">Rating</h3>

            <div className="flex justify-between text-sm font-semibold">
              <span className="text-gray-700">{p.battingType}</span>
              <span className="text-gray-400">{p.bowlingType}</span>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="font-bold text-gray-900">
                Price: ${p.biddingPrice.toLocaleString()}
              </span>
              <button className="border-2 border-yellow-400 hover:bg-yellow-400 px-4 py-2 rounded-xl font-bold text-sm transition-all active:scale-95">
                Choose Player
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Players;
