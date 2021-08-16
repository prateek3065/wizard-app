import React from "react";

export default function About({ mode }) {
  if (mode !== "about") return null;
  return (
    <>
      <div>
        <h1>This is about</h1>
      </div>
    </>
  );
}
