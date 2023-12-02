import { createAsyncThunk } from '@reduxjs/toolkit';

import { createAppSlice } from '../../app/hooks';
import { AppStatus, RootState } from '../../app/store';

import { Club } from './club';
import { fetchClubs, fetchMainCategories, fetchSubCategories } from './clubAPI';

interface ClubState {
  mainCategories: string[];
  subCategories: string[];
  clubs: Club[];
  status: AppStatus;
}

const initialState: ClubState = {
  mainCategories: [],
  subCategories: [],
  clubs: [],
  status: 'idle',
};

export const fetchMainCategoriesAsync = createAsyncThunk(
  'club/fetchMainCategories',
  async () => await fetchMainCategories(),
);

export const fetchSubCategoriesAsync = createAsyncThunk(
  'club/fetchSubCategories',
  async () => await fetchSubCategories(),
);

export const fetchClubsAsync = createAsyncThunk('club/fetchClubs', async () =>
  (await fetchClubs()).sort((a, b) => a.name.localeCompare(b.name)),
);

const clubSlice = createAppSlice({
  name: 'club',
  initialState,
  reducers: {},
  asyncThunkReducers: (builder) => {
    builder
      .addCase(fetchMainCategoriesAsync, {
        idle: (state, action) => {
          state.mainCategories = action.payload;
        },
      })
      .addCase(fetchSubCategoriesAsync, {
        idle: (state, action) => {
          state.subCategories = action.payload;
        },
      })
      .addCase(fetchClubsAsync, {
        idle: (state, action) => {
          state.clubs = action.payload;
        },
      });
  },
});

export const selectMainCategories = (state: RootState) =>
  state.club.mainCategories;

export const selectSubCategories = (state: RootState) =>
  state.club.subCategories;

export const selectClubs = (state: RootState) => state.club.clubs;

export const selectClub = (clubName: string) => (state: RootState) =>
  state.club.clubs.find((club) => club.name === clubName);

export default clubSlice.reducer;
