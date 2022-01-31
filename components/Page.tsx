import Head from 'next/head';
import { useRouter } from 'next/router';

import { BASE_URL } from '../constants';

type PageProps = {
  children: React.ReactNode;
  description?: string;
  title: string;
  twitter?: string;
  url?: string;
};

const Page = ({
  children,
  description,
  title,
  twitter = 'bardenova',
  url = BASE_URL,
}: PageProps) => {
  const router = useRouter();
  const path = router.pathname;
  const image = `${url}/images/og.png`;
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        <meta name="viewport" content="width=device-width" />

        <meta property="og:url" content={`${url}${path}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {twitter && (
          <>
            <meta name="twitter:site" content={`@${twitter}`} />
            <meta name="twitter:card" content="summary_large_image" />
          </>
        )}
      </Head>
      {children}
    </>
  );
};

export default Page;
