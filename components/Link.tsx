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

  variants: {
    color: {
      light: {
        color: '$background',
        '@hover': {
          '&:hover': {
            color: '$background',
            opacity: 0.8,
          },
        },
      },
      dark: {
        color: '$heading',
        '@hover': {
          '&:hover': {
            color: '$text',
          },
        },
      },
    },
  },
});

export default function Link({
  target = '_blank',
  rel = 'noreferrer',
  ...rest
}) {
  return <BaseLink target={target} rel={rel} {...rest} />;
}
