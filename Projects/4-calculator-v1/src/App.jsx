import React from "react";
import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";

const App = () => {
  return (
    <div className={styles.calculator}>
      <Display/>
      <ButtonsContainer/>
    </div>
  );
};

export default App;
