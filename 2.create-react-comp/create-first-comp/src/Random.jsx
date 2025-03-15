import React from "react";

function Random() {
  let num = Math.random() * 100;
  return (
    <div>
      <h1 className="bg-red-400">
        <pre>Random No is: {Math.round(num)}</pre>
      </h1>
    </div>
  );
}

export default Random;
