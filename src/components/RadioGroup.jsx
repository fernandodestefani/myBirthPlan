export function RadioGroup({ legend, name, options, required = false, value, onChange }) {
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
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
    </fieldset>
  );
}
