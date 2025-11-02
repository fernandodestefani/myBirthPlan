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
  const [environmentPreferences, setEnvironmentPreferences] = useState([]);
  const [eatingDuringLabor, setEatingDuringLabor] = useState("");
  const [mobilityDuringLabor, setMobilityDuringLabor] = useState("");
  const [reliefOptions, setReliefOptions] = useState([]);
  const [painMedication, setPainMedication] = useState("");
  const [laborPosition, setLaborPosition] = useState("");
  const [episiotomyPreference, setEpisiotomyPreference] = useState("");
  const [umbilicalCordCuttingPreference, setUmbilicalCordCuttingPreference] =
    useState("");
  const [placentaViewing, setPlacentaViewing] = useState("");
  const [immediateContactPreference, setImmediateContactPreference] =
    useState("");
  const [breastfeeding, setBreastfeeding] = useState("");
  const [babyFirstBath, setBabyFirstBath] = useState("");
  const [notes, setNotes] = useState("");

  function handleReset() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (!confirmed) return;

    setMotherName("");
    setBabyName("");
    setExpectedDueDate("");
    setSupportPerson("");
    setBirthPlace("");
    setBirthType("");
    setEnvironmentPreferences([]);
    setEatingDuringLabor("");
    setMobilityDuringLabor("");
    setReliefOptions([]);
    setPainMedication("");
    setLaborPosition("");
    setEpisiotomyPreference("");
    setUmbilicalCordCuttingPreference("");
    setPlacentaViewing("");
    setImmediateContactPreference("");
    setBreastfeeding("");
    setBabyFirstBath("");
    setNotes("");
  }

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
        environmentPreferences={environmentPreferences}
        setEnvironmentPreferences={setEnvironmentPreferences}
        eatingDuringLabor={eatingDuringLabor}
        setEatingDuringLabor={setEatingDuringLabor}
        mobilityDuringLabor={mobilityDuringLabor}
        setMobilityDuringLabor={setMobilityDuringLabor}
        reliefOptions={reliefOptions}
        setReliefOptions={setReliefOptions}
        painMedication={painMedication}
        setPainMedication={setPainMedication}
        laborPosition={laborPosition}
        setLaborPosition={setLaborPosition}
        episiotomyPreference={episiotomyPreference}
        setEpisiotomyPreference={setEpisiotomyPreference}
        umbilicalCordCuttingPreference={umbilicalCordCuttingPreference}
        setUmbilicalCordCuttingPreference={setUmbilicalCordCuttingPreference}
        placentaViewing={placentaViewing}
        setPlacentaViewing={setPlacentaViewing}
        immediateContactPreference={immediateContactPreference}
        setImmediateContactPreference={setImmediateContactPreference}
        breastfeeding={breastfeeding}
        setBreastfeeding={setBreastfeeding}
        babyFirstBath={babyFirstBath}
        setBabyFirstBath={setBabyFirstBath}
        notes={notes}
        setNotes={setNotes}
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
            environmentPreferences,
            eatingDuringLabor,
            mobilityDuringLabor,
            reliefOptions,
            painMedication,
            laborPosition,
            episiotomyPreference,
            umbilicalCordCuttingPreference,
            placentaViewing,
            immediateContactPreference,
            breastfeeding,
            babyFirstBath,
            notes,
          })
        }
        onReset={handleReset}
      />
    </div>
  );
}
