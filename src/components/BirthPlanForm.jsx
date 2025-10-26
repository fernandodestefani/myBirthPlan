export default function BirthPlanForm() {
  return (
    <form>
      <em>
        Fields marked with <span>*</span> are required.
      </em>

      <InputField
        label="Mother's Name"
        id="motherName"
        name="motherName"
        type="text"
        placeholder="Enter your full name"
        required={true}
        title="Enter your full name"
      />

      <InputField
        label="Expected Due Date"
        id="dueDate"
        name="dueDate"
        type="date"
        placeholder="Select your due date"
        title="Select your due date"
      />

      <InputField
        label="Support Person's Name"
        id="companion"
        name="companion"
        type="text"
        placeholder="Enter companion's name"
        title="Enter the name of your support person"
      />

      <RadioGroup
        legend="Place of Birth Preference"
        name="birthPlace"
        required={true}
        options={[
          { value: "hospital", label: "Hospital", isFirst: true },
          { value: "birthCenter", label: "Birth Center" },
          { value: "home", label: "Home" },
        ]}
      />

      <CheckboxGroup
        legend="Environment Preferences"
        name="environment"
        options={[
          { value: "dimLights", label: "I prefer dim lights" },
          { value: "quietRoom", label: "I prefer a quiet room" },
          { value: "music", label: "I would like to listen to music" },
        ]}
      />

      <RadioGroup
        legend="Mobility During Labor"
        name="mobility"
        required={true}
        options={[
          {
            value: "freeMovement",
            label: "I would like to have the freedom to walk and move",
            isFirst: true,
          },
          { value: "mostlyBed", label: "I prefer to stay mostly in bed" },
          {
            value: "decideDuringLabor",
            label: "I prefer to decide during labor",
          },
        ]}
      />

      <CheckboxGroup legend="Relief Options (Non-Pharmacological)" name="painRelief" options={[{value: "bath", label: "Bath"}, 
        {value: "massage", label: "Bath"},
        {value: "birthingBall", label: "Birthing ball"},
        {value: "squats", label: "Squats"},
        {value: "walking", label: "Walking/ Deambulation"},
        {value: "breathingTechniques", label: "Breathing Techniques"},
        {value: "decideOnSpot", label: "Prefer to decide on the spot"}
      ]}/>  

      <p>These preferences may change depending on medical needs</p>
    </form>
  );
}

function InputField({
  label,
  name,
  type,
  placeholder = "",
  required = false,
  title = "",
}) {
  return (
    <div>
      <label htmlFor={name}>
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
      />
    </div>
  );
}

function RadioGroup({ legend, name, options, required = false, value }) {
  return (
    <fieldset>
      <legend>
        {legend}
        {required && <span>*</span>}:
      </legend>

      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={name}
            required={required && option.isFirst}
          />
          {option.label}
        </label>
      ))}
    </fieldset>
  );
}

function CheckboxGroup({ legend, options }) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {options.map((option) => (
        <label key={option.value}>
          <input type="checkbox" name={name} />
          {option.label}
        </label>
      ))}
    </fieldset>
  );
}
