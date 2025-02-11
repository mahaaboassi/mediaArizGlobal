import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./slices/view"; // Example reducer

export const store = configureStore({
  reducer: {
    view: viewReducer,
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;