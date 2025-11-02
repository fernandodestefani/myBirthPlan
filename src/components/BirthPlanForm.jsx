import { BirthFormNote } from "./BirthFormNote";
import { CheckboxGroup } from "./CheckboxGroup";
import { InputField } from "./InputField";
import { RadioGroup } from "./RadioGroup";

export default function BirthPlanForm({
  motherName,
  setMotherName,
  babyName,
  setBabyName,
  expectedDueDate,
  setExpectedDueDate,
  supportPerson,
  setSupportPerson,
  birthPlace,
  setBirthPlace,
  birthType,
  setBirthType,
  environmentPreferences,
  setEnvironmentPreferences,
  eatingDuringLabor,
  setEatingDuringLabor,
  mobilityDuringLabor,
  setMobilityDuringLabor,
  reliefOptions,
  setReliefOptions,
  painMedication,
  setPainMedication,
  episiotomyPreference,
  setEpisiotomyPreference,
  umbilicalCordCuttingPreference, 
  setUmbilicalCordCuttingPreference,
  placentaViewing, 
  setPlacentaViewing,
  immediateContactPreference,
  setImmediateContactPreference,
  breastfeeding, 
  setBreastfeeding,
  babyFirstBath,
  setBabyFirstBath,

}) {
  return (
    <form>
      <BirthFormNote>
        Fields marked with <span>*</span> are required.
      </BirthFormNote>

      <InputField
        label="Mother's Name"
        id="motherName"
        name="motherName"
        type="text"
        placeholder="Enter your full name"
        required={true}
        title="Enter your full name"
        value={motherName}
        onChange={(e) => setMotherName(e.target.value)}
      />

      <InputField
        label="Baby's Name"
        id="babyName"
        name="babyName"
        type="text"
        placeholder="Enter the baby's name"
        title="Enter the baby's name"
        value={babyName}
        onChange={(e) => setBabyName(e.target.value)}
      />

      <InputField
        label="Expected Due Date"
        id="dueDate"
        name="dueDate"
        type="date"
        placeholder="Select your due date"
        title="Select your due date"
        value={expectedDueDate}
        onChange={(e) => setExpectedDueDate(e.target.value)}
      />

      <InputField
        label="Support Person's Name"
        id="companion"
        name="companion"
        type="text"
        placeholder="Enter companion's name"
        title="Enter the name of your support person"
        value={supportPerson}
        onChange={(e) => setSupportPerson(e.target.value)}
      />

      <RadioGroup
        legend="Place of Birth Preference"
        name="birthPlace"
        required={true}
        options={[
          { value: "Hospital", label: "Hospital", isFirst: true },
          { value: "BirthCenter", label: "Birth Center" },
          { value: "Home", label: "Home" },
        ]}
        value={birthPlace}
        onChange={(e) => setBirthPlace(e.target.value)}
      />

      <RadioGroup
        legend="Birth Type Preference"
        name="birthTypePreference"
        required={true}
        options={[
          { value: "Vaginal birth", label: "Vaginal birth", isFirst: true },
          { value: "Cesarean", label: "Cesarean" },
        ]}
        value={birthType}
        onChange={(e) => setBirthType(e.target.value)}
      />

      <CheckboxGroup
        legend="Environment Preferences"
        name="environment"
        options={[
          { value: "Dim lights", label: "Dim lights" },
          { value: "Quiet room", label: "Quiet room" },
          { value: "Music", label: "Music" },
        ]}
        value={environmentPreferences}
        onChange={setEnvironmentPreferences}
      />

      <RadioGroup
        legend="Eating During Labor"
        name="eatingPreference"
        required={true}
        options={[
          {
            value: "Eat freely according to tolerance",
            label: "Eat freely according to tolerance",
            isFirst: true,
          },
          { value: "Prefer to stay fasting", label: "Prefer to stay fasting" },
          {
            value: "Decide during labor",
            label: "Decide during labor",
          },
        ]}
        value={eatingDuringLabor}
        onChange={(e) => setEatingDuringLabor(e.target.value)}
      />

      <RadioGroup
        legend="Mobility During Labor"
        name="mobility"
        required={true}
        options={[
          {
            value: "Freedom to walk and move",
            label: "Freedom to walk and move",
            isFirst: true,
          },
          { value: "Prefer mostly in bed", label: "Prefer mostly in bed" },
          {
            value: "Decide during labor",
            label: "Decide during labor",
          },
        ]}
        value={mobilityDuringLabor}
        onChange={(e) => setMobilityDuringLabor(e.target.value)}
      />

      <CheckboxGroup
        legend="Relief Options (Non-Pharmacological)"
        name="painRelief"
        options={[
          { value: "Bath", label: "Bath" },
          { value: "Massage", label: "Massage" },
          { value: "Birthing ball", label: "Birthing ball" },
          { value: "Squats", label: "Squats" },
          { value: "Walking", label: "Walking/ Deambulation" },
          { value: "Breathing techniques", label: "Breathing Techniques" },
          { value: "Decide during labor", label: "Prefer to decide on the spot" },
        ]}
        value={reliefOptions}
        onChange={setReliefOptions}
      />

      <RadioGroup
        legend="Medication for pain relief"
        name="medicationPainRelief"
        required={true}
        options={[
          {
            value: "As soon as possible",
            label: "As soon as possible",
            isFirst: true,
          },
          {
            value: "If I feel uncomfortable",
            label: "If I feel uncomfortable",
          },
          {
            value: "Only if I request it",
            label: "Only if I request it",
          },
          {
            value: "Decide during labor",
            label: "Decide during labor",
          },
        ]}
        value={painMedication}
        onChange={(e) => setPainMedication(e.target.value)}
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
            value: "Episiotomy only as a last resort",
            label: "Episiotomy only as a last resort",
            isFirst: true,
          },
          {
            value: "Episiotomy over natural tearing",
            label: "Episiotomy over natural tearing",
          },
          {
            value: "Natural tearing over episiotomy",
            label: "Natural tearing over episiotomy",
          },
          { value: "I prefer the team to decide", label: "I prefer the team to decide" },
        ]}
        value={episiotomyPreference}
        onChange={e => setEpisiotomyPreference(e.target.value)}
      />

      <RadioGroup
        legend="Umbilical Cord Cutting Preference"
        name="cordCuttingPreference"
        required={true}
        options={[
          {
            value: "My partner cuts the cord",
            label: "My partner cuts the cord",
            isFirst: true,
          },
          {
            value: "I cut the cord",
            label: "I cut the cord",
          },
          { value: "No preference", label: "No preference" },
        ]}
        value={umbilicalCordCuttingPreference}
        onChange={e => setUmbilicalCordCuttingPreference(e.target.value)}
      />

      <RadioGroup
        legend="Placenta Viewing Preference"
        name="placentaPreference"
        required={true}
        options={[
          {
            value: "I'd like to see the placenta after it is delivered",
            label: "I would like to see the placenta after it is delivered",
            isFirst: true,
          },
          {
            value: "I do not want to see the placenta",
            label: "I do not want to see the placenta",
          },
          { value: "I have a special request", label: "I have a special request" },
        ]}
        value={placentaViewing}
        onChange={e => setPlacentaViewing(e.target.value)}
      />

      <RadioGroup
        legend="Imediate Contact with the Baby"
        name="contact"
        required={true}
        options={[
          {
            value: "Placed directly on my chest for skin-to-skin contact",
            label: "Placed directly on my chest for skin-to-skin contact",
          },
          { value: "No preference", label: "No preference" },
        ]}
        value={immediateContactPreference}
        onChange={e => setImmediateContactPreference(e.target.value)}
      />

      <RadioGroup
        legend="Feeding within the first hour after birth"
        name="feeding"
        required={true}
        options={[
          {
            value: "I wanna try breastfeeding within the first hour",
            label: "I want to try breastfeeding within the first hour",
          },
          {
            value: "I am unable or do not wish to breastfeed",
            label: "I am unable or do not wish to breastfeed",
          },
          { value: "No preference", label: "No preference" },
        ]}
        value={breastfeeding}
        onChange={e => setBreastfeeding(e.target.value)}
      />

      <RadioGroup
        legend="Regarding the baby’s first bath"
        name="first-bath"
        required={true}
        options={[
          {
            value: "Staff bath — I’m present",
            label: "Staff bath — I’m present",
          },
          {
            value: "Staff bath — Support person present",
            label: "Staff bath — Support person present",
          },
          {
            value: "Staff bath — No presence needed",
            label: "Staff bath — No presence needed",
          },
          {
            value: "Family bath with staff supervision",
            label: "Family bath with staff supervision",
          },
        ]}
        value={babyFirstBath}
        onChange={e => setBabyFirstBath(e.target.value)}
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

      <BirthFormNote>
        These preferences may change depending on medical needs
      </BirthFormNote>
    </form>
  );
}
