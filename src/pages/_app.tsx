import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Enterprise AI for Business-Critical Decisions | EtaCar Systems</title>
        <meta name='robots' content='index,follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
