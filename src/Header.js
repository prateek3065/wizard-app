import React from "react";
import "./App.css";
export default function header({ setMode }) {
  return (
    <div
      style={{
        height: "200px",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px",
      }}
    >
      <div>
        <h1>WizardApp</h1>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          color: "white",
          backgroundColor: "black",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div
          className="mode-buttons"
          onClick={() => {
            setMode("home");
          }}
        >
          Home
        </div>
        <div
          className="mode-buttons"
          onClick={() => {
            setMode("sample");
          }}
        >
          Sample
        </div>
        <div
          className="mode-buttons"
          onClick={() => {
            setMode("about");
          }}
        >
          About
        </div>
      </div>
    </div>
  );
}
