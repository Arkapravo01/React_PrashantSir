import React from "react";
import styles from "./ErrorMessage.module.css";

function ErrorMessage(props) {
  return <div>{props.foodItems.length == 0 && <h3 className={styles.foodHeading}>I am still hungry</h3>}</div>;
}

export default ErrorMessage;
