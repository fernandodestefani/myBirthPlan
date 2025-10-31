import { useState } from "react";
import { ActionButtons } from "./components/ActionButtons";
import BirthPlanForm from "./components/BirthPlanForm";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import { jsPDF } from "jspdf";
import logoBase64 from "./assets/logoBase64";

export default function App() {
  const [motherName, setMotherName] = useState("");
  const [babyName, setBabyName] = useState("");
  const [expectedDueDate, setExpectedDueDate] = useState("");
  const [supportPerson, setSupportPerson] = useState("");
  const [birthPlace, setBirthPlace] = useState("")

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

    /* line */
    const lineY = imgY + imgHeight + 5;
    const lineStartX = 15;
    const lineEndX = 195;
    doc.setLineDashPattern([], 0);
    doc.setDrawColor(101, 101, 101);
    doc.setLineWidth(0.05);
    doc.line(lineStartX, lineY, lineEndX, lineY);

    /* Mother's Name */
    doc.setFontSize(14);
    doc.setTextColor(190, 24, 93);
    doc.text("Mother's Name:", 15, lineY + 10);
    doc.setTextColor(68, 68, 68);
    doc.text(motherName, 55, lineY + 10);

    /* Baby's Name */
    doc.setFontSize(14);
    doc.setTextColor(190, 24, 93);
    doc.text("Baby's Name:", 15, lineY + 20);
    doc.setTextColor(68, 68, 68);
    doc.text(babyName, 55, lineY + 20);

    /* Due Date */
    doc.setFontSize(14);
    doc.setTextColor(190, 24, 93);
    doc.text("Due Date:", 15, lineY + 30);
    doc.setTextColor(68, 68, 68);
    doc.text(expectedDueDate, 55, lineY + 30);

    /* Support Person */
    doc.setFontSize(14);
    doc.setTextColor(190, 24, 93);
    doc.text("Support Person:", 15, lineY + 40);
    doc.setTextColor(68, 68, 68);
    doc.text(supportPerson, 55, lineY + 40);

    /* Birth Place */
    doc.setFontSize(14);
    doc.setTextColor(190, 24, 93);
    doc.text("Birth Place:", 15, lineY + 50);
    doc.setTextColor(68, 68, 68);
    doc.text(birthPlace, 55, lineY + 50);

    /* Save */
    doc.save("my-birth-plan.pdf");
    /* doc.text(`Mother's Name: ${motherName}`, 10, 10); */
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
      />
      <ActionButtons onGeneratePDF={handleGeneratePDF} />
    </div>
  );
}
