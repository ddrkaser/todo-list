import { CREATE_TODO, REMOVE_TODO } from "./actions";

export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      //payload: { text: 'things todo' }
      // equals to text = payload.text
      let { text } = payload;
      let newTodo = {
        //text: things todo
        text,
        isCompleted: false,
      };
      //concat newTodo to the state array
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      let text = payload.text;
      return state.filter(todo => todo.text !== text);
    }
    default:
      return state
  }
};
