export function CheckboxGroup({ legend, options }) {
  return (
    <fieldset className="checkbox-group">
      <legend className="checkbox-group__legend">{legend}:</legend>
      {options.map((option) => (
        <label key={option.value} className="checkbox-group__label">
          <input
            type="checkbox"
            name={option.value}
            className="checkbox-group__input"
          />
          {option.label}
        </label>
      ))}
    </fieldset>
  );
}
