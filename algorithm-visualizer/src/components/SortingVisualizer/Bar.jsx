import React from "react";

function Bar({ value }) {
  return (
    <div
      className="bar"
      style={{
        height: `${value}px`,
        background: "white",
        width: "10px",
      }}
    ></div>
  );
}

export default Bar;
