import React from "react";

export default function Nesting() {
  return (
    <div>
      <Person />
      <Descripttion />
    </div>
  );
}

const Person = () => <h1>Hello Islom</h1>;
const Descripttion = () => {
  return <p>There is something in Descripttion</p>;
};
