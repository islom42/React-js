import React, { useState } from "react";
import List from "./components/List";
import Animation from "./components/Animation";
import { data } from "./components/mock/data";

export default function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <List people={people} />
        <button className="btn" onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
      <Animation />
    </main>
  );
}
