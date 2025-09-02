import { createSlice } from '@reduxjs/toolkit';



const selectedFeedbackSlice = createSlice({
  name: 'selectedFeedbackItem',
  initialState: null,
  reducers: {
    setSelectedFeedbackItem: (state, action) => action.payload,
  },
});

export const {setSelectedFeedbackItem} = selectedFeedbackSlice.actions;
export default selectedFeedbackSlice.reducer;
