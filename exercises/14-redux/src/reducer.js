import * as types from "./constants/actionTypes";

const reducer = (
  /**
   * Starting state.
   * You may want to add more values here
   */
  state = {
    count: 0,
    todos: ["Finish this assignment", "Read a book"],
  },
  action
) => {
  // console.log("action", action);
  // console.log("state reducer", state);
  switch (action.type) {
    case types.INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case types.DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case types.TOGGLE:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case types.PICK_COLOR:
      // console.log(state.color)
      return {
        ...state,
        color: action.color,
      };
    case types.TODO_INPUT:
      // console.log("todo_input", state)
      return {
        ...state,
        todoInput: action.todoInput,
      };
    case types.TODO:
      // console.log("todo_input", state)
      return {
        ...state,
        todoInput: "",
        todos: [...state.todos, state.todoInput],
      };
    /**
     * Add additional case statements here
     */
    default:
      return state;
  }
};

export default reducer;
