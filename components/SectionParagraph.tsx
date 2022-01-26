import React from 'react';

import { styled } from '../stitches.config';

type SectionParagraphProps = {
  title: string;
  children: React.ReactNode;
};

export default function SectionParagraph({
  title,
  children,
}: SectionParagraphProps): React.ReactElement {
  return (
    <Section>
      <Heading>{title}</Heading>
      <Paragraph>{children}</Paragraph>
    </Section>
  );
}

const Section = styled('section', {
  width: '100%',
  maxWidth: '480px',
  marginBottom: '$l',
  '&:last-child': {
    marginBottom: 0,
  },
});

const Heading = styled('h2', {
  color: '$accent',
  fontFamily: '$serif',
  fontSize: '26px',
  lineHeight: '$heading',
  marginBottom: '$xs',
});

const Paragraph = styled('div', {
  color: '$text',
  fontFamily: '$mono',
  fontSize: '16px',
  lineHeight: '$body',
});
