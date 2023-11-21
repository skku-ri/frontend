import { useEffect, useState } from 'react';

import '../App.css';
import { ClubGrid, MenuItem } from '../components';
import { Club } from '../models/club';

const myClub = [
  '시선',
  '유스호스텔',
  '멋쟁이사자처럼',
  '오케스트라',
  '소리사랑',
];

export function MyClub() {
  const [clubs, setClubs] = useState<Club[]>([]);

  useEffect(() => {
    fetch('/data/clubs.json')
      .then((data) => data.json())
      .then((data: Club[]) => {
        setClubs(
          data
            .filter((e) => myClub.includes(e.name))
            .sort((a, b) => a.name.localeCompare(b.name)),
        );
      });
  }, []);

  return (
    <div className='App-home'>
      <nav className='App-nav'>
        <MenuItem label='My Club' />
      </nav>
      <section className='App-content'>
        <ClubGrid clubs={clubs} />
      </section>
    </div>
  );
}
