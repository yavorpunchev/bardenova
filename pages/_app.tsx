import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { MotionConfig } from 'framer-motion';

import 'minireset.css/minireset.css';

import { darkTheme, globalStyles } from '../stitches.config';

function Bardenova({ Component, pageProps }: AppProps) {
  globalStyles();

  const theme = {
    light: 'light-theme',
    dark: darkTheme.toString(),
  };

  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
        value={theme}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </MotionConfig>
  );
}

export default Bardenova;
