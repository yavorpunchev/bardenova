import type { NextPage } from 'next';

import SectionParagraph from '../components/SectionParagraph';

const Home: NextPage = () => {
  return (
    <>
      <header>
        <h1>Lilla Bardenova &ndash; designer</h1>
      </header>
      <main>
        <SectionParagraph title="About">
          Multidisciplinary artist &amp; designer specializing in creating
          digital products and experiences with a strong focus on brand and user
          experience
        </SectionParagraph>
        <SectionParagraph title="Currently">
          Leading design in the telco world <a href="https://toku.co/">@Toku</a>
        </SectionParagraph>
        <SectionParagraph title="Previously">
          Facebook, Uber, Snapchat, Bloomberg, Lightricks, Heineken, Voxbone,
          Bandwidth, 7/Eleven, Udemy, Deepcrawl
        </SectionParagraph>
        <SectionParagraph title="Additional info">
          <ul>
            <li>Creative mentor at Skillshare</li>
            <li>Freelance illustrator</li>
            <li>Forever remote (feel free to change my mind)</li>
          </ul>
        </SectionParagraph>
      </main>
      <footer>
        <h3>Get in touch</h3>
        <section>
          <p>
            Freelance project inquiries always welcome. Work samples and resume
            available upon request.
          </p>
          <p>
            <a href="mailto:bardenova@gmail.com">bardenova@gmail.com</a>
            <br />
            <a href="https://instagram.com/">insta</a> |
            <a href="https://youtube.com/">youtube</a> |
            <a href="https://dribbble.com/">dribbble</a> |
            <a href="https://substack.com/">mailing list</a>
          </p>
        </section>
      </footer>
    </>
  );
};

export default Home;
