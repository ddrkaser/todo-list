const CREATE_TODO = "CREATE_TODO";

const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

action = createTodo("first todo");
console.log(action);

state = [{ text: "nothing", isCompleted: true }];

const todos = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      const text = payload.text;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
  }
};

newState = todos(state, action);
console.log(newState);
