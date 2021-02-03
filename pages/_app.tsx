import type { AppProps /*, AppContext */ } from 'next/app'
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';

// css import되는 순서 중요함
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

// css 적용 순서 중요
import '../styles/reset.css';
import '../styles/globals.css';

// components
import FullPageLoader from "../components/common/Loader/FullPageLoader";
import Layout from 'components/layout/layout';

function MyApp({ Component, pageProps }: AppProps) {
  // Loader state
  const [isLoading, setisLoading] = useState(false);

  const router = useRouter();
  // console.log(router);

  // fullpageLoader;
  Router.events.on('routeChangeStart', () => {
    setisLoading(true);
  });
  Router.events.on('routeChangeComplete', () => setisLoading(false));
  Router.events.on('routeChangeError', () => setisLoading(false));

  return (
    <>
      <FullPageLoader isLoading={isLoading} />
      <Head>
        <title>⚡ Fuze</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
