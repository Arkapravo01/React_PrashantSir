import React from "react";

function ErrorMessage(props) {
  return <div>{props.foodItems.length == 0 && <h3>I am still hungry</h3>}</div>;
}

export default ErrorMessage;
