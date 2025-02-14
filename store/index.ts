import { configureStore } from "@reduxjs/toolkit";
import viewSlice from "./slices/view"; 
import threeStatusSlice from "./slices/hideThree"; 


export const store = configureStore({
  reducer: {
    view: viewSlice,
    status : threeStatusSlice
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
