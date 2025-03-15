import React from "react";

function App() {
  let foodItems = [
    "Dal",
    "Green Vegetables",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
    "Burgers",
  ];
  // let emptymessage = foodItems.length == 0 ? <h3>I am still hungry</h3> : null;
  return (
    <>
      <h1>Healthy Foods:</h1>
      {/* {emptymessage} */}
      {foodItems.length==0 && <h3>I am still hungry</h3>}
      <ul className="list-group">
        {foodItems.map((item,idx) => (
          <li key={idx} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
