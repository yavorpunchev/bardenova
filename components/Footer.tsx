import React from 'react';
import { useTheme } from 'next-themes';

import { styled } from '../stitches.config';
import { LightLink } from '../components/Link';

import {
  CONTACT_URL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  DRIBBBLE_URL,
  SUBSTACK_URL,
} from '../constants';

export default function Footer(): React.ReactElement {
  const { systemTheme } = useTheme();
  const FooterContainer =
    systemTheme === 'dark' ? DarkContainer : LightContainer;
  return (
    <FooterContainer>
      <Heading>
        Get in <br />
        touch
      </Heading>
      <Section>
        <Paragraph>
          Freelance project inquiries always welcome. Work samples and resume
          available upon request.
        </Paragraph>
        <Paragraph>
          <LightLink href={CONTACT_URL}>Say hi!</LightLink>
          <br />
          <LightLink href={INSTAGRAM_URL} target="_blank">
            Instagram
          </LightLink>{' '}
          |{' '}
          <LightLink href={YOUTUBE_URL} target="_blank">
            YouTube
          </LightLink>{' '}
          |{' '}
          <LightLink href={DRIBBBLE_URL} target="_blank">
            Dribbble
          </LightLink>{' '}
          |{' '}
          <LightLink href={SUBSTACK_URL} target="_blank">
            Newsletter
          </LightLink>
        </Paragraph>
      </Section>
    </FooterContainer>
  );
}

const Container = styled('footer', {
  padding: '10vw',
});

const LightContainer = styled(Container, {
  color: '$background',
  background: '$accent',
  '::selection': {
    color: '$accent',
    background: '$background',
  },
});

const DarkContainer = styled(Container, {
  color: '$heading',
  background: '$accent',
  '::selection': {
    color: '$accent',
    background: '$heading',
  },
});

const Section = styled('section', {
  marginTop: '5vw',
  display: 'flex',
  justifyContent: 'space-between',
  '@start': {
    flexDirection: 'column',
  },
  '@bp1': {
    flexDirection: 'column',
  },
  '@bp2': {
    flexDirection: 'column',
  },
});

const Paragraph = styled('p', {
  fontSize: '16px',
  maxWidth: '450px',
  lineHeight: '$body',
  letterSpacing: '-0.4px',
  '@start': {
    marginBottom: '$l',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  '@bp1': {
    marginBottom: '$l',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  '@bp2': {
    marginBottom: '$l',
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

const Heading = styled('h3', {
  fontFamily: '$serif',
  fontSize: '$heading',
  lineHeight: '$bigHeading',
});
