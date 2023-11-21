import { useState } from 'react';

import { Button } from '../button/Button';
import { Row } from '../row/Row';
import { SizedBox } from '../sized-box/SizedBox';
import { TextInput } from '../text-input/TextInput';

export function ChatRoom(props: { name: string }) {
  const [messasges, setMessages] = useState<string[]>([]);
  const [chat, setChat] = useState<string>('');

  return (
    <div
      style={{
        margin: '0.5rem 2rem',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          backgroundColor: 'var(--main-green-lighter)',
          margin: 0,
          padding: '0.5em',
        }}
      >
        {props.name}
      </h1>
      <div
        style={{
          height: 'min(calc(100vh - 400px), 600px)',
          backgroundColor: 'var(--main-green-light)',
        }}
      >
        {messasges.map((message, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <div
              style={{
                padding: '0.5em',
                margin: '0.5em 1em',
                backgroundColor: 'white',
                borderRadius: '0.5em',
              }}
            >
              {message}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          backgroundColor: 'var(--main-green-lighter)',
          padding: '0.5em',
        }}
      >
        <Row>
          <TextInput
            width='780px'
            onChange={(e) => setChat(e)}
            onEnterKeyDown={() => setMessages([...messasges, chat])}
          />
          <SizedBox width={10} />
          <Button
            fontSize={20}
            width='5em'
            onClick={() => setMessages([...messasges, chat])}
          >
            Send
          </Button>
        </Row>
      </div>
    </div>
  );
}
