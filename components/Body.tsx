import React from 'react';

import { styled } from '../stitches.config';
import SectionParagraph from './SectionParagraph';
import Link from './Link';

export default function Body(): React.ReactElement {
  return (
    <Main>
      <SectionParagraph title="About">
        Multidisciplinary artist &amp; designer specializing in creating digital
        products and experiences with a strong focus on brand and user
        experience
      </SectionParagraph>
      <SectionParagraph title="Currently">
        Leading design in the telco world{' '}
        <Link href="https://toku.co/">@Toku</Link>
      </SectionParagraph>
      <SectionParagraph title="Previously">
        Facebook, Uber, Snapchat, Bloomberg, Lightricks, Heineken, Voxbone,
        Bandwidth, 7-Eleven, Udemy, Deepcrawl
      </SectionParagraph>
      <SectionParagraph title="Additional info">
        <ul>
          <li>
            Creative mentor at{' '}
            <Link href="https://skillshare.com/">Skillshare</Link>
          </li>
          <li>Freelance illustrator</li>
          <li>Forever remote &ndash; feel free to change my mind</li>
        </ul>
      </SectionParagraph>
    </Main>
  );
}

const Main = styled('main', {
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  paddingRight: '15vw',
  paddingBottom: '15vw',
  background: '$background',
  position: 'relative',
  zIndex: 2,
});
