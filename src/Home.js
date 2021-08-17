import Steps from "./Steps";
export default function Home({ step, setStep }) {
  console.log(step);
  return Steps({ step, setStep });
}
