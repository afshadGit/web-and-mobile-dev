import { useState } from "react";
import "./App.css";
import BMIform from "./components/BMIform";
import BMIresult from "./components/BMIresult";

function App() {
  const [unit, setUnit] = useState("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState("");

  function handleCalculate(event) {
    event.preventDefault();

    setError("");

    const numericWeight = Number(weight);
    const numericHeight = Number(height);

    if (!Number.isFinite(numericWeight) || !Number.isFinite(numericHeight)) {
      setBmi(null);
      setError("Please enter valid numbers for weight and height.");
      return;
    }

    if (numericWeight <= 0 || numericHeight <= 0) {
      setBmi(null);
      setError("Weight and height must be positive numbers.");
      return;
    }

    let calculatedBmi;

    if (unit === "metric") {
      calculatedBmi = numericWeight / (numericHeight / 100) ** 2;
    } else {
      calculatedBmi = (numericWeight / numericHeight ** 2) * 703;
    }

    setBmi(Number(calculatedBmi.toFixed(1)));
  }

  function getCategory(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi < 25) {
      return "Normal weight";
    } else if (bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }

  function handleReset() {
    setUnit("metric");
    setWeight("");
    setHeight("");
    setBmi(null);
    setError("");
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>BMI Calculator</h1>
        <p>Check your body mass index using your height and weight as inputs</p>
      </header>

      <BMIform
        unit={unit}
        setUnit={setUnit}
        weight={weight}
        setWeight={setWeight}
        height={height}
        setHeight={setHeight}
        onCalculate={handleCalculate}
        onReset={handleReset}
      />

      <BMIresult
        bmi={bmi}
        error={error}
        category={bmi !== null ? getCategory(bmi) : null}
      />
    </main>
  );
}

export default App;
