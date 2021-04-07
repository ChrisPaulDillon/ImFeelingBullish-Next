import { AppContext, AppProps } from 'next/app';
import { NextComponentType } from 'next';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';

export interface ModifiedAppInitialProps<A = { [key in string]: string }> {
  appProps: A;
}

export interface ExtendedAppProps<P = { [key in string]: string }, A = { [key in string]: string }> extends AppProps<P>, ModifiedAppInitialProps<A> {}

const MyApp: NextComponentType<AppContext, ModifiedAppInitialProps, ExtendedAppProps> = ({ Component, pageProps, appProps }) => {
  return (
    <ChakraProvider resetCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

MyApp.getInitialProps = async () => {
  return {
    appProps: {
      /* ...someAppProps */
    },
  };
};

export default MyApp;
