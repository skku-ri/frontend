import { Row } from '../row/Row';
import { SizedBox } from '../sized-box/SizedBox';
import { Spacer } from '../spacer/Spacer';

export function ChatCard(props: {
  name: string;
  imgSrc: string;
  focused?: boolean;
}) {
  return (
    <div
      style={{
        width: 'auto',
        margin: 10,
        padding: 10,
        backgroundColor: `var(--main-${
          props.focused ? 'green-light' : 'gray-light'
        })`,
      }}
    >
      <Row align='center'>
        <img
          src={props.imgSrc}
          alt={'The image of ' + props.name}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
        <SizedBox width={10} />
        <div style={{ flexGrow: 1 }}>
          <Row>
            <h3 style={{ margin: 0 }}>{props.name}</h3>
            <SizedBox width={5} />
            <h4 style={{ margin: 0, color: 'white' }}>13</h4>
            <Spacer />
            <h4 style={{ margin: 0, color: 'white' }}>7:10</h4>
          </Row>
          <h4
            style={{
              width: 250,
              margin: 0,
              textAlign: 'start',
              maxLines: 1,
              overflow: 'clip',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            earum, odio explicabo facilis impedit et! Illum, eius. Aliquid, vero
            in. Odit numquam nostrum cum culpa eveniet quisquam sapiente
            doloribus aspernatur!
          </h4>
        </div>
      </Row>
    </div>
  );
}
