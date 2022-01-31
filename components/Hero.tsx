import React from 'react';
import { use100vh } from 'react-div-100vh';

import { styled } from '../stitches.config';
import Flower from './Flower';

export default function Hero(): React.ReactElement {
  const viewportHeight = use100vh();
  const height = viewportHeight ? viewportHeight : '100vh';
  return (
    <Header css={{ height }}>
      <FlowerContainer>
        <Flower />
      </FlowerContainer>
      <Heading>
        Lilla
        <br />
        Bardenova
        <br />
        &ndash; designer
      </Heading>
    </Header>
  );
}

const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$background',
  position: 'relative',
  zIndex: 2,
});

const Heading = styled('h1', {
  fontFamily: '$serif',
  fontSize: '$heading',
  lineHeight: '$bigHeading',
  textAlign: 'right',
  color: '$accent',
});

const FlowerContainer = styled('div', {
  position: 'absolute',
  top: '-32vh',
  left: '10vw',
  svg: {
    width: '50vw',
  },
});
