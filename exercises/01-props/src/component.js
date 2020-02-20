import React from "react";

function Welcome(props) {
console.log()
  let name = props.name === undefined ? "User" : props.name;
  return  <h1> "hi" + {name} </h1>;
}


export default Welcome;