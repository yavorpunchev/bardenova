import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { CDN_BASE_URL } from '../constants';
import { getCssText } from '../stitches.config';

const fonts = `
@font-face {
  font-family: 'Leiko';
  font-weight: 400;
  font-display: swap;
  src: url(${CDN_BASE_URL}/fonts/Leiko-Regular.woff2) format('woff2'), url(${CDN_BASE_URL}/fonts/Leiko-Regular.woff) format('woff');
}
@font-face {
  font-family: 'GT America Mono';
  font-weight: 400;
  font-display: swap;
  src: url(${CDN_BASE_URL}/fonts/GT-America-Mono-Regular.woff2) format('woff2'), url(${CDN_BASE_URL}/fonts/GT-America-Mono-Regular.woff) format('woff');
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
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link
            as="font"
            crossOrigin="anonymous"
            href={`${CDN_BASE_URL}/fonts/Leiko-Regular.woff`}
            rel="preload"
            type="font/woff"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href={`${CDN_BASE_URL}/fonts/Leiko-Regular.woff2`}
            rel="preload"
            type="font/woff2"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href={`${CDN_BASE_URL}/fonts/GT-America-Mono-Regular.woff`}
            rel="preload"
            type="font/woff"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href={`${CDN_BASE_URL}/fonts/GT-America-Mono-Regular.woff2`}
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
