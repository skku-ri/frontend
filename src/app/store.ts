import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import counterReducer from '../components/counter/counterSlice';
import clubReducer from '../models/club/clubSlice';
import userReducer from '../models/user/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    club: clubReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppStatus = 'idle' | 'loading' | 'failed';
