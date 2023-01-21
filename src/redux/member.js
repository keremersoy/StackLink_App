import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../api.js';

const initialState = {
  members: {
    list: [],
    loading: false,
    error: '',
  },
};

export const fetchMemberList = createAsyncThunk('fetchReplyList',
  async ({token,id}) => {
    const response = await api.get('team/member/get/'+id ,{
      headers: {
        Authorization: 'bearer ' + token,
      },
    });
    return response.data.data
  },
);

export const member = createSlice({
  name: 'member',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMemberList.pending, (state, action) => {
      state.members.loading = true;
      state.members.error = '';
    });
    builder.addCase(fetchMemberList.fulfilled, (state, action) => {
      state.members.list = action.payload;
      state.members.loading = false;
    });
    builder.addCase(fetchMemberList.rejected, (state, action) => {
      state.members.loading = false;
      state.members.error = 'Liste yüklenemedi';
    });
  },
});

export default member.reducer;
