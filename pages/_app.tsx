import type { AppProps } from 'next/app';

import 'minireset.css/minireset.css';

function Bardenova({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Bardenova;
