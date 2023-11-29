import { useEffect, useState } from 'react';

import '../App.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ClubGrid, MenuItem, Row, TextInput } from '../components';
import {
  fetchClubsAsync,
  fetchMainCategoriesAsync,
  selectClubs,
  selectMainCategories,
} from '../models/club/clubSlice';

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filter, setFilter] = useState('');

  const dispatch = useAppDispatch();

  const categories = useAppSelector(selectMainCategories);
  const clubs = useAppSelector(selectClubs);

  useEffect(() => {
    dispatch(fetchMainCategoriesAsync());
    dispatch(fetchClubsAsync());
  }, []);

  return (
    <div className='App-home'>
      <nav className='App-nav'>
        <MenuItem
          key='search'
          label='검색'
          onClick={() => setSelectedCategory('')}
        />
        {categories.map((e) => (
          <MenuItem
            key={e}
            label={e.toUpperCase()}
            onClick={() => setSelectedCategory(e)}
          />
        ))}
      </nav>
      <section className='App-content'>
        <h1 className='App-category-header'>{selectedCategory || '검색'}</h1>
        {selectedCategory ? (
          <ClubGrid
            clubs={clubs.filter((e) => e.mainCategory === selectedCategory)}
          />
        ) : (
          <>
            <Row align='start'>
              <TextInput
                label='검색어를 입력하세요'
                onChange={(e) => setFilter(e)}
              />
            </Row>
            {filter && (
              <ClubGrid
                clubs={clubs.filter((club) => club.name.includes(filter))}
              />
            )}
          </>
        )}
      </section>
    </div>
  );
}
