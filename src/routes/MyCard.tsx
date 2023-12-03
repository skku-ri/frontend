import { useEffect, useState } from 'react';

import {
  Column,
  Divider,
  MenuItem,
  NameCard,
  Row,
  SizedBox,
} from '../components';
import { Club } from '../models/club/club';

const myClub = [
  '시선',
  '유스호스텔',
  '멋쟁이사자처럼',
  '오케스트라',
  '소리사랑',
];

export function MyCard() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [selectedClub, setSelectedClub] = useState('시선');

  useEffect(() => {
    fetch('/data/clubs.json')
      .then((data) => data.json())
      .then((data: Club[]) => {
        setClubs(data.sort((a, b) => a.name.localeCompare(b.name)));
      });
  }, []);

  return (
    <Row style={{ padding: '0 30px' }}>
      <Column>
        {myClub.map((e) => (
          <MenuItem
            key={e}
            label={e.toUpperCase()}
            onClick={() => setSelectedClub(e)}
          />
        ))}
      </Column>
      <Column align='start'>
        <h1>{selectedClub}</h1>
        <NameCard
          name='홍길동'
          department='소프트웨어학과'
          studentId='2020123456'
          imgSrc={
            clubs.find((e) => e.name === selectedClub)?.logoImagePath || ''
          }
          size='large'
        />
      </Column>
      <SizedBox width={50} />
      <Divider vertical length={650} />
      <SizedBox width={50} />
      <Column align='start'>
        <h1>내 명함</h1>
        <NameCard
          name='홍길동'
          department='소프트웨어학과'
          studentId='2020123456'
          imgSrc='/images/hong.png'
          size='large'
        />
      </Column>
    </Row>
  );
}
