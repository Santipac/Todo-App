import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos/todosSlice';
import authReducer from './auth/authSlice';
export const store = configureStore({
  reducer: {
    todos: todosReducer,
    auth: authReducer,
  },
});

// store.subscribe(() => {
//   localStorage.setItem('reduxState', JSON.stringify(store.getState()));
// });
