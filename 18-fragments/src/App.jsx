import React from "react";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  let foodItems = [
    "Sabzi",
    "Green Vegetables",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
    "Burgers",
  ];
  //Logical Operators Conditional Rendering
  // let emptymessage = foodItems.length == 0 ? <h3>I am still hungry</h3> : null;
  return (
    <>
      <h1>Healthy Foods:</h1>
      <FoodItems foodItems={foodItems} />
      <ErrorMessage foodItems={foodItems} />
    </>
  );
}

export default App;
