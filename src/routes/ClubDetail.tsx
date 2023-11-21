import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button, Column, NameCard, Row, SizedBox } from '../components';
import { Club } from '../models/club/club';

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
  const [club, setClub] = useState<Club | undefined>(undefined);
  const { clubName } = useParams();

  useEffect(() => {
    fetch('/data/clubs.json')
      .then((data) => data.json())
      .then((data: Club[]) => {
        setClub(data.find((e) => e.name === clubName));
      });
  }, []);

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
            src={club.logo_img_path}
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
              imgSrc={club?.logo_img_path || ''}
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
