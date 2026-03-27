import React from "react";

import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Selected = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
  console.log(selectedPlayers);
  return (
    <div>
      {selectedPlayers.length === 0 ? 
      <div className="space-y-5 pt-12">
        <h2 className="text-3xl font-bold text-center">NO Players Selected yet</h2>
        <p className="text-lg font-semibold text-center">Go to Available tab to select players</p>
      </div> : selectedPlayers.map((player, id) => {

        const handleDeleteSelectedPlayer = (player) => {
            console.log(player, 'player')
            const filteredPlayers = selectedPlayers.filter(
                (selectedPlayers) => selectedPlayers.playerName !== player.playerName);
                
                setSelectedPlayers(filteredPlayers);
                setCoin(Number(coin) + Number(player.price))

        }

        return (
          <div
            key={id}
            className="flex shadow-xl border border-gray-100 p-4 rounded-lg gap-4 mt-5"
          >
            <img
              src={player.playerImg}
              alt="img"
              className="w-14 h-14 object-cover rounded-lg"
            />

            <div className="px-4 w-full flex items-center justify-between">
              {/* LEFT */}
              <div className="flex flex-col">
               <div className="flex items-center gap-2">
                 <FaUser />
                <h2 className="text-lg text-gray-700 font-bold">
                  {player.playerName}
                </h2>
                </div>  

               <div>
                 <h3 className="font-bold text-base">{player.playerType}</h3>
               </div>

              </div>
               

              {/* RIGHT */}
              <MdDelete onClick={() => handleDeleteSelectedPlayer(player)} className="text-gray-800  cursor-pointer text-xl" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Selected;
