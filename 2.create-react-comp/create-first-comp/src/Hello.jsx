import React from "react";

function Hello() {
  let name = "Prasanth";
  let no = 456;
  let fname = () => {
    return "Prasanth jain";
  };
  return (
    <div className="mt-10">
      <h1>
        Message No:{no}
        <br />
        Hello this is the future speaking.I am your master{" "}
        <span className="text-red-700">{fname()}</span>
      </h1>
    </div>
  );
}

export default Hello;
