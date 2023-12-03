import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../app/hooks';
import {
  Column,
  Divider,
  MenuItem,
  NameCard,
  Row,
  SizedBox,
} from '../components';
import { Club } from '../models/club/club';
import { selectClub } from '../models/club/clubSlice';
import { selectUser } from '../models/user/userSlice';

const myClub = [
  '시선',
  '유스호스텔',
  '멋쟁이사자처럼',
  '오케스트라',
  '소리사랑',
];

const defaultLogo = '/images/skku_s.png';

export function MyCard() {
  const [selectedClub, setSelectedClub] = useState(myClub[0]);

  const navigate = useNavigate();

  const myClubs = myClub
    .map((club) => useAppSelector(selectClub(club)))
    .filter((club): club is Club => club !== undefined);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);

  return (
    user && (
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
            name={user.name}
            department={user.department}
            studentId={user.studentId}
            imgSrc={
              myClubs.find((e) => e.name === selectedClub)?.logoImagePath ||
              defaultLogo
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
            name={user.name}
            department={user.department}
            studentId={user.studentId}
            imgSrc='/images/hong.png'
            size='large'
          />
        </Column>
      </Row>
    )
  );
}
