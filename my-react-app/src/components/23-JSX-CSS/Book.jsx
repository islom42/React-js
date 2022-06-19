import React from "react";
import Image from "./Image";

export default function Book() {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
}
const Title = () => {
  return <h1 style={{ textTransform: "uppercase" }}>Love this book</h1>;
};
const Author = () => {
  return <h1>John Doe</h1>;
};
