import type { NextPage } from 'next';

import Hero from '../components/Hero';
import Body from '../components/Body';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Body />
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
