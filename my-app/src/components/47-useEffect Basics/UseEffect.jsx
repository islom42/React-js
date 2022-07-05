import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffect = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("render");
    document.title = `New title ${value}`;
  });
  console.log("out of useEffect");
  return (
    <>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>click me</button>
    </>
  );
};

export default UseEffect;
