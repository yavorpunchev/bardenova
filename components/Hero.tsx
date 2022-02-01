import { motion } from 'framer-motion';

import { config, styled, transitions } from '../stitches.config';
import { useMedia } from '../utils/hooks';
import Flower from './Flower';

const transition = {
  ease: transitions.smooth,
  duration: 1.85,
};

const slideInTransition = (delay?: number, shouldAnimate?: boolean) => ({
  initial: { y: shouldAnimate ? '200%' : 0 },
  animate: { y: 0 },
  exit: { y: 0 },
  transition: {
    delay,
    ...transition,
  },
});

export default function Hero(): React.ReactElement {
  const { start, bp1, bp2, bp3 } = config.media;

  const animateOnDesktop = useMedia(
    [start, bp1, bp2, bp3],
    [false, true, true, true],
    true
  );

  return (
    <Header>
      <FlowerContainer>
        <Flower />
      </FlowerContainer>
      <Heading>
        <TextRevealWrapper>
          <TextReveal
            key="reveal-first"
            {...slideInTransition(0.95, animateOnDesktop)}
          >
            Lilla
          </TextReveal>
        </TextRevealWrapper>
        <TextRevealWrapper>
          <TextReveal
            key="reveal-second"
            {...slideInTransition(1.06, animateOnDesktop)}
          >
            Bardenova
          </TextReveal>
        </TextRevealWrapper>
        <TextRevealWrapper>
          <TextReveal
            key="reveal-third"
            {...slideInTransition(1.17, animateOnDesktop)}
          >
            &mdash; designer
          </TextReveal>
        </TextRevealWrapper>
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
  marginTop: '-8vw',
  textAlign: 'right',
});

const FlowerContainer = styled('div', {
  position: 'relative',
  marginTop: '-15vw',
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

const TextRevealWrapper = styled('span', {
  overflow: 'hidden',
  position: 'relative',
  display: 'block',
  lineHeight: '1.2',
  marginTop: '-2.8vw',
});

const TextReveal = styled(motion.span, {
  display: 'block',
});
