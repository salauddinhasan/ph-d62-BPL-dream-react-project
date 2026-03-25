import React, { use } from "react";
import AvailablePlayers from "./AvailablePlayers";

const Players = ({ playersPromise }) => {
  // console.log(playersPromise);
  const players = use(playersPromise);
  console.log(players);
  return(
    <div>
        <h2>players {players.length}</h2>

        <AvailablePlayers players ={players}/>
    </div>
  )

   
};

export default Players;
