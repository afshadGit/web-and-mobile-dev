import "./App.css";

function App() {
  const record = "Abbey Road";
  const artist = "The Beatles";
  const recordPrice = 32.99;
  const taxRate = 0.15;

  const calculateTax = (price, rate) => {
    return price * rate;
  };

  const calculateTotal = (price, tax) => {
    return price + tax;
  };

  const orderMessage = (album, band, total) => {
    return `I bought ${album} by ${band}. My total was $${total.toFixed(2)}.`;
  };

  const listeningPlan = (album, time) => {
    return `Tonight at ${time}, I will listen to ${album} from start to finish.`;
  };

  const tax = calculateTax(recordPrice, taxRate);
  const total = calculateTotal(recordPrice, tax);

  return (
    <>
      <h1>My Record Shopping Story</h1>
      <h2>
        I found <em>{record}</em> by <strong>{artist}</strong> at my favorite
        record store.
      </h2>
      <h2>
        Its price was ${recordPrice}, and the tax was ${tax.toFixed(2)}.
      </h2>
      <h2>{orderMessage(record, artist, total)}</h2>
      <h2>{listeningPlan(record, "8:00 PM")}</h2>
    </>
  );
}

export default App;
