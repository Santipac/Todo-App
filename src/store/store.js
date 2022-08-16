import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
