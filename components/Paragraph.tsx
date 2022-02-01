import { styled } from '../stitches.config';

type ParagraphProps = {
  title: string;
  children: React.ReactNode;
};

export default function Paragraph({
  title,
  children,
}: ParagraphProps): React.ReactElement {
  return (
    <Section>
      <Heading>{title}</Heading>
      <Text>{children}</Text>
    </Section>
  );
}

const Section = styled('section', {
  width: '100%',
  maxWidth: '480px',
  marginBottom: '$xl',
  '@start': {
    marginBottom: '$l',
  },
  '&:last-child': {
    marginBottom: 0,
  },
});

const Heading = styled('h2', {
  color: '$heading',
  fontFamily: '$serif',
  fontSize: '26px',
  lineHeight: '$heading',
  marginBottom: '$xs',
});

const Text = styled('div', {
  color: '$text',
  fontFamily: '$mono',
  fontSize: '16px',
  lineHeight: '$body',
  letterSpacing: '-0.4px',
});
