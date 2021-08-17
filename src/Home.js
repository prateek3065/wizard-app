import Steps from "./Steps";
export default function Home({ step, setStep, isModalOpen, setModalOpen }) {
  console.log(step);
  return Steps({ step, setStep, isModalOpen, setModalOpen });
}
