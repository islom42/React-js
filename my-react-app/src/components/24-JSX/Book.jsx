import React from "react";

export default function Book() {
  const title = "Love this book"
  const author = "John Doe" 
  return (
    <article className="book">
      <img
      src="https://images-na.ssl-images-amazon.com/images/I/81JjBCLBHYL._AC_UL210_SR195,210_.jpg"
      alt="images"
      />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </article>
  );
}


