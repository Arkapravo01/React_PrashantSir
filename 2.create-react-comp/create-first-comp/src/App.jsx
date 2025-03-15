import React from "react";
import KgButton from "./KgButton";
import Hello from "./Hello";
import Random from "./Random";

function App() {
  return (
    <div className="grid h-screen place-content-center items-center mx-auto">
      <div className="h-40 w-40 bg-white rounded-2xl  shadow-2xl grid place-content-center mx-auto my-auto">
        <h1 className="font-bold text-[20px] text-red-500 underline rounded p-4">
          Hello World!
          <br />
          This is the best React Course
        </h1>
      </div>
      {/* <KgButton /> */}
      <Hello />
      <Random/>
      <Random/>
      <Random/>
      <Random/>
      <Random/>
    </div>
  );
}

export default App;
