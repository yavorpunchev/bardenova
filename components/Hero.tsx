import { motion } from 'framer-motion';

import Flower from './Flower';
import CheckMyWork from './CheckMyWork';

import { useMedia } from '../utils/hooks';
import { config, styled, transitions } from '../stitches.config';

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

type HeroProps = {
  navigateToProjects: () => void;
};

export default function Hero(props: HeroProps): React.ReactElement {
  const { navigateToProjects } = props;
  const { start, bp1, bp2, bp3 } = config.media;

  const animateOnDesktop = useMedia(
    [start, bp1, bp2, bp3],
    [false, true, true, true],
    true
  );

  return (
    <Header>
      <SvgWrapper>
        <div />
        <FlowerContainer>
          <Flower />
        </FlowerContainer>
        <Button onClick={navigateToProjects} type="button">
          <CheckMyWork />
        </Button>
      </SvgWrapper>
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
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: '$background',
  position: 'relative',
  zIndex: 2,
});

const SvgWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

const Heading = styled('h1', {
  color: '$heading',
  fontFamily: '$serif',
  fontSize: '$heading',
  marginTop: '-8vw',
  textAlign: 'right',

  '@start': {
    marginTop: '$m',
  },
  '@bp1': {
    marginTop: '-4vw',
  },
  '@bp2': {
    marginTop: '-6vw',
  },
  '@bp3': {
    marginTop: '-8vw',
  },
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

const Button = styled('button', {
  color: '$text',
  display: 'block',
  cursor: 'pointer',

  padding: 0,
  border: 'none',
  outline: 'none',
  background: 'none',

  marginRight: '-16px',
  marginTop: '-16px',
  transition: '$smooth',

  svg: {
    fill: 'currentColor',
    display: 'block',
    width: '16vw',
    height: '16vw',
  },

  '@hover': {
    '&:hover': {
      color: '$accent',
      transform: 'scale3d(1.12, 1.12, 1.12)',
    },
    '&:active': {
      color: '$text',
      transform: 'scale3d(1, 1, 1)',
    },
  },
  '@start': {
    marginRight: '-24px',
    marginTop: '-24px',

    svg: {
      width: '38vw',
      height: '38vw',
    },
  },
  '@bp1': {
    marginRight: '-24px',
    marginTop: '-24px',

    svg: {
      width: '32vw',
      height: '32vw',
    },
  },
  '@bp2': {
    marginRight: '-16px',
    marginTop: '-16px',

    svg: {
      width: '24vw',
      height: '24vw',
    },
  },
  '@bp3': {
    marginRight: '-16px',
    marginTop: '-16px',

    svg: {
      width: '16vw',
      height: '16vw',
    },
  },
});
