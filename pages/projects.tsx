import type { NextPage } from 'next';

import ProjectsGrid from '../components/Projects';
import Page from '../components/Page';
import { TITLE, DESCRIPTION } from '../constants';

const Projects: NextPage = () => {
  return (
    <Page description={DESCRIPTION} title={`Projects | ${TITLE}`}>
      <ProjectsGrid />
    </Page>
  );
};

export default Projects;
