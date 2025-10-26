export default function App() {
  return (
    <div>
      <Logo />
      <Header />
      <BirthPlanForm />
      <ActionButtons />
    </div>
  );
}

function Logo() {
  return <div>FD</div>;
}

function Header() {
  return (
    <div>
      <h1>🌸</h1>
      <h1>My Birth Plan</h1>
    </div>
  );
}

function BirthPlanForm() {
  return (
    <form>
      <em>Fields marked with <span>*</span> are required.</em>

      <label htmlFor="motherName">Mother's Name<span>*</span>:</label>
      <input
        type="text"
        id="motherName"
        name="motherName"
        placeholder="Enter your full name"
        title="Enter your full name"
        required
      ></input>

      <label htmlFor="dueDate">Expected Due Date:</label>
      <input
        type="date"
        id="dueDate"
        name="dueDate"
        placeholder="Select your due date"
        title="Select your due date"
      ></input>

      <label htmlFor="companion">Support Person's Name:</label>
      <input type="text" id="companion" name="companion" placeholder="Enter companion's name" title="Enter the name of your support person"></input>
    </form>
  );
}

function ActionButtons() {
  return (
    <div>
      <button>Reset</button>
      <button>Generate PDF</button>
    </div>
  );
}
