function BMIresult({ bmi, error, category }) {
  return (
    <>
      {error && <p className="error">{error}</p>}
      {bmi !== null && (
        <section className="bmi-result">
          <h2>Your BMI: {bmi}</h2>
          <p>Category: {category}</p>
        </section>
      )}
    </>
  );
}

export default BMIresult;
