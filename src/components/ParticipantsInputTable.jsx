import React, { Component } from "react";
import Table from "./common/table";
import Label from "./common/label";

function ParticipantsTable (props) {

  const { players } = props;

  const formInput = (event) => {
    const name = event.target.value;
}

  const columns = [
    {
      key: "title",
      label: "Player",
      content: player => <Label text={player.name} />
    },
    {
      key: "score",
      label:"Score",
      content: player => (
      <input type="text"  value={player.score} onChange={(event) => formInput(event)}></input>
      )
    },
    {
      key: "addScore",
      label:"Add Score",
      content: player => (
        <button
          onClick={() => props.onAdd(player)}
          className="btn btn-danger btn-sm"
        >
          +
        </button>
      )
    }
  ];

  return (
    <Table
      columns={columns}
      data={players}
    />
  );
}
export default ParticipantsTable;