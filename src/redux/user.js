import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: '',
  userId:'',
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, actions) => { 
      info=actions.payload;
      state.token = info.accessToken;
      state.userId= info.userId;
    },
  },
});

export const {login} = user.actions;

export default user.reducer;
