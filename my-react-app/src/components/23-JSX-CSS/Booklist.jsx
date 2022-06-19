import React from "react";
import Book from "./Book";
import "../../index.css";

export default function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
