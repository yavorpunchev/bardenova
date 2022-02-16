import { motion } from 'framer-motion';
import { styled, transitions } from '../stitches.config';

const transition = {
  ease: transitions.smooth,
  duration: 0.75,
  delay: 0.15,
};

const slideBottomToTopTransition = {
  initial: { y: '100%' },
  animate: { y: 0 },
  exit: { y: 0 },
  transition,
};

export default function Conceal(): React.ReactElement {
  return <Container key="conceal" {...slideBottomToTopTransition} />;
}

const Container = styled(motion.div, {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 3,
  width: '100%',
  height: '100%',
  background: '$accent',
  '@start': {
    display: 'none',
  },
});
