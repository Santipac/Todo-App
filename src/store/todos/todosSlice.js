import { createSlice } from '@reduxjs/toolkit';

const todosList = [];
export const todosSlice = createSlice({
  name: 'todos',
  initialState: todosList,
  reducers: {
    clearTasksLogout: (state) =>{
      state.length = 0
    },
    setPrevTasks: (state, {payload})=>{
      payload.map(el => state.push(el))
    },
    createTask: (state, action) => {
      state.push(action.payload);
      
    },
    updateTask: (state, action) => {
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
      
    },
    
  },
});

//Actions Creators
export const { createTask, updateTask, itsComplete, deleteTask, setPrevTasks, clearTasksLogout } = todosSlice.actions;

export default todosSlice.reducer;
