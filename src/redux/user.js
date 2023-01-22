import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import api from '../api';
const initialState = {
  token: '',
  userId: '',
  user:{
    data: [],
    loading: false,
    error: '',
  },
};

export const fetchUserData = createAsyncThunk('fetchUserData',
  async (token) => {
    const response = await api.get('user/get/', {
      headers: {
        Authorization: 'bearer ' + token,
      },
    });
    return response.data.data
  },
);

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, actions) => {
      info = actions.payload;
      state.token = info.accessToken;
      state.userId = info.userId;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUserData.pending, (state, action) => {
      state.user.loading = true;
      state.user.error = '';
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.user.data = action.payload;
      state.user.loading = false;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.user.loading = false;
      state.user.error = 'Kullanıcı yüklenemedi';
    });
  },
});

export const {login} = user.actions;

export default user.reducer;
