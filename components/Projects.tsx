import React from 'react';

import Image from 'next/image';
import { styled } from '../stitches.config';
import { PROJECTS } from '../constants';

import Flower from './Flower';

export default function ProjectsGrid(): React.ReactElement {
  return (
    <Main>
      <Grid>
        {PROJECTS.map(project => (
          <Item key={project.path}>
            {project.flower ? (
              <FlowerWrapper>
                <Flower />
              </FlowerWrapper>
            ) : (
              <>
                <Image
                  width={400}
                  height={400}
                  alt="placeholder"
                  layout="responsive"
                  src={project.path}
                />
                <Text>
                  Client: {project.client}
                  <br />
                  Focus: {project.focus}
                </Text>
              </>
            )}
          </Item>
        ))}
      </Grid>
    </Main>
  );
}

const Main = styled('main', {
  paddingTop: '$xxxl',
  paddingBottom: '$xxxl',
  background: '$background',
  position: 'relative',
  zIndex: 2,
});

const Grid = styled('div', {
  maxWidth: 1296,
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',

  display: 'grid',
  gridGap: '$xl',
  gridTemplateColumns: '1fr 1fr 1fr',

  gridRow: 'row-2-start / row-end',
  gridColumn: 'col-2-start / col-end',

  gridRowStart: 'row-2-start',
  gridRowEnd: 'row-end',
  gridColumnStart: 'col-2-start',
  gridColumnEnd: 'col-end',
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

const FlowerWrapper = styled('div', {
  svg: {
    width: '140%',
    color: '$accent',
    marginLeft: '-40%',
  },
});
