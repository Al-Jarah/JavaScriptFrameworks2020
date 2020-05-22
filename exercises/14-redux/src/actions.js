import * as types from "./constants/actionTypes";

export const increaseCount = () => {
  return {
    type: types.INCREASE_COUNT,
  };
};

export const decreaseCount = () => {
  return {
    type: types.DECREASE_COUNT,
  };
};

export const toggle = () => {
  return {
    type: types.TOGGLE,
  };
};

export const pickColor = (color) => {
  // console.log("color", color);
  return {
    type: types.PICK_COLOR,
    color: color,
  };
};

export const setInput = (todoInput) => {
  // Complete me
  // addTodo(todoInput)
  return {
    type: types.TODO_INPUT,
    todoInput: todoInput,
  };
};

export const addTodo = () => {
  // Complete me
  // console.log(todo)
  return {
    type: types.TODO,
  };
};
