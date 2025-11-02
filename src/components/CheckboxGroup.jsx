export function CheckboxGroup({ legend, options, value = [], onChange }) {
  function handleChange(optionValue) {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  }

  return (
    <fieldset className="checkbox-group">
      <legend className="checkbox-group__legend">{legend}:</legend>
      {options.map((option) => (
        <label key={option.value} className="checkbox-group__label">
          <input
            type="checkbox"
            name={option.value}
            className="checkbox-group__input"
            checked={value.includes(option.value)}
            onChange={() => handleChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </fieldset>
  );
}
