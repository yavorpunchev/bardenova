import { createStitches } from '@stitches/react';

const breakpoints = {
  1: '480px',
  2: '768px',
  3: '1024px',
  4: '1280px',
};

export const transitions = {
  smooth: [0.23, 1, 0.32, 1],
};

const colors = {
  accent: '#260590',
  background: '#EFEEE8',
  text: '#030320',
};

const stitches = createStitches({
  theme: {
    colors: {
      ...colors,
      heading: colors.accent,
    },
    fonts: {
      serif: '"Leiko", Cambria, Georgia, serif',
      mono: '"GT America Mono", "SF Mono", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',
    },
    space: {
      xxxs: '2px',
      xxs: '4px',
      xs: '8px',
      s: '16px',
      m: '24px',
      l: '32px',
      xl: '48px',
      xxl: '64px',
      xxxl: '80px',
    },
    fontSizes: {
      heading: 'calc(56px + (200 - 56) * ((100vw - 320px) / (1680 - 320)))',
    },
    fontWeights: {
      regular: 400,
    },
    lineHeights: {
      bigHeading: 0.95,
      base: 1,
      heading: 1.1,
      body: 1.6,
    },
    transitions: {
      smooth: `all 300ms cubic-bezier(${transitions.smooth.toString()})`,
    },
  },
  media: {
    start: `(min-width: 0px) and (max-width: ${breakpoints[1]})`,
    bp1: `(min-width: ${breakpoints[1]}) and (max-width: ${breakpoints[2]})`,
    bp2: `(min-width: ${breakpoints[2]}) and (max-width: ${breakpoints[3]})`,
    bp3: `(min-width: ${breakpoints[4]})`,
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
});

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = stitches;

export const darkTheme = createTheme('dark-theme', {
  colors: {
    accent: colors.accent,
    background: colors.text,
    heading: colors.background,
    text: '#A8A7AC', // 70% colors.background on colors.text
  },
});

export const globalStyles = globalCss({
  body: {
    color: '$text',
    background: '$accent',
    fontFamily: '$mono',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
    '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
    '@start': {
      background: '$background',
    },
  },
  '::selection': {
    color: '$background',
    background: '$accent',
  },
});
