import React from "react";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import "./App.css";
import Container from "./Components/Container";

function App() {
  let foodItems = ["Dal", "Sabji", "Roti", "Salad", "Banana", "Pizza"];
  //Logical Operators Conditional Rendering
  // let emptymessage = foodItems.length == 0 ? <h3>I am still hungry</h3> : null;
  return (
    <>
      <Container>
        <h1>Healthy Foods:</h1>
        <FoodItems foodItems={foodItems} />
        <ErrorMessage foodItems={foodItems} />
      </Container>
      <Container>
        <p>Above is the list of healthy foods that are good for our health and well-being</p>
      </Container>
    </>
  );
}

export default App;
