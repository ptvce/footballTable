import React, { Component } from "react";

function TableHeader (props) {

  return (
    <thead>
      <tr>
        {props.columns.map(column => (
          <th
            key={column.key}
          >
            {column.label} 
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
