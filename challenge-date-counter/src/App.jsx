import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is :`
            : `${count} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
export default App;
