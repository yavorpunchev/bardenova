import useMeasure from 'react-use-measure';
import type { NextPage } from 'next';

import { styled } from '../stitches.config';

import Body from '../components/Body';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Page from '../components/Page';

const Home: NextPage = () => {
  const [ref, bounds] = useMeasure();
  return (
    <Page
      description="Multidisciplinary artist and designer specializing in creating digital product experiences with a strong focus on brand."
      title="Lilla Bardenova – designer"
    >
      <Container css={{ paddingBottom: bounds?.height }}>
        <Hero />
        <Body />
        <FooterWrapper ref={ref}>
          <Footer />
        </FooterWrapper>
      </Container>
    </Page>
  );
};

const Container = styled('div', {});

const FooterWrapper = styled('div', {
  width: '100%',
  position: 'fixed',
  bottom: 0,
  zIndex: '1',
});

export default Home;
