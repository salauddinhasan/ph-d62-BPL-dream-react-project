import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers";

const Players = ({ playersPromise }) => {
  // console.log(playersPromise);
  const players = use(playersPromise);
  console.log(players);


  const [selected, setSelected] = useState('available')
  console.log(selected);


  return(
    <div>
        <div className="flex items-center justify-between py-5 ">
          <h1 className="text-3xl font-bold">Available Players</h1>
          <div>
            <button 
            onClick={() => setSelected('available')}
            className={`btn ${selected === 'available' ? 'bg-amber-200' : ''}`}>Available</button>
            <button onClick={() => setSelected('selected')}
            className={`btn ${selected === 'selected' ? 'bg-amber-200' : ''}`}>Selected</button>
          </div>
        </div>
        <AvailablePlayers players ={players}/>
    </div>
  )

   
};

export default Players;
