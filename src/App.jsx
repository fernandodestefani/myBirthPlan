import { useState } from "react";
import { ActionButtons } from "./components/ActionButtons";
import BirthPlanForm from "./components/BirthPlanForm";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import { jsPDF } from "jspdf";
import logoBase64 from "./assets/logoBase64";

export default function App() {
  const [motherName, setMotherName] = useState("");

  function handleGeneratePDF() {
    const doc = new jsPDF();
    /* logo */
    const imgWidth = 25;
    const imgHeight = 25;
    const imgX = 15;
    const imgY = 15;
    doc.addImage(logoBase64, "PNG", imgX, imgY, imgWidth, imgHeight);

    /* title */
    doc.setFont("quicksand", "sans-serif");
    doc.setFontSize(24);
    const title = "My Birth Plan";
    const textX = imgX + imgWidth + 10;
    const textY = (imgY + imgHeight) / 2 + 10; 
    doc.text(title, textX, textY);

    /* Save */
    doc.save("my-birth-plan.pdf");
    /* doc.text(`Mother's Name: ${motherName}`, 10, 10); */
  }

  return (
    <div>
      <Logo />
      <Header />
      <BirthPlanForm motherName={motherName} setMotherName={setMotherName} />
      <ActionButtons onGeneratePDF={handleGeneratePDF} />
    </div>
  );
}
