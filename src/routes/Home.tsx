import { useEffect, useState } from 'react';

import '../App.css';
import { ClubGrid, MenuItem, Row, TextInput } from '../components';
import { Club } from '../models/club';

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [clubs, setClubs] = useState<Club[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('/data/clubs.json')
      .then((data) => data.json())
      .then((data: Club[]) => {
        setClubs(data.sort((a, b) => a.name.localeCompare(b.name)));

        const _categories = Array.from(
          new Set(data.map((e) => e.main_category).filter((e) => !!e)),
        ).sort((a, b) => a.localeCompare(b));
        setCategories(_categories);
      });
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
            clubs={clubs.filter((e) => e.main_category === selectedCategory)}
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
