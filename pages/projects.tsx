import type { NextPage } from 'next';

import ProjectsGrid from '../components/Projects';
import Page from '../components/Page';
import Reveal from '../components/Reveal';
import { TITLE, DESCRIPTION } from '../constants';

const Projects: NextPage = () => {
  return (
    <Page description={DESCRIPTION} title={`Projects | ${TITLE}`}>
      <ProjectsGrid />
      <Reveal />
    </Page>
  );
};

export default Projects;
