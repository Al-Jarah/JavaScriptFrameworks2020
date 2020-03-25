import React from "react";

const Todo = ({todos, showCompleted})=> {

return todos.map((todo,index)=>{

let list = (showCompleted && Todo.completed) || (!showCompleted && !Todo.completed) ?
<ul>
<li>{todo.title}</li>
</ul>: null;
return list;
});
}
export default Todo;