export function ActionButtons({onGeneratePDF, onReset}) {
  return (
    <div className="page-container">
      <div className="action-buttons">
        <button className="reset-btn" onClick={onReset}>Reset</button>
        <button onClick={onGeneratePDF}>Generate PDF</button>
      </div>
    </div>
  );
}
