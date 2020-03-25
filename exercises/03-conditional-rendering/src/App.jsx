import React from "react";
import Todo from "./Todo";
import { todos } from "./data/todos";
import  "./App.css"
// import another thing


function App() {
  return <div className="App">{
    <Todo style={{ textAlign: 'center' }} todos={todos} showCompleted={false}/>
  }</div>;
}

export default App;
