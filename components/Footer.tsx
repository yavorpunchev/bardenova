import Link from './Link';
import { styled, darkTheme } from '../stitches.config';

import {
  CONTACT_URL,
  DRIBBBLE_URL,
  INSTAGRAM_URL,
  SUBSTACK_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from '../constants';

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
          <LinkWrapper>
            <Link color="light" href={CONTACT_URL} target="_self">
              Say hi
            </Link>
            <Span> | </Span>
          </LinkWrapper>
          <LinkWrapper>
            <Link color="light" href={SUBSTACK_URL}>
              Newsletter
            </Link>
          </LinkWrapper>
          <Br />
          <LinkWrapper>
            <Link color="light" href={DRIBBBLE_URL}>
              Dribbble
            </Link>
            <Span> | </Span>
          </LinkWrapper>
          <LinkWrapper>
            <Link color="light" href={TWITTER_URL}>
              Twitter
            </Link>
            <Span> | </Span>
          </LinkWrapper>
          <LinkWrapper>
            <Link color="light" href={INSTAGRAM_URL}>
              Instagram
            </Link>
            <Span> | </Span>
          </LinkWrapper>
          <LinkWrapper>
            <Link color="light" href={YOUTUBE_URL}>
              YouTube
            </Link>
          </LinkWrapper>
        </Paragraph>
      </Section>
    </Container>
  );
}

const Container = styled('div', {
  padding: '10vw',
  position: 'relative',
  '@start': {
    padding: '$xl',
  },
  '@bp2': {
    flexDirection: '10vw',
  },

  color: '$background',
  background: '$accent',

  '::selection': {
    color: '$accent',
    background: '$background',
  },

  [`.${darkTheme} &`]: {
    color: '$heading',
    background: '$accent',
    '::selection': {
      color: '$accent',
      background: '$heading',
    },
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
    marginBottom: '$xl',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  '@bp2': {
    marginBottom: '$xl',
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

const Br = styled('br', {
  '@start': {
    display: 'none',
  },
  '@bp1': {
    display: 'none',
  },
  '@bp2': {
    display: 'block',
  },
});

const Span = styled('span', {
  '@start': {
    display: 'none',
  },
  '@bp1': {
    display: 'none',
  },
  '@bp2': {
    display: 'inline',
  },
});

const LinkWrapper = styled('span', {
  '@start': {
    display: 'inline-block',
    marginRight: '$s',
  },
  '@bp1': {
    display: 'inline-block',
    marginRight: '$s',
  },
  '@bp2': {
    display: 'inline',
  },
});
