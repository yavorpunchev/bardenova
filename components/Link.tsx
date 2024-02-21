import { styled } from '../stitches.config';
import { darkTheme } from '../stitches.config';

const BaseLink = styled('a', {
  cursor: 'pointer',
  position: 'relative',
  textDecoration: 'none',

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

  '&:focus': {
    outlineStyle: 'dashed',
    outlineColor: 'currentColor',
    outlineWidth: '1px',
    outlineOffset: '6px',
    borderRadius: '1px',
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
        [`.${darkTheme} &`]: {
          color: '$heading',
          '@hover': {
            '&:hover': {
              color: '$heading',
              opacity: 0.8,
            },
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
