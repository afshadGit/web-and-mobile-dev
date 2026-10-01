const fruitlist = ["Apple", "Banana", "Watermelon"];

export function FruitList() {
  return (
    <ul>
      {fruitlist.map((fruit) => 
        <li key={fruit}>{fruit}</li>
      )}
    </ul>
  );
}
