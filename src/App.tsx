import { signal } from "@preact/signals-react";
import { useState } from "react";

const count = signal(0);

function WithSignal() {
  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <p>With Signal</p>
      <div
        style={{
          flex: 1,
          display: "flex",
          backgroundColor: "gray",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        <button style={{ padding: "16px" }} onClick={() => (count.value += 1)}>
          +1
        </button>{" "}
        <p>count is {count}</p>
      </div>
    </div>
  );
}

function WithoutSignal() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <p>Without Signal</p>
      <div
        style={{
          flex: 1,
          display: "flex",
          backgroundColor: "gray",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        <button
          style={{ padding: "16px" }}
          onClick={() => setCount((count) => count + 1)}
        >
          +1
        </button>{" "}
        <p>count is {count}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        display: "flex",
        padding: "0 1rem",
        gap: "1rem",
      }}
    >
      <WithSignal />
      <WithoutSignal />
    </div>
  );
}

export default App;
