import PlayerCard from "./PlayerCard";
const AvailablePlayers = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayers}) => {
  console.log(players);
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
      {players.map((player, id) => {
        return (
          <div key={id}>
              <PlayerCard player={player} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />;
          </div>
        )
      })}
    </div>
  );
};

export default AvailablePlayers;
