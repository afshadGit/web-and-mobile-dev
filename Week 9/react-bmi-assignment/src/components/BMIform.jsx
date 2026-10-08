function BMIForm({
  unit,
  setUnit,
  weight,
  setWeight,
  height,
  setHeight,
  onCalculate,
  onReset,
}) {
  return (
    <form className="bmi-form" onSubmit={onCalculate}>
      <label>
        Unit system
        <select value={unit} onChange={(event) => setUnit(event.target.value)}>
          <option value="metric">Metric (kg, cm)</option>
          <option value="imperial">Imperial (lbs, in)</option>
        </select>
      </label>

      <label>
        Weight ({unit === "metric" ? "kg" : "lb"})
        <input
          type="number"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
      </label>

      <label>
        Height ({unit === "metric" ? "cm" : "in"})
        <input
          type="number"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
      </label>

      <button type="submit">Calculate BMI</button>
      <button type="button" onClick={onReset}>
        Reset
      </button>
    </form>
  );
}

export default BMIForm;
