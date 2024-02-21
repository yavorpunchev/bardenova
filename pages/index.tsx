import { useRouter } from 'next/router';
import { useState } from 'react';
import type { NextPage } from 'next';

import Body from '../components/Body';
import Conceal from '../components/Conceal';
import Hero from '../components/Hero';
import Page from '../components/Page';
import Reveal from '../components/Reveal';

import { TITLE, DESCRIPTION } from '../constants';

const Home: NextPage = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  const navigateToProjects = () => {
    setIsNavigating(true);
    setTimeout(() => {
      router.push('/projects', undefined, { shallow: true });
    }, 750);
  };

  return (
    <Page description={DESCRIPTION} title={TITLE}>
      <Hero navigateToProjects={navigateToProjects} />
      <Body navigateToProjects={navigateToProjects} />
      <Reveal />
      {isNavigating && <Conceal />}
    </Page>
  );
};

export default Home;
