import React, { Component, useEffect, useState } from "react";
import Table from "./common/table";
import Label from "./common/label";
import  {getPlayersScore, getMaxScore } from "../services/fakePlayerService";

function ParticipantsDisplayTable (props) {

  const bb =  props;

  const [state, setState] = useState({ playersScore: {}, maxScores:[] })

  const getFunPlayersScore = () => {
    const  playersScore   =  getPlayersScore(); 
    const maxScores = getMaxScore();

    setState({ playersScore: playersScore, maxScores: maxScores });
  }

  const playersScore = state.playersScore;
  const maxScores = state.maxScores;

  useEffect(() => {
    getFunPlayersScore();
  }, []);

  const columns = [
    {
      key: "name",
      label: "Player",
      content: player => <Label text={player.name} />
    },
    {
      key: "score",
      label:"Score",
      content: player => <Label text={player.score} />
    },
  ];

  return (
    <div className="bracket">
      <Table
         columns={columns}
         data={playersScore}
         maxScores = {maxScores}
      />
    </div>
  );
}
export default ParticipantsDisplayTable;

