import Head from 'next/head';
import useMeasure from 'react-use-measure';
import { useRouter } from 'next/router';

import { BASE_URL, TWITTER_HANDLE } from '../constants';
import { styled } from '../stitches.config';

import Footer from './Footer';

type PageProps = {
  children: React.ReactNode;
  description?: string;
  title: string;
  twitter?: string;
  url?: string;
};

const Page = ({
  children,
  description,
  title,
  twitter = TWITTER_HANDLE,
  url = BASE_URL,
}: PageProps) => {
  const router = useRouter();
  const path = router.pathname;
  const image = `${url}/images/og.png`;

  const [ref, bounds] = useMeasure();
  const padding = {
    paddingBottom: bounds?.height,
    '@start': {
      paddingBottom: 0,
    },
  };

  return (
    <Container css={padding}>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        <meta name="viewport" content="width=device-width" />

        <meta property="og:url" content={`${url}${path}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {twitter && (
          <>
            <meta name="twitter:site" content={`@${twitter}`} />
            <meta name="twitter:card" content="summary_large_image" />
          </>
        )}
      </Head>
      {children}
      <FooterWrapper ref={ref}>
        <Footer />
      </FooterWrapper>
    </Container>
  );
};

const Container = styled('div');

const FooterWrapper = styled('footer', {
  width: '100%',
  position: 'fixed',
  bottom: 0,
  zIndex: '1',
  '@start': {
    position: 'static',
  },
});

export default Page;
