// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface viewState {
//   value: Boolean;
// }

// const initialState: viewState = { value: false };

// const threeStatusSlice = createSlice({
//   name: "HIDE-THREE",
//   initialState,
//   reducers: {
//     changeThree: (state,action: PayloadAction<Boolean>) => {
//         state.value = action.payload;
//     },
//   },
// });

// export const { changeThree } = threeStatusSlice.actions;
// export default threeStatusSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";  

interface ThreeStatusState {  
  value: boolean;  
}  

const initialState: ThreeStatusState = { value: false };  

const threeStatusSlice = createSlice({  
  name: "HIDE-THREE",  
  initialState,  
  reducers: {  
    changeThree: (state, action: PayloadAction<boolean>) => {  
      state.value = action.payload;  
    },  
  },  
});  

export const { changeThree } = threeStatusSlice.actions;  
export default threeStatusSlice.reducer; 