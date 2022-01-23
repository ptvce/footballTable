import React, { Component, useEffect,useState } from "react";
import ParticipantsTable from "./ParticipantsInputTable";
import  {getPlayers, savePlayers} from "../services/fakePlayerService";

function Participants({player1, player2, storageKey}) {

  var key = storageKey;
  const [state, setState] = useState({
        players: []});

  const getFunPlayers = () => {
    //ToDo: getPlayers from DB
     //const  players   =  getPlayers(); 
     
     const popPlayers = [];
     popPlayers.push(player1);
     popPlayers.push(player2);
     const players = [];

     for (let i=0 ; i< popPlayers.length ; i++)
          players.push({_id:i, name: popPlayers[i], score: 0})

     setState({ players: players });
  }

   useEffect(() => {
     getFunPlayers();
   },[]);

  const handleAdd =  player => {
    const players = [...state.players];
      const index = players.indexOf(player);
      players[index] = { ...players[index] };
      players[index].score = players[index].score + 1;
      setState({ players });
      savePlayers(storageKey,players);
  };
 
  return (
    <div className="row">
       <div className="col">
        <ParticipantsTable
          players={state.players}
          onAdd={handleAdd}
        />
      </div>
    </div>
  );
}

export default Participants;
