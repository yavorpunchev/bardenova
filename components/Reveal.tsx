import { motion } from 'framer-motion';
import { styled, transitions } from '../stitches.config';

const transition = {
  ease: transitions.smooth,
  duration: 0.75,
  delay: 0.75,
};

const slideBottomToTopTransition = {
  initial: { y: 0 },
  animate: { y: '-100%' },
  exit: { y: '-100%' },
  transition,
};

export default function Reveal(): React.ReactElement {
  return <Container key="reveal" {...slideBottomToTopTransition} />;
}

const Container = styled(motion.div, {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2,
  width: '100%',
  height: '100%',
  background: '$accent',
  '@start': {
    display: 'none',
  },
});
