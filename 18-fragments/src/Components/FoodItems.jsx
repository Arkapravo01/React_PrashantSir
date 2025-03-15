import React from "react";

function FoodItems(props) {
  return (
    <div>
      <ul className="list-group">
        {props.foodItems.map((item, idx) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodItems;
