import { ChakraProvider } from '@chakra-ui/react';
import { MantineProvider, createTheme } from '@mantine/core';
import { QueryClientProvider } from '@tanstack/react-query';
import { NextComponentType } from 'next';
import { AppContext, AppProps } from 'next/app';
import { queryClient } from '../api/queryClient';
import customTheme from '../chakra';
import Layout from '../components/layout/Layout';

export interface ModifiedAppInitialProps<A = { [key in string]: string }> {
  appProps: A;
}

export interface ExtendedAppProps<P = { [key in string]: string }, A = { [key in string]: string }> extends AppProps<P>, ModifiedAppInitialProps<A> {}

const theme = createTheme({
  /** Put your mantine theme override here */
});

const MyApp: NextComponentType<AppContext, ModifiedAppInitialProps, ExtendedAppProps> = ({ Component, pageProps, appProps }) => {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </QueryClientProvider>
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
