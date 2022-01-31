import type { NextPage } from 'next';

import Body from '../components/Body';
import Hero from '../components/Hero';
import Page from '../components/Page';

const Home: NextPage = () => {
  return (
    <Page
      description="Multidisciplinary artist and designer specializing in creating digital product experiences with a strong focus on brand."
      title="Lilla Bardenova – designer"
    >
      <Hero />
      <Body />
    </Page>
  );
};

export default Home;
