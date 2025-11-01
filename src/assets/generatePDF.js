import jsPDF from "jspdf";
import logoBase64 from "./logoBase64";

export default function generatePDF({ motherName, babyName, expectedDueDate, supportPerson, birthPlace, birthType, eatingDuringLabor, mobilityDuringLabor, painMedication, episiotomyPreference, umbilicalCordCuttingPreference, placentaViewing, immediateContactPreference, breastfeeding, babyFirstBath }) {
  const doc = new jsPDF();

  // logo
  const imgWidth = 25;
  const imgHeight = 25;
  const imgX = 15;
  const imgY = 15;
  doc.addImage(logoBase64, "PNG", imgX, imgY, imgWidth, imgHeight);

  // title
  doc.setFont("quicksand", "sans-serif");
  doc.setFontSize(24);
  doc.text("My Birth Plan", imgX + imgWidth + 10, (imgY + imgHeight) / 2 + 10);

  // line
  const lineY = imgY + imgHeight + 5;
  doc.setLineDashPattern([], 0);
  doc.setDrawColor(101, 101, 101);
  doc.setLineWidth(0.05);
  doc.line(15, lineY, 195, lineY);

  // data
  const fields = [
    { label: "Mother's Name:", value: motherName },
    { label: "Baby's Name:", value: babyName },
    { label: "Due Date:", value: expectedDueDate },
    { label: "Support Person:", value: supportPerson },
    { label: "Birth Place:", value: birthPlace },
    { label: "Birth Type:", value: birthType},

    {label: "Eating:", value: eatingDuringLabor},
    {label: "Mobility:", value: mobilityDuringLabor},
    {label: "Pain Medication:", value: painMedication},
    {label: "Episiotomy Preference:", value: episiotomyPreference},
    {label: "Umbilical Cord Cutting:", value: umbilicalCordCuttingPreference},
    {label: "Placenta Viewing:", value: placentaViewing},
    {label: "Contact with the Baby:", value: immediateContactPreference},
    {label: "Breastfeeding:", value: breastfeeding},
    {label: "Baby's First Bath:", value: babyFirstBath},
    
  ];

  fields.forEach((field, i) => {
    const y = lineY + 10 + i * 10;
    doc.setFontSize(14);
    doc.setTextColor(190, 24, 93);
    doc.text(field.label, 15, y);
    doc.setTextColor(68, 68, 68);
    doc.text(field.value, 65, y);
  });

  doc.save("my-birth-plan.pdf");
}
