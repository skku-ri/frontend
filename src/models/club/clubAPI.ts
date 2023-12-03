import { API } from '../../app/api';

import { Club } from './club';

type FetchMainCategoriesResponse = Array<{
  main_category: string;
}>;

export async function fetchMainCategories(): Promise<string[]> {
  const response = await API.fetch<FetchMainCategoriesResponse>(
    '/club/main-category',
  );
  return response
    .map((category) => category.main_category)
    .filter((category) => category !== 'nan');
}

type FetchSubCategoriesResponse = Array<{
  sub_category: string;
}>;

export async function fetchSubCategories() {
  const response =
    await API.fetch<FetchSubCategoriesResponse>('/club/sub-category');
  return response
    .map((category) => category.sub_category)
    .filter((category) => category !== 'nan');
}

type FetchClubsResponse = Array<{
  id: number;
  campus: string;
  name: string;
  locate: string;
  description: string;
  activity: string;
  main_category: string;
  sub_category: string;
  logo_img_path: string;
}>;

export async function fetchClubs(): Promise<Club[]> {
  const response = await API.fetch<FetchClubsResponse>('/club');
  return response.map((club) => ({
    id: club.id,
    campus: club.campus,
    name: club.name,
    locate: club.locate,
    description: club.description,
    activity: club.activity,
    mainCategory: club.main_category,
    subCategory: club.sub_category,
    logoImagePath: club.logo_img_path,
  }));
}
