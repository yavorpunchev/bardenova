import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import 'minireset.css/minireset.css';

import { darkTheme, globalCss } from '../stitches.config';

const globalStyles = globalCss({
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

function Bardenova({ Component, pageProps }: AppProps) {
  globalStyles();

  const theme = {
    light: 'light-theme',
    dark: darkTheme.toString(),
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      value={theme}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Bardenova;
