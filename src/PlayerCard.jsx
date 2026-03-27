 
 
import React, { useState } from "react";
import { IoFlag, IoPerson } from "react-icons/io5";
import { toast } from "react-toastify";
 

const PlayerCard = ({player, setCoin, coin, setSelectedPlayers, selectedPlayers}) => {
    const [isSelected, setIsSelected] =  useState(false)
   

    const handleChoosePlayer = () => {
  if (player.price && coin >= player.price) {
    setIsSelected(true);
    setCoin(prev => Number(prev) - Number(player.price));
    toast.success(`${player.playerName} selected`)
  } else {
    toast.error("Not enough coins");
  }

  setSelectedPlayers([...selectedPlayers, player])
};

    return (
        <div className="card bg-base-100  shadow-sm">
              <figure>
                <img
                  className="w-80 h-65 rounded-xl items-center gap-4"
                  src={player.playerImg}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="flex items-center gap-2">
                  <IoPerson className="text-xl font-bold" />
                  <h2 className="card-title">{player.playerName}</h2>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <IoFlag className="text-xs items-center text-gray-400" />
                    <p className="text-base font-semibold text-gray-400">
                      {player.playerCountry}
                    </p>
                  </div>
                  <button className="btn btn-soft text-xs text-gray-400">
                    {player.playerType}
                  </button>
                </div>

                <hr className="text-gray-200 " />

                <p className="text-base font-bold text-gray-600">
                  {player.rating}
                </p>

                <div className="flex justify-between items-center">
                  <h3 className="text-base font-bold text-gray-600">
                    {player.battingStyle}
                  </h3>
                  <h3 className="text-sm font-semibold text-gray-400">
                    {player.bowlingStyle}
                  </h3>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="text-base font-bold text-gray-600">$
                    {player.price}
                  </h3>
                  <button className="btn" onClick={handleChoosePlayer} disabled={isSelected}> 
                    {isSelected === true ? 'Selected' : 'Choose Player'}
                  </button>
                </div>
              </div>
            </div>
           
    );
};

export default PlayerCard;