import { useState } from "react";
import { ActionButtons } from "./components/ActionButtons";
import BirthPlanForm from "./components/BirthPlanForm";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import generatePDF from "./assets/generatePDF";

export default function App() {
  const [motherName, setMotherName] = useState("");
  const [babyName, setBabyName] = useState("");
  const [expectedDueDate, setExpectedDueDate] = useState("");
  const [supportPerson, setSupportPerson] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [birthType, setBirthType] = useState("");
  const [eatingDuringLabor, setEatingDuringLabor] = useState("");


  return (
    <div>
      <Logo />
      <Header />
      <BirthPlanForm
        motherName={motherName}
        setMotherName={setMotherName}
        babyName={babyName}
        setBabyName={setBabyName}
        expectedDueDate={expectedDueDate}
        setExpectedDueDate={setExpectedDueDate}
        supportPerson={supportPerson}
        setSupportPerson={setSupportPerson}
        birthPlace={birthPlace}
        setBirthPlace={setBirthPlace}
        birthType={birthType}
        setBirthType={setBirthType}
        eatingDuringLabor={eatingDuringLabor}
        setEatingDuringLabor={setEatingDuringLabor}
      />
      <ActionButtons
        onGeneratePDF={() =>
          generatePDF({
            motherName,
            babyName,
            expectedDueDate,
            supportPerson,
            birthPlace,
            birthType,
            eatingDuringLabor,
          })
        }
      />
    </div>
  );
}
