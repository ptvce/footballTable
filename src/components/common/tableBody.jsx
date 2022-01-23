import React, { Component, useState } from "react";
import _ from "lodash";
import { func } from "prop-types";

function TableBody(props) {

const { data, columns, maxScores } = props;

const renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

const createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

const getWinnerStyle = (item = {}) => {
    if (item.score >= maxScores)
   
        return (<tr key={item._id} style={{backgroundColor:"green"}} >
                    {columns.map(column => (
                    <td key={createKey(item, column)}>
                    {renderCell(item, column)}
                    </td>))}
                    </tr> )
    
        return (<tr key={item._id} >
                    {columns.map(column => (
                    <td key={createKey(item, column)}>
                    {renderCell(item, column)}
                    </td>))}
                </tr>)

};

const createResult = () => {
  if (Array.isArray(data))
  {
     return data.map(item => (
      getWinnerStyle(item)
    ))
  }
  else{
    for (let obj in data)
    {
      data[obj].map(item => (
        getWinnerStyle(item)
      ))
    }
  }
  
}


  return (
    <tbody>
     {data.map(item => (
        getWinnerStyle(item)
      ))} 

       {/* {createResult()}  */}
    </tbody>
  );
}
export default TableBody;
