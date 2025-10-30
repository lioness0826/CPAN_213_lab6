import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(composeWithDevTools()),
});
