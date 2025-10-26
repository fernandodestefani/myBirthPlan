import { ActionButtons } from "./components/ActionButtons";
import BirthPlanForm from "./components/BirthPlanForm";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";

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
