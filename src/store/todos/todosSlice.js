import { createSlice } from '@reduxjs/toolkit';

const todosList = [];
export const todosSlice = createSlice({
  name: 'todos',
  initialState: todosList,
  reducers: {
    createTask: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload,
        completed: false,
      });
    },
    itsComplete: (state, action) => {
      state.find(task => {
        if (task.id === action.payload) {
          task.completed ? (task.completed = false) : (task.completed = true);
        }
      });
    },
    editTask: (state, action) => {
      state.find(task =>
        task.id === action.payload.id ? (task.name = action.payload.name) : null
      );
    },
    deleteTask: (state, action) => {
      const taskFound = state.find(task => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
  },
});

//Actions Creators
export const { createTask, itsComplete, deleteTask, editTask } =
  todosSlice.actions;

export default todosSlice.reducer;
