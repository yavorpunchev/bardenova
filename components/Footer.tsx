import React from 'react';

import { styled } from '../stitches.config';

import { LightLink } from '../components/Link';

export default function Footer(): React.ReactElement {
  return (
    <Container>
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
          <LightLink href="mailto:bardenova@gmail.com">
            bardenova@gmail.com
          </LightLink>
          <br />
          <LightLink href="https://instagram.com/">instagram</LightLink> |{' '}
          <LightLink href="https://youtube.com/">youtube</LightLink> |{' '}
          <LightLink href="https://dribbble.com/">dribbble</LightLink> |{' '}
          <LightLink href="https://substack.com/">mailing list</LightLink>
        </Paragraph>
      </Section>
    </Container>
  );
}

const Container = styled('footer', {
  color: '$background',
  background: '$accent',
  padding: '10vw',
  '::selection': {
    color: '$accent',
    background: '$background',
  },
});

const Section = styled('section', {
  marginTop: '5vw',
  display: 'flex',
  justifyContent: 'space-between',
});

const Paragraph = styled('p', {
  fontSize: '16px',
  maxWidth: '470px',
  lineHeight: '$body',
  letterSpacing: '-0.4px',
});

const Heading = styled('h3', {
  fontFamily: '$serif',
  fontSize: '$heading',
  lineHeight: '$bigHeading',
});
