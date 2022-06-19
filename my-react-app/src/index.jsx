import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import Nesting from "./components/20-Nested-Components-and-Tools/Nesting";
// import Greeting from "./components/16-First-Component/Greeting";
// import Greeting from "./components/18-First-Component-inDetails/Greeting";
// import Greeting from "./components/19-JSX-rules/Greeting";

ReactDOM.render(
  <StrictMode>
    {/* <Greeting /> 16*/}
    {/* <Greeting /> 18 */}
    {/* <Greeting /> 19*/}
    <Nesting />
  </StrictMode>,
  document.getElementById("root")
);
