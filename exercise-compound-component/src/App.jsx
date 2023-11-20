import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/*<Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
  />*/}

      <Counter>
        <Counter.Decreace icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
        <Counter.Label>My super flexible counter</Counter.Label>
      </Counter>

      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Decreace icon="◀" />
        <Counter.Increase icon="▶" />
        <Counter.Count />
      </Counter>
    </div>
  );
}
