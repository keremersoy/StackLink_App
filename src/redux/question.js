import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../api.js';

const initialState = {
  questions: {
    list: [],
    loading: false,
    error: '',
  },
};

export const fetchQuestionList = createAsyncThunk('fetchQuestionList',
  async (token) => {
    const response = await api.get('/question/get', {
      headers: {
        Authorization: 'bearer ' + token,
      },
    });
    return response.data.data
  },
);

export const question = createSlice({
  name: 'question',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchQuestionList.pending, (state, action) => {
      state.questions.loading = true;
      state.questions.error = '';
    });
    builder.addCase(fetchQuestionList.fulfilled, (state, action) => {
      state.questions.list = action.payload;
      state.questions.loading = false;
    });
    builder.addCase(fetchQuestionList.rejected, (state, action) => {
      state.questions.loading = false;
      state.questions.error = 'Liste yüklenemedi';
    });
  },
});

export default question.reducer;
