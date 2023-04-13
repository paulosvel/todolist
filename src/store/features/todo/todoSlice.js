import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: nanoid(),
      name: "wake up",
    },
    {
      id: nanoid(),
      name: "make coffee",
    },
    {
      id: nanoid(),
      name: "play tennis",
    },
  ],
  toggleForm: true,
  todoUpdate: {},
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoAdded: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    todoCleared: (state) => {
        state.todos =[];
    },
    todoDeleted:(state,action)=>{
      state.todos=state.todos.filter((todo)=>todo.id!==action.payload);
    },
  },
});

export const {todoAdded,todoCleared,todoDeleted} = todoSlice.actions;
export default todoSlice.reducer;

