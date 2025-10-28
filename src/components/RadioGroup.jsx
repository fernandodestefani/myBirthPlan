export function RadioGroup({ legend, name, options, required = false, value }) {
  return (
    <fieldset className="radio-group">
      <legend className="radio-group__legend">
        {legend}
        {required && <span>*</span>}:
      </legend>

      {options.map((option) => (
        <label key={option.value} className="radio-group__label">
          <input
            type="radio"
            name={name}
            required={required && option.isFirst}
            className="radio-group__input"
          />
          {option.label}
        </label>
      ))}
    </fieldset>
  );
}
