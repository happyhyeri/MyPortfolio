import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from './store/feedbackSlice';
import selectedFeedbackItemReducer from './store/selectedFeedbackItemSlice';


export const store = configureStore({
  reducer: {
    feedbacks: feedbackReducer,
    selectedFeedbackItem :selectedFeedbackItemReducer
  }
});