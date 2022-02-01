import { styled } from '../stitches.config';

const BaseLink = styled('a', {
  textDecoration: 'none',
  position: 'relative',
  '&:before': {
    width: '100%',
    height: '1px',
    display: 'block',
    pointerEvents: 'none',
    background: 'currentColor',

    content: '""',
    position: 'absolute',
    top: '100%',
    left: '0',

    transformOrigin: '0% 50%',
    transform: 'scale3d(1, 1, 1)',
    transition: 'color, opacity, transform 300ms',
  },
  '@hover': {
    '&:hover': {
      '&:before': {
        transformOrigin: '100% 50%',
        transform: 'scale3d(0, 1, 1)',
      },
    },
  },
});

const Link = styled(BaseLink, {
  color: '$heading',
  '@hover': {
    '&:hover': {
      color: '$text',
    },
  },
});

const LightLink = styled(BaseLink, {
  color: '$background',
  '@hover': {
    '&:hover': {
      color: '$background',
      opacity: 0.8,
    },
  },
});

export { LightLink };
export default Link;
