export default function BirthPlanForm() {
  return (
    <form>
      <em className="birth-form__note">
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
        label="Baby's Name"
        id="babyName"
        name="babyName"
        type="text"
        placeholder="Enter the baby's name"
        title="Enter the baby's name"
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

      <RadioGroup
        legend="Birth Type Preference"
        name="birthTypePreference"
        required={true}
        options={[
          { value: "vaginal", label: "Vaginal birth", isFirst: true },
          { value: "cesarean", label: "Cesarean" },
        ]}
      />

      <CheckboxGroup
        legend="Environment Preferences"
        name="environment"
        options={[
          { value: "dimLights", label: "Dim lights" },
          { value: "quietRoom", label: "Quiet room" },
          { value: "music", label: "Music" },
        ]}
      />

      <RadioGroup
        legend="Eating During Labor"
        name="eatingPreference"
        required={true}
        options={[
          {
            value: "eatFreely",
            label: "Eat freely according to tolerance",
            isFirst: true,
          },
          { value: "fasting", label: "Prefer to stay fasting" },
          {
            value: "decideDuringLabor",
            label: "Decide during labor",
          },
        ]}
      />

      <RadioGroup
        legend="Mobility During Labor"
        name="mobility"
        required={true}
        options={[
          {
            value: "freeMovement",
            label: "Freedom to walk and move",
            isFirst: true,
          },
          { value: "mostlyBed", label: "Prefer mostly in bed" },
          {
            value: "decideDuringLabor",
            label: "Decide during labor",
          },
        ]}
      />

      <CheckboxGroup
        legend="Relief Options (Non-Pharmacological)"
        name="painRelief"
        options={[
          { value: "bath", label: "Bath" },
          { value: "massage", label: "Massage" },
          { value: "birthingBall", label: "Birthing ball" },
          { value: "squats", label: "Squats" },
          { value: "walking", label: "Walking/ Deambulation" },
          { value: "breathingTechniques", label: "Breathing Techniques" },
          { value: "decideOnSpot", label: "Prefer to decide on the spot" },
        ]}
      />

      <RadioGroup
        legend="Medication for pain relief"
        name="medicationPainRelief"
        required={true}
        options={[
          {
            value: "asSoonAsPossible",
            label: "As soon as possible",
            isFirst: true,
          },
          { value: "ifUncomfortable", label: "If I feel uncomfortable" },
          {
            value: "onlyIfRequested",
            label: "Only if I request it",
          },
          {
            value: "decideDuringLabor",
            label: "Decide during labor",
          },
        ]}
      />

      <div className="select-field">
        <label htmlFor="expulsivePosition" className="select-field__label">
          Preferred Position During Expulsive Phase<span>*</span>:
        </label>

        <select
          name="expulsivePosition"
          id="expulsivePosition"
          required
          className="select-field__select"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="semiReclined">Semi-reclined in bed</option>
          <option value="squatting">Squatting</option>
          <option value="supportedSquat">Squatting with support</option>
          <option value="birthingStool">Birthing stool</option>
          <option value="handsAndKnees">On all fours (Gaskin)</option>
          <option value="sideLying">Side-lying</option>
          <option value="standing">Standing</option>
          <option value="freedomToChoose">Decide during labor</option>
          <option value="noPreference">No preference</option>
        </select>
      </div>

      <RadioGroup
        legend="Episiotomy Preference (a surgical cut made in the area between the vagina and the anus during childbirth to enlarge the vaginal opening)"
        name="episiotomyPreference"
        required={true}
        options={[
          {
            value: "lastResort",
            label: "Episiotomy only as a last resort",
            isFirst: true,
          },
          {
            value: "preferEpisiotomy",
            label: "Episiotomy over natural tearing",
          },
          {
            value: "preferNaturalTear",
            label: "Natural tearing over episiotomy",
          },
          { value: "teamDecision", label: "I prefer the team to decide" },
        ]}
      />

      <RadioGroup
        legend="Umbilical Cord Cutting Preference"
        name="cordCuttingPreference"
        required={true}
        options={[
          {
            value: "partnerCuts",
            label: "My partner cuts the cord",
            isFirst: true,
          },
          {
            value: "iCut",
            label: "I cut the cord",
          },
          { value: "noPreference", label: "No preference" },
        ]}
      />

      <RadioGroup
        legend="Placenta Viewing Preference"
        name="placentaPreference"
        required={true}
        options={[
          {
            value: "seePlacenta",
            label: "I would like to see the placenta after it is delivered",
            isFirst: true,
          },
          {
            value: "notSeePlacenta",
            label: "I do not want to see the placenta",
          },
          { value: "specialRequest", label: "I have a special request" },
        ]}
      />

      <RadioGroup
        legend="Imediate Contact with the Baby"
        name="contact"
        required={true}
        options={[
          {
            value: "skin-to-skin",
            label: "Placed directly on my chest for skin-to-skin contact",
          },
          { value: "no-preference", label: "No preference" },
        ]}
      />

      <RadioGroup
        legend="Feeding within the first hour after birth"
        name="feeding"
        required={true}
        options={[
          {
            value: "breastfeed-1h",
            label: "I want to try breastfeeding within the first hour",
          },
          {
            value: "unable-notdesired",
            label: "I am unable or do not wish to breastfeed",
          },
          { value: "no-preference", label: "No preference" },
        ]}
      />

      <RadioGroup
        legend="Regarding the baby’s first bath"
        name="first-bath"
        required={true}
        options={[
          {
            value: "team-present-mother",
            label: "Staff bath — I’m present",
          },
          {
            value: "team-present-support",
            label: "Staff bath — Support person present",
          },
          {
            value: "team-no-presence",
            label: "Staff bath — No presence needed",
          },
          {
            value: "family-with-supervision",
            label: "Family bath with staff supervision",
          },
        ]}
      />

      <fieldset className="textarea-field">
        <label htmlFor="additionalNotes" className="textarea-field__label">
          Please write any additional preferences or important notes here:
        </label>
        <textarea
          id="additionalNotes"
          name="additionalNotes"
          rows="4"
          placeholder="Example: I would like to touch my baby’s head during crowning (the moment when the baby’s head becomes visible)..."
          className="textarea-field__textarea"
        ></textarea>
      </fieldset>

      <em className="birth-form__note">These preferences may change depending on medical needs</em>
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
    <div className="birth-form__input">
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

function RadioGroup({ legend, name, options, required = false, value }) {
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

function CheckboxGroup({ legend, options }) {
  return (
    <fieldset className="checkbox-group">
      <legend className="checkbox-group__legend">{legend}</legend>
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
