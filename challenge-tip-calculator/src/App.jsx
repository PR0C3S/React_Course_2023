import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = Math.round(bill * ((percentage1 + percentage2) / 2 / 100));

  function handleReset() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <Component1 bill={bill} onUpdate={setBill}>
        How much was the bill?
      </Component1>
      <Component2 onSelect={setPercentage1} selectValue={percentage1}>
        How did you like the service?
      </Component2>
      <Component2 onSelect={setPercentage2} selectValue={percentage2}>
        How did you friend like the service?
      </Component2>

      {bill > 0 && (
        <>
          <OutPut bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Component1({ children, bill, onUpdate }) {
  return (
    <div>
      <label>{children}</label>
      <input
        type="number"
        value={bill}
        min="0"
        onChange={(e) => onUpdate(e.target.value)}
      />
    </div>
  );
}

function Component2({ children, onSelect, selectValue }) {
  return (
    <div>
      <label>{children}</label>
      <select
        name="select"
        value={selectValue}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function OutPut({ bill, tip }) {
  return (
    <h1>
      You pay {bill} (${bill} + {tip} tip)
    </h1>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
