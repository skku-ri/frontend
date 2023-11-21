import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

import { User } from './user';

export interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      console.log('login');
      state.user = {
        id: 0,
        userId: 'test',
        name: 'test',
      };
    },
    logout: (state) => {
      console.log('logout');
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const isLogined = (state: RootState) => state.user.user !== null;

export default userSlice.reducer;
