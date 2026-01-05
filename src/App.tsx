import "./App.css";
import TerminalInteracting from "../components/terminal"

export default function App() {
  return (
    <div className="grid bg-black h-100% w-100% overflow-hidden">
      <div className="justify-self-center mt-20 w-4/5" aria-hidden="true">
        <TerminalInteracting />
      </div>
    </div>
  );
}
