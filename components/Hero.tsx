import React from 'react';
import { use100vh } from 'react-div-100vh';

import { styled } from '../stitches.config';
import Arrow from './Arrow';
import Flower from './Flower';

export default function Hero(): React.ReactElement {
  // const viewportHeight = use100vh();
  // const height = viewportHeight ? viewportHeight : '100vh';
  return (
    <Header>
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
      {/* <Arrow /> */}
    </Header>
  );
}

const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
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
  marginTop: '-8vw',
  paddingBottom: '$l',
});

const FlowerContainer = styled('div', {
  position: 'relative',
  marginTop: '-16vw',
  marginLeft: '-20vw',
  svg: {
    width: '45vw',
  },
  '@start': {
    marginTop: '-20vw',
    svg: {
      width: '60vw',
    },
  },
});
