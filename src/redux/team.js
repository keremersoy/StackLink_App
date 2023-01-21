import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../api.js';

const initialState = {
  teams: {
    list: [],
    loading: false,
    error: '',
  },
};

export const fetchTeamList = createAsyncThunk('fetchTeamList',
  async (token) => {
    const response = await api.get('/team/get', {
      headers: {
        Authorization: 'bearer ' + token,
      },
    });
    return response.data.data
  },
);

export const team = createSlice({
  name: 'team',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTeamList.pending, (state, action) => {
      state.teams.loading = true;
      state.teams.error = '';
    });
    builder.addCase(fetchTeamList.fulfilled, (state, action) => {
      state.teams.list = action.payload;
      state.teams.loading = false;
    });
    builder.addCase(fetchTeamList.rejected, (state, action) => {
      state.teams.loading = false;
      state.teams.error = 'Liste yüklenemedi';
    });
  },
});

export default team.reducer;
