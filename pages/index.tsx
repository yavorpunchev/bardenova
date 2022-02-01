import type { NextPage } from 'next';

import Body from '../components/Body';
import Hero from '../components/Hero';
import Page from '../components/Page';
import Reveal from '../components/Reveal';

import { DESCRIPTION } from '../constants';

const Home: NextPage = () => {
  return (
    <Page description={DESCRIPTION} title="Lilla Bardenova — designer">
      <Hero />
      <Body />
      <Reveal />
    </Page>
  );
};

export default Home;
