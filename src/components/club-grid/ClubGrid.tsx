import { useNavigate } from 'react-router-dom';

import { Club } from '../../models/club';
import { Card } from '../card/Card';

import styles from './ClubGrid.module.css';

const defaultLogo = '/images/skku_s.png';

export function ClubGrid(props: { clubs: Club[] }) {
  const navigate = useNavigate();

  const onMouseEnter =
    (clubName: string) => (e: React.MouseEvent<HTMLDivElement>) => {
      // console.log(clubName);
    };
  const onMouseLeave =
    (clubName: string) => (e: React.MouseEvent<HTMLDivElement>) => {
      // console.log(clubName);
    };

  const onClick =
    (clubName: string) => (e: React.MouseEvent<HTMLDivElement>) => {
      navigate('/club/' + clubName);
    };

  return (
    <div className={styles.cards}>
      {props.clubs.map((club) => (
        <div
          className={styles.card}
          key={club.name}
          onMouseEnter={onMouseEnter(club.name)}
          onMouseLeave={onMouseLeave(club.name)}
          onClick={onClick(club.name)}
        >
          <Card padding={0} width={200} height={180}>
            <img
              src={club.logo_img_path}
              alt={'The logo of ' + club.name}
              onError={(e) => {
                if (e.currentTarget.src !== defaultLogo) {
                  e.currentTarget.src = defaultLogo;
                }
              }}
            />
          </Card>
          <h3>{club.name}</h3>
        </div>
      ))}
    </div>
  );
}
