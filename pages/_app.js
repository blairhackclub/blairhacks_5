import '../styles/globals.css';
import Head from 'next/head';
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../lib/theme';

import {
  Box,
} from '@chakra-ui/react';

import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BlairHacks_5</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ChakraProvider theme={theme} resetCSS>
        <Box minH="100vh" bg="bg.dark">
          <Navbar/>
          <Component {...pageProps}/>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default MyApp;