import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { getCssText } from '../stitches.config';

const fonts = `
@font-face {
  font-family: 'Leiko';
  font-weight: 400;
  font-display: swap;
  src: url(https://bardenova.b-cdn.net/fonts/Leiko-Regular.woff2) format('woff2');
}
@font-face {
  font-family: 'GT America Mono';
  font-weight: 400;
  font-display: swap;
  src: url(https://bardenova.b-cdn.net/fonts/GT-America-Mono-Regular.woff2) format('woff2');
}
`;

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link href="/images/favicon.ico" rel="icon" />
          <link
            as="font"
            crossOrigin="anonymous"
            href="https://bardenova.b-cdn.net/fonts/Leiko-Regular.woff2"
            rel="preload"
            type="font/woff"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href="https://bardenova.b-cdn.net/fonts/GT-America-Mono-Regular.woff2"
            rel="preload"
            type="font/woff2"
          />
          <style dangerouslySetInnerHTML={{ __html: fonts }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
