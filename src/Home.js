import React from "react";
import Steps from "./Steps";
export default function Home({ step, setStep }) {
  console.log(step);
  return (
    <div style={{ backgroundColor: "gray" }}>{Steps({ step, setStep })}</div>
  );
}
