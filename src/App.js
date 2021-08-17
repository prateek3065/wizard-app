import Header from "./Header.js";
import { useState, useEffect } from "react";
import Sample from "./Sample.js";
import About from "./About.js";
import Home from "./Home.js";

function App() {
  const [mode, setMode] = useState(() => {
    return "home";
  });
  const [step, setStep] = useState(() => {
    return "1";
  });
  const [isModalOpen, setModalOpen] = useState(() => {
    return true;
  });
  function selectPage() {
    if (mode !== "home") return null;
    console.log("here");
    return Home({ step, setStep, isModalOpen, setModalOpen });
  }
  useEffect(() => {
    console.log(`mode is${mode}`);
    setStep("1");
  }, [mode]);
  return (
    <>
      <Header setMode={setMode} />
      {selectPage()}
      <Sample mode={mode} />
      <About mode={mode} />
    </>
  );
}

export default App;
