
import { createSlice, PayloadAction } from "@reduxjs/toolkit";  

interface ViewState {  
  value: boolean; // or the appropriate type for your use case  
}  

const initialState: ViewState = {  
  value: false, // initial value  
};  

const viewSlice = createSlice({  
  name: "view",  
  initialState,  
  reducers: {  
    changeValue: (state, action: PayloadAction<boolean>) => {  
      state.value = action.payload;  
    },  
  },  
});  

export const { changeValue } = viewSlice.actions;  
export default viewSlice.reducer;