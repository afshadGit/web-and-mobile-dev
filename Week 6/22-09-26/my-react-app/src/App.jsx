import { FruitList } from "../components/FruitList.jsx";
import { CartItemList } from "../components/CartItemList.jsx";

function App() {
  return (
    <div>
      <h1>My Shopping List</h1>
      <h2>List of fruits in cart:</h2>
      <FruitList />
      <br/>
      <h2>List of records in cart:</h2>
      <CartItemList />
    </div>
  );
}

export default App;
