import "../styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";

import { Box } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BlairHacks_6</title>
        <link rel="icon" href="/favicon.ico" />
        
        <meta name="description" content="A free, 24-hour hackathon for DMV high school students hosted annually by MBHS students in Silver Spring, MD. Join us for BlairHacks_5 in February 2022!"/>
        <meta property="og:description" content="A free, 24-hour hackathon for DMV high school students hosted annually by MBHS students in Silver Spring, MD. Join us for BlairHacks_5 in February 2022!" key="ogdesc"/>
        <meta property="og:image" content="/assets/logo.png" key="ogimage"/>
        <meta property="og:title" content="BlairHacks_5" key="ogtitle"/>
        <meta property="og:site_name" content="BlairHacks" key="ogsitename"/>
        <meta name='theme-color' content="#141414"/>
      </Head>

      <ChakraProvider theme={theme} resetCSS>
        <Box minH="100vh" bg="bg.extradark">
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
