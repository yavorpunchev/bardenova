import React from 'react';

import Image from 'next/image';
import { styled } from '../stitches.config';
import { PROJECTS } from '../constants';

import Flower from './Flower';

export default function ProjectsGrid(): React.ReactElement {
  return (
    <Main>
      <Grid>
        {PROJECTS.map(project =>
          project.flower ? (
            <FlowerWrapper key={project.id}>
              <Flower />
            </FlowerWrapper>
          ) : (
            <Item key={project.id}>
              {project.type === 'image' && (
                <Image
                  width={400}
                  height={400}
                  alt="placeholder"
                  layout="responsive"
                  src={project.path}
                />
              )}
              {project.type === 'video' && (
                <Video
                  autoPlay
                  loop
                  playsInline
                  poster={project.poster}
                  src={project.path}
                />
              )}
              <Text>
                Client: {project.client}
                <br />
                Focus: {project.focus}
              </Text>
            </Item>
          )
        )}
      </Grid>
    </Main>
  );
}

const Main = styled('main', {
  background: '$background',
  position: 'relative',
  zIndex: 2,

  paddingTop: '$xxxl',
  paddingBottom: '$xxxl',

  paddingLeft: '$xl',
  paddingRight: '$xl',

  '@start': {
    paddingTop: '$xl',
    paddingBottom: '$xl',
  },
  '@bp1': {
    paddingTop: '$xl',
    paddingBottom: '$xl',
  },
  '@bp2': {
    paddingTop: '$xl',
    paddingBottom: '$xl',
  },
  '@bp3': {
    paddingTop: '$xxxl',
    paddingBottom: '$xxxl',
  },
});

const Grid = styled('div', {
  maxWidth: 1680,
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',

  display: 'grid',
  gridGap: '$xl',
  gridTemplateColumns: '1fr 1fr 1fr',

  '@start': {
    gridTemplateColumns: '1fr',
  },
  '@bp1': {
    gridTemplateColumns: '1fr',
  },
  '@bp2': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@bp3': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
});

const Item = styled('div', {
  width: '100%',
});

const Text = styled('p', {
  color: '$text',
  fontFamily: '$mono',
  fontSize: '14px',
  lineHeight: '$body',
  letterSpacing: '-0.4px',
  marginTop: '$s',
});

const Video = styled('video', {
  width: '100%',
  height: 'auto',
  display: 'block',
});

const FlowerWrapper = styled('div', {
  '@start': {
    display: 'none',
  },
  '@bp1': {
    display: 'none',
  },
  '@bp2': {
    display: 'none',
  },
  '@bp3': {
    display: 'block',
  },
  svg: {
    width: '140%',
    color: '$accent',
    marginLeft: '-40%',
  },
});
