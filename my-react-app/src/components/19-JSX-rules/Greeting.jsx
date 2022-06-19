import React from "react";

/* 
-JSX rules
-return single element
-div / section / article / FRAGMEMT
-use camelCase for html attribute
-className instead of class
-close every element
-formatting

*/

export default function Greeting() {
  return (
    <>
      <h3>Hello world</h3>
      <article>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </article>
      <button onClick={""} className="">
        Submit
      </button>
    </>
    // <a href=""></a> - this is error return one element
  );
}
