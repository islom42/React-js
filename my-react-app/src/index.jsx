import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
// import Greeting from "./components/16-First-Component/Greeting";
// import Greeting from "./components/18-First-Component-inDetails/Greeting";
// import Greeting from "./components/19-JSX-rules/Greeting";
// import Nesting from "./components/20-Nested-Components-and-Tools/Nesting";
// import Booklist from "./components/21-MiniBook/Booklist";
// import Booklist from "./components/22-CSS/Booklist";
import Booklist from "./components/23-JSX-CSS/Booklist";

ReactDOM.render(
  <StrictMode>
    {/* <Greeting /> 16*/}
    {/* <Greeting /> 18 */}
    {/* <Greeting /> 19*/}
    {/* <Nesting />  20*/}
    {/* <Booklist /> 21 */}
    {/* <Booklist /> 22 */}
    <Booklist />
  </StrictMode>,
  document.getElementById("root")
);
