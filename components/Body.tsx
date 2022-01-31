import React from 'react';

import { styled } from '../stitches.config';
import SectionParagraph from './SectionParagraph';
import Link from './Link';
import Line from './Line';

const CLIENTS = [
  'Facebook',
  'Uber',
  'Snapchat',
  'Bloomberg',
  'Lightricks',
  'OpenPhone',
  'Voxbone',
  'Bandwidth',
  '7-Eleven',
  'Udemy',
  'Deepcrawl',
];

export default function Body(): React.ReactElement {
  return (
    <Main>
      <LineContainer>
        <Line />
      </LineContainer>
      <Text>
        <SectionParagraph title="About">
          Multidisciplinary artist and designer specializing in creating
          exceptional digital product experiences with a strong focus on brand.
        </SectionParagraph>
        <SectionParagraph title="Currently">
          Leading design in the telco world{' '}
          <Link href="https://toku.co/">@Toku</Link>.
        </SectionParagraph>
        <SectionParagraph title="Previously">
          {CLIENTS.map((client, index) => (
            <>
              <Link key={client} href="#">
                {client}
              </Link>
              {index + 1 !== CLIENTS.length && <>, </>}
            </>
          ))}
        </SectionParagraph>
        <SectionParagraph title="Additional info">
          <ul>
            <li>Freelance illustrator</li>
            <li>
              Creative mentor at{' '}
              <Link href="https://skillshare.com/">Skillshare</Link>
            </li>
            <li>Forever remote &ndash; feel free to change my mind</li>
          </ul>
        </SectionParagraph>
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
  paddingRight: '15vw',
  paddingTop: '15vw',
  paddingBottom: '15vw',
});

const LineContainer = styled('div', {
  marginLeft: '-5px',
  marginBottom: '-5px',
  svg: {
    width: '50vw',
  },
});
