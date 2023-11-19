import { useEffect, useState } from 'react';

import '../App.css';
import { ClubGrid, MenuItem } from '../components';
import { Club } from '../utils/club';

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [clubs, setClubs] = useState<Club[]>([]);

  useEffect(() => {
    fetch('/data/clubs.json')
      .then((data) => data.json())
      .then((data: Club[]) => {
        setClubs(data.sort((a, b) => a.name.localeCompare(b.name)));

        const _categories = Array.from(
          new Set(data.map((e) => e.main_category).filter((e) => !!e)),
        ).sort((a, b) => a.localeCompare(b));
        setCategories(_categories);
        setSelectedCategory(_categories[0]);
      });
  }, []);

  return (
    <div className='App-home'>
      <nav className='App-nav'>
        {categories.map((e) => (
          <MenuItem
            key={e}
            label={e.toUpperCase()}
            onClick={() => setSelectedCategory(e)}
          />
        ))}
      </nav>
      <section className='App-content'>
        <h1 className='App-category-header'>{selectedCategory}</h1>
        <ClubGrid
          clubs={clubs.filter((e) => e.main_category === selectedCategory)}
        />
      </section>
    </div>
  );
}
