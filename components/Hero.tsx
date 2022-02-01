import { styled } from '../stitches.config';
import Flower from './Flower';

export default function Hero(): React.ReactElement {
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
        &mdash; designer
      </Heading>
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
  color: '$heading',
  fontFamily: '$serif',
  fontSize: '$heading',
  lineHeight: '$bigHeading',
  marginTop: '-8vw',
  paddingBottom: '$l',
  textAlign: 'right',
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
