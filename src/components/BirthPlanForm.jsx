export default function BirthPlanForm() {
  return (
    <form>
      <em>
        Fields marked with <span>*</span> are required.
      </em>

      <InputField label="Mother's Name" id="motherName" name="motherName" type="text" placeholder="Enter your full name" required={true} title="Enter your full name"/>

      <InputField label="Expected Due Date" id="dueDate" name="dueDate" type="date" placeholder="Select your due date" title="Select your due date"/>

      <InputField label="Support Person's Name" id="companion" name="companion" type="text" placeholder="Enter companion's name" title="Enter the name of your support person"/>

      <fieldset>
        <legend>
          Place of Birth Preference<span>*</span>:
        </legend>
        <label>
          <input type="radio" name="birthPlace" value="hospital" required />
          Hospital
        </label>

        <label>
          <input type="radio" name="birthPlace" value="birthCenter" />
          Birth Center
        </label>

        <label>
          <input type="radio" name="birthPlace" value="home" />
          Home
        </label>
      </fieldset>

      <fieldset>
        <legend>Environment Preferences</legend>
        <label>
          <input type="checkbox" name="environment" value="dimLights" />I prefer
          dim lights
        </label>

        <label>
          <input type="checkbox" name="environment" value="quietRoom" />I prefer
          a quiet room
        </label>

        <label>
          <input type="checkbox" name="environment" value="music" />I would like
          to listen to music
        </label>
      </fieldset>

      <fieldset>
        <legend>Mobility During Labor</legend>
        <label>
          <input type="radio" name="mobility" value="freeMovement" required />I
          would like to have the freedom to walk and move
        </label>

        <label>
          <input type="radio" name="mobility" value="mostlyBed" />I prefer to
          stay mostly in bed
        </label>

        <label>
          <input type="radio" name="mobility" value="decideDuringLabor" />I
          prefer to decide during labor
        </label>
      </fieldset>

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
        {label}{required && <span>*</span>}:
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
