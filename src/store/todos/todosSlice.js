import { createSlice } from '@reduxjs/toolkit';

const todosList = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : [];
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
      localStorage.setItem('todos', JSON.stringify(state));
    },
    itsComplete: (state, action) => {
      state.find(task => {
        if (task.id === action.payload) {
          task.completed ? (task.completed = false) : (task.completed = true);
        }
      });
    },

    deleteTask: (state, action) => {
      const taskFound = state.find(task => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
      localStorage.setItem('todos', JSON.stringify(state));
    },
  },
});

//Actions Creators
export const { createTask, itsComplete, deleteTask } = todosSlice.actions;

export default todosSlice.reducer;
