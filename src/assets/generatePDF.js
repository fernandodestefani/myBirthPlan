import jsPDF from "jspdf";
import logoBase64 from "./logoBase64";

export default function generatePDF({
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
}) {
  const doc = new jsPDF();

  // logo
  const imgWidth = 25;
  const imgHeight = 25;
  const imgX = 15;
  const imgY = 15;
  doc.addImage(logoBase64, "JPEG", imgX, imgY, imgWidth, imgHeight);

  // title
  doc.setFont("helvetica", "normal");
  doc.setFontSize(24);
  doc.text("My Birth Plan", imgX + imgWidth + 10, (imgY + imgHeight) / 2 + 10);

  // line
  let lineY = imgY + imgHeight + 5;
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
    { label: "Birth Type:", value: birthType },
    { label: "Environment:", value: environmentPreferences },
    { label: "Eating:", value: eatingDuringLabor },
    { label: "Mobility:", value: mobilityDuringLabor },
    { label: "Relief options:", value: reliefOptions },
    { label: "Pain Medication:", value: painMedication },
    { label: "Labor Position:", value: laborPosition },
    { label: "Episiotomy Preference:", value: episiotomyPreference },
    { label: "Umbilical Cord Cutting:", value: umbilicalCordCuttingPreference },
    { label: "Placenta Viewing:", value: placentaViewing },
    { label: "Contact with the Baby:", value: immediateContactPreference },
    { label: "Breastfeeding:", value: breastfeeding },
    { label: "Baby's First Bath:", value: babyFirstBath },
    { label: "Additional Notes:", value: notes },
  ];

  fields.forEach((field, i) => {
    if (
      !field.value ||
      (Array.isArray(field.value) && field.value.length === 0)
    ) {
      return;
    }

    const y = lineY + 10;
    doc.setFontSize(14);
    doc.setTextColor(190, 24, 93);
    doc.text(field.label, 15, y);

    const valueText = Array.isArray(field.value)
      ? field.value.join("   ")
      : field.value;

    doc.setTextColor(68, 68, 68);
    const splittedText = doc.splitTextToSize(valueText || "", 120);
    doc.text(splittedText, 65, y);
    lineY += 10 + (splittedText.length - 1) * 6;
  });

  doc.setFont("helvetica", "italic");
  doc.setFontSize(12);
  doc.setTextColor(190, 24, 93);
  const pageHeight = doc.internal.pageSize.height;
  const marginBottom = 15;
  const finalY = pageHeight - marginBottom;
  const finalText = "These preferences may change depending on medical needs";
  const splittedFinalText = doc.splitTextToSize(finalText, 180);
  doc.text(splittedFinalText, 15, finalY);

  doc.save("my-birth-plan.pdf");
}
