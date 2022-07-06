import React, { useState } from "react";

export const Condition = () => {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <div>
        <h1>Multiple condition</h1>
        <button onClick={() => setLoading(false)}>Click me</button>
      </div>
    </>
  );
};
