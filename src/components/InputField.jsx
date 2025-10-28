export function InputField({
  label,
  name,
  type,
  placeholder = "",
  required = false,
  title = "",
}) {
  return (
    <div className={`birth-form__input`}>
      <label htmlFor={name} className="input-field__label">
        {label}
        {required && <span>*</span>}:
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        title={title}
        className="input-field__input"
      />
    </div>
  );
}
