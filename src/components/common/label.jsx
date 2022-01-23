import React from "react";

const Label = ({ text }) => {
  return (
    <div className="form-group" id="text">
      <div className="item" key={text} >{text}</div>
    </div>
    
  );
 
};

export default Label;