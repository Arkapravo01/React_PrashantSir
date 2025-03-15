import React from "react";

function FoodItems(props) {
  return (
    <div>
      <ul className="list-group">
        {props.foodItems.map((item, idx) => (
          <li key={item} className="list-group-item kg-item">
            <span className="kg-span">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodItems;
