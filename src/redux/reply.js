import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../api.js';

const initialState = {
  replies: {
    list: [],
    loading: false,
    error: '',
  },
};

export const fetchReplyList = createAsyncThunk('fetchReplyList',
  async ({token,id}) => {
    const response = await api.get('reply/get/'+id ,{
      headers: {
        Authorization: 'bearer ' + token,
      },
    });
    return response.data.data
  },
);

export const reply = createSlice({
  name: 'question',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchReplyList.pending, (state, action) => {
      state.replies.loading = true;
      state.replies.error = '';
    });
    builder.addCase(fetchReplyList.fulfilled, (state, action) => {
      state.replies.list = action.payload;
      state.replies.loading = false;
    });
    builder.addCase(fetchReplyList.rejected, (state, action) => {
      state.replies.loading = false;
      state.replies.error = 'Liste yüklenemedi';
    });
  },
});

export default reply.reducer;
