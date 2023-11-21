import { Column } from '../../column/Column';
import { Card } from '../card/Card';
import { Spacer } from '../spacer/Spacer';

export function NameCard(props: {
  name: string;
  department: string;
  studentId: string;
  imgSrc: string;
  size?: 'small' | 'medium' | 'large';
}) {
  const size = props.size ?? 'medium';
  const cardHeight = size === 'small' ? 300 : size === 'medium' ? 400 : 500;
  const cardWidth = cardHeight * 0.54;
  const headerMargin = size === 'small' ? 10 : size === 'medium' ? 15 : 20;

  return (
    <Card width={cardWidth} height={cardHeight}>
      <Column style={{ width: '100%' }}>
        <img
          src={props.imgSrc}
          alt={`${props.name}'s image`}
          style={{
            objectFit: 'contain',
          }}
        />
        <Spacer />
        {size === 'small' ? (
          <Column>
            <h2 style={{ margin: `${headerMargin}px 0` }}>{props.name}</h2>
            <h4 style={{ margin: `${headerMargin}px 0` }}>
              {props.department}
            </h4>
            <h4 style={{ margin: `${headerMargin}px 0` }}>{props.studentId}</h4>
          </Column>
        ) : (
          <Column>
            <h1 style={{ margin: `${headerMargin}px 0` }}>{props.name}</h1>
            <h3 style={{ margin: `${headerMargin}px 0` }}>
              {props.department}
            </h3>
            <h3 style={{ margin: `${headerMargin}px 0` }}>{props.studentId}</h3>
          </Column>
        )}
      </Column>
    </Card>
  );
}
