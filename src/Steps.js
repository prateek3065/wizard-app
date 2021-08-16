import React from "react";
import "./App.css";
export default function Steps({ step, setStep }) {
  function twoChild(q) {
    return (
      <div className="message-box">
        <div>
          <h1>{q}</h1>
        </div>
        <div className="btn-div">
          <button className="btn" onClick={() => setStep((prev) => prev + 1)}>
            Yes
          </button>
          <button className="btn" onClick={() => setStep((prev) => prev + 0)}>
            No
          </button>
        </div>
      </div>
    );
  }
  function oneChild(q) {
    return (
      <div>
        <div>
          <h1>{q}</h1>
        </div>
      </div>
    );
  }
  function noChild(q) {
    return (
      <div>
        <div>
          <h1>{q}</h1>
        </div>
      </div>
    );
  }
  function specialChild(q) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1>{q}</h1>
        </div>
      </div>
    );
  }
  if (step === "1") return twoChild("Are you Business Owner");
  else if (step === "11") return twoChild("Located in US");
  else if (step === "10") return twoChild("LogIn with faceBook");
  else if (step === "111") return twoChild("Large Corporation");
  else if (step === "110") return noChild("Access Denied");
  else if (step === "101") return oneChild("Fb logIn widget");
  else if (step === "100") return oneChild("Email signUp form");
  else if (step === "1111") return twoChild("Interested in Taking survey");
  else if (step === "1110")
    return twoChild("Contracted with lasge Corporation ?");
  else if (
    step === "1011" ||
    step === "1001" ||
    step === "1010" ||
    step === "1000"
  )
    return specialChild("Detect If Corporate Email");
  else if (step === "11110" || step === "11111")
    return noChild("Large Corporation Sign Up form");
  else if (step === "11101")
    return noChild("User must contact Large Corporation");
  else if (step === "11100") return noChild("Small Corporation Sign up form");
  else if (
    step === "1011" ||
    step === "1010" ||
    step === "1001" ||
    step === "1000"
  )
    return oneChild("Detect if Corporate Email");
}
