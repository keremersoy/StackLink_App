import {createSlice} from '@reduxjs/toolkit';
import userActions from './actions/userActions';

const initialState = {
  token: '',
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {...userActions},
});

export const {login} = user.actions;

export default user.reducer;
