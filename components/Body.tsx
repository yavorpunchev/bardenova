import React from 'react';
import Line from './Line';
import Link from './Link';
import Paragraph from './Paragraph';

import { styled } from '../stitches.config';
import { CLIENTS, DESCRIPTION, SKILLSHARE_URL } from '../constants';

export default function Body(): React.ReactElement {
  return (
    <Main>
      <LineContainer>
        <Line />
      </LineContainer>
      <Text>
        <Paragraph title="About">{DESCRIPTION}</Paragraph>
        <Paragraph title="Currently">
          Crafting financial services @ Shopify. Drawing things sometimes
        </Paragraph>
        <Paragraph title="Previously">
          {CLIENTS.map((client, index) => (
            <React.Fragment key={client}>
              <span>{client}</span>
              {index + 1 !== CLIENTS.length && <>, </>}
            </React.Fragment>
          ))}
        </Paragraph>
        <Paragraph title="Additional info">
          <ul>
            <li>Freelance illustrator</li>
            <li>
              Creative mentor on{' '}
              <Link color="dark" href={SKILLSHARE_URL}>
                Skillshare
              </Link>
            </li>
            <li>Forever remote &ndash; feel free to change my mind</li>
          </ul>
        </Paragraph>
      </Text>
    </Main>
  );
}

const Main = styled('main', {
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  background: '$background',
  position: 'relative',
  zIndex: 2,
});

const Text = styled('section', {
  paddingTop: '12vw',
  paddingRight: '12vw',
  paddingBottom: '12vw',
  '@start': {
    padding: '$xl',
  },
  '@bp1': {
    padding: '$xxl',
  },
  '@bp2': {
    padding: '$xxxl',
  },
  '@bp3': {
    paddingTop: '12vw',
    paddingRight: '12vw',
    paddingBottom: '12vw',
  },
});

const LineContainer = styled('section', {
  marginLeft: '-6px',
  marginBottom: '-6px',
  svg: {
    width: '50vw',
  },
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
});
