import React from 'react';

import { styled } from '../stitches.config';
import Line from './Line';
import Link from './Link';
import Paragraph from './Paragraph';

const CLIENTS = [
  'Facebook',
  'Uber',
  'Snapchat',
  'Bloomberg',
  'GoDaddy',
  'OpenPhone',
  'Voxbone',
  'Bandwidth',
  '7-Eleven',
  'Udemy',
  'Deepcrawl',
  'Lightricks',
];

export default function Body(): React.ReactElement {
  return (
    <Main>
      <LineContainer>
        <Line />
      </LineContainer>
      <Text>
        <Paragraph title="About">
          Multidisciplinary artist and designer specializing in creating
          exceptional digital product experiences with a strong focus on brand.
        </Paragraph>
        <Paragraph title="Currently">
          Leading design in the telco world at{' '}
          <Link href="https://toku.co/" target="_blank">
            Toku
          </Link>
          .
        </Paragraph>
        <Paragraph title="Previously">
          {CLIENTS.map((client, index) => (
            <>
              <span key={client}>{client}</span>
              {index + 1 !== CLIENTS.length && <>, </>}
            </>
          ))}
        </Paragraph>
        <Paragraph title="Additional info">
          <ul>
            <li>Freelance illustrator</li>
            <li>
              Creative mentor at{' '}
              <Link href="https://skillshare.com/" target="_blank">
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

const Text = styled('div', {
  paddingTop: '12vw',
  paddingRight: '12vw',
  paddingBottom: '12vw',
  '@start': {
    padding: '$l',
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

const LineContainer = styled('div', {
  marginLeft: '-5px',
  marginBottom: '-5px',
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
