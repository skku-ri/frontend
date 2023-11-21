import { ChatRoom, PersonCard } from '../components';

const people = [
  {
    id: 1,
    name: '오케스트라',
    imgSrc: '/images/skku_s.png',
  },
  {
    id: 2,
    name: '소리사랑',
    imgSrc: '/images/skku_s.png',
  },
  {
    id: 3,
    name: '시선',
    imgSrc: '/images/skku_s.png',
  },
  {
    id: 4,
    name: '멋쟁이사자처럼',
    imgSrc: '/images/skku_s.png',
  },
  {
    id: 5,
    name: '유스호스텔',
    imgSrc: '/images/skku_s.png',
  },
];

export function Message() {
  return (
    <div className='App-home'>
      <nav className='App-nav' style={{ width: '350px' }}>
        {people.map((person) => (
          <PersonCard
            key={person.id}
            name={person.name}
            imgSrc={person.imgSrc}
            focused={person.id === 1}
          />
        ))}
      </nav>
      <section className='App-content'>
        <ChatRoom name='오케스트라' />
      </section>
    </div>
  );
}
