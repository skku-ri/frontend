import { useParams } from 'react-router-dom';

import { useAppSelector } from '../app/hooks';
import { Button, Column, NameCard, Row, SizedBox } from '../components';
import { selectClub } from '../models/club/clubSlice';

const members = [
  {
    name: '율전이',
    department: '소프트웨어학과',
    studentId: '2020123454',
  },
  {
    name: '명륜이',
    department: '소프트웨어학과',
    studentId: '2020123455',
  },
  {
    name: '홍길동',
    department: '소프트웨어학과',
    studentId: '2020123456',
  },
];

export function ClubDetail() {
  const { clubName } = useParams();

  const club = clubName ? useAppSelector(selectClub(clubName)) : undefined;

  return club ? (
    <Column>
      <Row>
        <Column
          key={club.name}
          style={{
            width: 'min(800px, 80vw)',
          }}
          align='center'
        >
          <img
            src={club.logoImagePath}
            alt={`${club.name}'s Logo`}
            style={{
              width: '150px',
              height: '150px',
            }}
          />
          <h1>{club.name}</h1>
          <h5>{club.description}</h5>
          <Button style='primary' width='200px' fontSize={20}>
            신청
          </Button>
        </Column>
      </Row>
      <SizedBox height={50} />
      <Row>
        <Button style='primary' width='200px' fontSize={20}>
          멤버
        </Button>
        <Button width='200px' fontSize={20}>
          스케쥴
        </Button>
        <Button width='200px' fontSize={20}>
          공지
        </Button>
        <Button width='200px' fontSize={20}>
          전시회
        </Button>
      </Row>
      <Row>
        {members.map((member) => (
          <div style={{ padding: 20 }} key={member.studentId}>
            <NameCard
              name={member.name}
              department={member.department}
              studentId={member.studentId}
              imgSrc={club?.logoImagePath || ''}
              size='small'
            />
          </div>
        ))}
      </Row>
    </Column>
  ) : (
    <></>
  );
}
