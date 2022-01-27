import useMeasure from 'react-use-measure';
import type { NextPage } from 'next';

import { styled } from '../stitches.config';

import Hero from '../components/Hero';
import Body from '../components/Body';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  const [ref, bounds] = useMeasure();
  return (
    <Container css={{ paddingBottom: bounds?.height }}>
      <Hero />
      <Body />
      <FooterWrapper ref={ref}>
        <Footer />
      </FooterWrapper>
    </Container>
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
