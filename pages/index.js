import React from 'react';
import { Box } from '@chakra-ui/react';

import Landing from "../components/Landing";
import Team from "../components/Team";
import Footer from "../components/Footer";

export default function Home() {
  const [logoState, setLogoState] = React.useState("rest");

  return (
    <>
      <Landing logoState = {logoState} setLogoState = {setLogoState} />
      <Box bg="blue.700">
        <Team />
      </Box>
      <Footer logoState={logoState} setLogoState={setLogoState} />

    </>
  );
}
