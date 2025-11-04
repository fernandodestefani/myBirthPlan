import { BirthFormNote } from "./BirthFormNote";
import { CheckboxGroup } from "./CheckboxGroup";
import { InputField } from "./InputField";
import { RadioGroup } from "./RadioGroup";
import Modal from "./Modal";
import { useState } from "react";
import { FiHelpCircle } from "react-icons/fi";
import PlacentaContent from "./PlacentaContent";
import EpisiotomiaContent from "./EpisiotomyContent";

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
  laborPosition,
  setLaborPosition,
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
  notes,
  setNotes,
}) {
  const [isPlacentaModalOpen, setIsPlacentaModalOpen] = useState(false);
  const [isEpisiotomyModalOpen, setIsEpisiotomyModalOpen] = useState(false);

  const openPlacentaModal = () => setIsPlacentaModalOpen(true);
  const closePlacentaModal = () => setIsPlacentaModalOpen(false);
  const openEpisiotomyModal = () => setIsEpisiotomyModalOpen(true);
  const closeEpisiotomyModal = () => setIsEpisiotomyModalOpen(false);

  return (
    <form id="birthPlanForm">
      <BirthFormNote>
        Fields marked with <span>*</span> are required
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
        required={false}
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
        required={false}
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
        required={false}
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
        required={false}
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
          {
            value: "Decide during labor",
            label: "Prefer to decide on the spot",
          },
        ]}
        value={reliefOptions}
        onChange={setReliefOptions}
      />

      <RadioGroup
        legend="Medication for pain relief"
        name="medicationPainRelief"
        required={false}
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
          className="select-field__select"
          value={laborPosition}
          onChange={(e) => setLaborPosition(e.target.value)}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Semi-reclined in bed">Semi-reclined in bed</option>
          <option value="Squatting">Squatting</option>
          <option value="Squatting with support">Squatting with support</option>
          <option value="Birthing stool">Birthing stool</option>
          <option value="On all fours">On all fours (Gaskin)</option>
          <option value="Side-lying">Side-lying</option>
          <option value="Standing">Standing</option>
          <option value="Decide during labor">Decide during labor</option>
          <option value="No preference">No preference</option>
        </select>
      </div>

      <RadioGroup
        legend={
          <span style={{ color: "#555" }}>
            Episiotomy Preference
            <FiHelpCircle
              className="help-icon"
              onClick={openEpisiotomyModal}
              title="Learn more about Placenta Art"
            />
          </span>
        }
        name="episiotomyPreference"
        required={false}
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
          {
            value: "I prefer the team to decide",
            label: "I prefer the team to decide",
          },
        ]}
        value={episiotomyPreference}
        onChange={(e) => setEpisiotomyPreference(e.target.value)}
      />

      <RadioGroup
        legend="Umbilical Cord Cutting Preference"
        name="cordCuttingPreference"
        required={false}
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
        onChange={(e) => setUmbilicalCordCuttingPreference(e.target.value)}
      />

      <RadioGroup
        legend={
          <span style={{ color: "#555" }}>
            Placenta Viewing Preference
            <FiHelpCircle
              className="help-icon"
              onClick={openPlacentaModal}
              title="Learn more about Placenta Art"
            />
          </span>
        }
        name="placentaPreference"
        required={false}
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
          {
            value: "I have a special request",
            label: "I have a special request",
          },
        ]}
        value={placentaViewing}
        onChange={(e) => setPlacentaViewing(e.target.value)}
      />

      <RadioGroup
        legend="Imediate Contact with the Baby"
        name="contact"
        required={false}
        options={[
          {
            value: "Placed directly on my chest for skin-to-skin contact",
            label: "Placed directly on my chest for skin-to-skin contact",
          },
          { value: "No preference", label: "No preference" },
        ]}
        value={immediateContactPreference}
        onChange={(e) => setImmediateContactPreference(e.target.value)}
      />

      <RadioGroup
        legend="Feeding within the first hour after birth"
        name="feeding"
        required={false}
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
        onChange={(e) => setBreastfeeding(e.target.value)}
      />

      <RadioGroup
        legend="Regarding the baby’s first bath"
        name="first-bath"
        required={false}
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
        onChange={(e) => setBabyFirstBath(e.target.value)}
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
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </fieldset>

      <BirthFormNote>
        These preferences may change depending on medical needs
      </BirthFormNote>

      {isPlacentaModalOpen && (
        <Modal onClose={closePlacentaModal} title='Placenta Art - "Tree of Life"'>
          <PlacentaContent />
        </Modal>
      )}

      {isEpisiotomyModalOpen && (
        <Modal onClose={closeEpisiotomyModal} title="Episiotomy">
          <EpisiotomiaContent />
        </Modal>
      )}
    </form>
  );
}
