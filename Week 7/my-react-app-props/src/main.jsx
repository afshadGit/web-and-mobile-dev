import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'

// Create a new component called Greeting that receives props for name and age, and displays a greeting message using those props.
function Greeting({ name, age }) {
  return (
    <h2 style={{ background: "maroon" }}>
      Hello, {name}! You are {age} years old.
    </h2>
  );
}

// Receive props as an argument to the function, and use them in the JSX to display an album's title and artist.
function Albums(props) {
  return (
    <h2 style={{ background: "cream" }}>
      The album's title is {props.title}, by {props.artist}
    </h2>
  );
}

// ...rest: component specifies color and brand, but the rest is stored in an object like this: { model: "Model S", registration: "ABC123" }.
function YourCar({ color, brand, ...rest }) {
  return (
    <h2 style={{ background: "lightbrown" }}>
      Your {brand} {rest.model} is {color}! Registration: {rest.registration}
    </h2>
  );
}

function MyCar({ color = "silver", brand }) {
  return (
    <h2 style={{ background: "lightblue" }}>
      My {brand} is {color}!
    </h2>
  );
}

function Son(props) {
  return <div style={{ background: "lightgreen" }}></div>;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting name="Afshad" age={21} />
    <br />
    <Albums title="Sound of Silver" artist="LCD Soundsystem" />
  </StrictMode>,
);
