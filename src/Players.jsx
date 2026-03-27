import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import Selected from "./Selected";

const Players = ({ playersPromise, setCoin, coin }) => {
  // console.log(playersPromise);
  const players = use(playersPromise);
  console.log(players);

  const [selected, setSelected] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div>
      <div className="flex items-center justify-between py-5 ">
        {selected === "available" ? (
          <h1 className="text-3xl font-bold">Available Players</h1>
        ) : (
          <h1 className="text-3xl font-bold">Selected Players ({selectedPlayers.length} / {players.length})</h1>
        )}
        <div>
          <button
            onClick={() => setSelected("available")}
            className={`btn ${selected === "available" ? "bg-amber-200" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setSelected("selected")}
            className={`btn ${selected === "selected" ? "bg-amber-200" : ""}`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {selected === "available" ? (
        <AvailablePlayers
          players={players}
          setCoin={setCoin}
          coin={coin}
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
        />
      ) : (
        <Selected selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}/>
      )}
    </div>
  );
};

export default Players;
