import React, { useState } from "react";
import { data } from "../components/mock/data";
export default function List() {
  const [peoples, setPeoples] = useState(data);
  const onDelete = (id) => {
    let res = peoples.filter((person) => person.id !== id);
    setPeoples(res);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{peoples.length} birthday</h1>
      {peoples.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <button onClick={() => onDelete(person.id)} className="btn-list">
              Delete
            </button>
          </article>
        );
      })}
    </>
  );
}
