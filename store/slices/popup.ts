
import { createSlice, PayloadAction } from "@reduxjs/toolkit";  

interface PopupState {  
  value: boolean; // or the appropriate type for your use case  
}  

const initialState: PopupState = {  
  value: false, // initial value  
};  

const popupSlice = createSlice({  
  name: "popup",  
  initialState,  
  reducers: {  
    openPopup: (state, action: PayloadAction<boolean>) => {  
      state.value = action.payload;  
    },  
  },  
});  

export const { openPopup } = popupSlice.actions;  
export default popupSlice.reducer;