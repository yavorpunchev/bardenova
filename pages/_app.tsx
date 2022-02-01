import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import 'minireset.css/minireset.css';

import { darkTheme, globalStyles } from '../stitches.config';

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
