import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, data, maxScores }) => {
  return (
    <table style={{ display:"table", borderCollapse: "separate", boxSizing: "border-box", textIndent: "initial", borderSpacing: "2px", borderColor: "gray"}}>
      <TableHeader columns={columns} />
      <TableBody columns={columns} data={data} maxScores= {maxScores}/>
    </table>
  );
};

export default Table;
