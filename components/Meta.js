import Head from 'next/head';
const Meta = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta property='og:type' content='website' />
    <meta name='og:title' property='og:title' content='' />
    <meta name='og:description' property='og:description' content='' />
    <meta property='og:site_name' content='' />
    <meta property='og:url' content='' />
    <link rel='canonical' href='' />
  </Head>
);
export default Meta;
