import { StrictMode } from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App />
      <Counter />
    </>
  </StrictMode>,
);
