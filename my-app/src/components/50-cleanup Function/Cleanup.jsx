import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter

const Cleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("render");
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <>
      <h1>Window</h1>
      <h3>{size}</h3>
    </>
  );
};

export default Cleanup;
