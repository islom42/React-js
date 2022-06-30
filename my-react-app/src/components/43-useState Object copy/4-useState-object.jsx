import React, { useState } from "react";

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: "Peter",
  //   age: 24,
  //   message: "random message",
  // });
  // const [name, setName] = useState("peter");
  // const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    // setPerson({ ...person, message: "hey" });
    setMessage("Message changed");
  };
  return (
    <>
      {/* <h1>{name}</h1>
      <h1>{age}</h1> */}
      <h1>{message}</h1>
      <button className="btn" onClick={changeMessage}>
        Chage object
      </button>
    </>
  );
};

export default UseStateObject;
