import { createSlice } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';
const now = new Date();
const formattedDate = `${now.getFullYear()}-${String(
  now.getMonth() + 1
).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(
  now.getHours()
).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(
  now.getSeconds()
).padStart(2, '0')}`;
const initialFeedbackState = [
  {
    id: uuidv4(),
    nickname: '꿍이',
    body: '안녕하세요! 꿍이 입니다.😊 \n피드백을 적어주세요!!',
    password: '0000',
    date: formattedDate,
    isEdit:false
  },
];

const feedbackSlice = createSlice({
  name: 'feedbacks',
  initialState: initialFeedbackState,
  reducers: {
    addFeedback: (state, action) => {
      state.push(action.payload); // 새로운 댓글 추가
    },
    deleteFeedback: (state, action) => {
      return state.filter((Feedback) => Feedback.id !== action.payload); // ID로 삭제
    },
    editFeedback: (state, action) => {
      const { id, nickname, body, password,date,isEdit } = action.payload;
      const target = state.find((Feedback) => Feedback.id === id);
      if (target) {
        target.nickname = nickname;
        target.body = body;
        target.password = password;
        target.date = date;
        target.isEdit = isEdit;
      }
    },
  },
});

export const { addFeedback, deleteFeedback, editFeedback } =
  feedbackSlice.actions;
export default feedbackSlice.reducer;
