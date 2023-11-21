import React from 'react';

export enum ScrollDirection {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export function ScrollView(props: {
  direction: ScrollDirection;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: props.direction === 'horizontal' ? 'row' : 'column',
        overflow: 'auto',
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}
