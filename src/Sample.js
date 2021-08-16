import React from "react";

export default function Sample({ mode }) {
  if (mode !== "sample") return null;
  console.log("sample");
  return <h1>This is sample</h1>;
}
