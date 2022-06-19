import React from "react";
import Image from "./Image";

export default function Book() {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
}
const Title = () => {
  return <h1>Love this book</h1>;
};
const Author = () => {
  return <h1>John Doe</h1>;
};
