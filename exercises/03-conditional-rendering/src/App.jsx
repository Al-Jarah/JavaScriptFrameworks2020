import React from "react";
import Todo from "./Todo";
import {todos} from "./data/todos";
// import another thing

function App() {
  return <div className="App">{
    <Todo todos={todos} showCompleted={false}/>
  }</div>;
}

export default App;
