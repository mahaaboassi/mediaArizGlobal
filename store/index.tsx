import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./slices/view"; 
import threeStatusSlice from "./slices/hideThree"; 


export const store = configureStore({
  reducer: {
    view: viewReducer,
    status : threeStatusSlice
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;