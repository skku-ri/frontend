import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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

const clubSlice = createSlice({
  name: 'club',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMainCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMainCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.mainCategories = action.payload;
      })
      .addCase(fetchMainCategoriesAsync.rejected, (state) => {
        state.status = 'failed';
      });

    builder
      .addCase(fetchSubCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSubCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.subCategories = action.payload;
      })
      .addCase(fetchSubCategoriesAsync.rejected, (state) => {
        state.status = 'failed';
      });

    builder
      .addCase(fetchClubsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchClubsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.clubs = action.payload;
      })
      .addCase(fetchClubsAsync.rejected, (state) => {
        state.status = 'failed';
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
