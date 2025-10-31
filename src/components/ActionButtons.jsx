export function ActionButtons({onGeneratePDF}) {
  return (
    <div className="page-container">
      <div className="action-buttons">
        <button className="reset-btn">Reset</button>
        <button onClick={onGeneratePDF}>Generate PDF</button>
      </div>
    </div>
  );
}
