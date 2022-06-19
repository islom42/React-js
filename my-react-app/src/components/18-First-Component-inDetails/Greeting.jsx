import React from "react";
// import ReactDOM from "react-dom";

// export default function Greeting() {
//   return (
//     <>
//       <h1>Hello world</h1>
//     </>
//   );
// }

export default function Greeting() {
  return React.createElement(
    "h1",
    {},
    React.createElement("p", {}, "Lorem ipsum")
  );
}
