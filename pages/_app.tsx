import type { AppProps } from 'next/app';

import 'minireset.css/minireset.css';

import { globalCss } from '../stitches.config';

const globalStyles = globalCss({
  body: {
    color: '$text',
    background: '$accent',
    fontFamily: '$mono',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
    '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
  },
  '::selection': {
    color: '$background',
    background: '$accent',
  },
});

function Bardenova({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default Bardenova;
