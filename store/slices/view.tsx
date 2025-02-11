import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface viewState {
  value: Boolean;
}

const initialState: viewState = { value: false };

const counterSlice = createSlice({
  name: "VIEW-Icons",
  initialState,
  reducers: {
    changeValue: (state,action: PayloadAction<Boolean>) => {
        state.value = action.payload;
    },
  },
});

export const { changeValue } = counterSlice.actions;
export default counterSlice.reducer;