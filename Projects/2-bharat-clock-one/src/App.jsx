import React from "react";
import Clockheading from "./Components/Clockheading";
import ClockSlogan from "./Components/ClockSlogan";
import CurrentTime from "./Components/CurrentTime";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <center>
      <Clockheading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}

export default App;
