import { createSlice } from '@reduxjs/toolkit';

const todosList = [];
export const todosSlice = createSlice({
  name: 'todos',
  initialState: todosList,
  reducers: {
    setPrevTasks: (state, { payload }) => {
      payload.map(el => state.push(el));
    },
    createTask: (state, action) => {
      state.push(action.payload);
    },
    checkerTask: (state, action) => {
      state.find(task => {
        if (task.id === action.payload) {
          task.completed ? (task.completed = false) : (task.completed = true);
        }
      });
    },
    updateTask: (state, { payload }) => {
      const { id, name } = payload;
      const taskFound = state.find(task => task.id === id);
      if (taskFound) {
        taskFound.name = name;
      }
    },
    deleteTask: (state, action) => {
      const taskFound = state.find(task => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
    clearTasksLogout: state => {
      state.length = 0;
    },
  },
});

//Actions Creators
export const {
  setPrevTasks,
  createTask,
  checkerTask,
  updateTask,
  deleteTask,
  clearTasksLogout,
} = todosSlice.actions;

export default todosSlice.reducer;
