import { useTheme } from 'next-themes';

import { styled } from '../stitches.config';
import Link from './Link';

import {
  CONTACT_URL,
  DRIBBBLE_URL,
  INSTAGRAM_URL,
  SUBSTACK_URL,
  TWITTER_URL,
  YOUTUBE_URL,
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
          <Link color="light" href={CONTACT_URL} target="_self">
            Say hi!
          </Link>{' '}
          |{' '}
          <Link color="light" href={SUBSTACK_URL}>
            Newsletter
          </Link>
          <br />
          <Link color="light" href={DRIBBBLE_URL}>
            Dribbble
          </Link>{' '}
          |{' '}
          <Link color="light" href={TWITTER_URL}>
            Twitter
          </Link>{' '}
          |{' '}
          <Link color="light" href={INSTAGRAM_URL}>
            Instagram
          </Link>{' '}
          |{' '}
          <Link color="light" href={YOUTUBE_URL}>
            YouTube
          </Link>
        </Paragraph>
      </Section>
    </FooterContainer>
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
    marginBottom: '$xl',
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
