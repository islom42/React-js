import React, { useState } from "react";
// useState - function
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

export default function Setup() {
  // console.log(useState("1"));
  /* const value = useState("1")[0];
  const handler = useState("1")[1];
  console.log(value, handler); */

  const [text, setText] = useState("Random title");

  const handleClick = () => {
    let text = "Random title";
    if (text === "Random title") setText("Hello world!");
    else setText("Random title");
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button onClick={handleClick} className="btn">
        change title
      </button>
    </React.Fragment>
  );
}
