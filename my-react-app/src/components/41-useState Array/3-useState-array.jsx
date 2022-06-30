import React from "react";
import { data } from "./data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Delete</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Delete items
      </button>
    </>
  );
};

export default UseStateArray;
