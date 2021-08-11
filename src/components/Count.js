import React from "react";

const Count = ({ num, handleChange }) => {
  return (
    <span
      style={{
        display: num === 0 ? "none" : "flex",
        width: "2.6vw",
        fontSize: "1vw",
        textAlign: "center",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        border: "black thin solid",
        justifyContent: "center",
        alignItems: "center",
      }}
      onChange={handleChange}
    >
      {num}
    </span>
  );
};

export default Count;
