import React from 'react';

import { styled } from '../stitches.config';

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
          <a href="mailto:bardenova@gmail.com">bardenova@gmail.com</a>
          <br />
          <a href="https://instagram.com/">insta</a> |
          <a href="https://youtube.com/">youtube</a> |
          <a href="https://dribbble.com/">dribbble</a> |
          <a href="https://substack.com/">mailing list</a>
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
});

const Heading = styled('h3', {
  fontFamily: '$serif',
  fontSize: '$heading',
  lineHeight: '$bigHeading',
});
