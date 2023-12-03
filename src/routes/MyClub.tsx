import '../App.css';
import { useAppSelector } from '../app/hooks';
import { ClubGrid, MenuItem } from '../components';
import { Club } from '../models/club/club';
import { selectClub } from '../models/club/clubSlice';

const myClub = [
  '시선',
  '유스호스텔',
  '멋쟁이사자처럼',
  '오케스트라',
  '소리사랑',
];

export function MyClub() {
  const myClubs = myClub
    .map((club) => useAppSelector(selectClub(club)))
    .filter((club): club is Club => club !== undefined);

  return (
    <div className='App-home'>
      <nav className='App-nav'>
        <MenuItem label='My Club' />
      </nav>
      <section className='App-content'>
        <ClubGrid clubs={myClubs} />
      </section>
    </div>
  );
}
