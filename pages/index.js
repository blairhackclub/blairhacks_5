import React from 'react';
<<<<<<< HEAD
=======
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
>>>>>>> 98b7484cf2df30a578324a19f0a847461b66f04c

import {
} from '@chakra-ui/react';

import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import Footer from "../components/Footer";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Sponsers from "../components/Sponsers"
import Tracks from "../components/Tracks.js";

import { Element } from 'react-scroll';

export default function Home() {
  return (
    <>
      <Landing />

      <motion.div initial={{ y: 200 }} animate={{ y: 0, scale: [.9, 1.1, 1] }} transition={{ duration: 1 }}>
        <About/>
      </motion.div>

      {/* <Element name="team">
        <Box bg="blue.900">
          <Tracks/>
        </Box>
      </Element> */}

      <Element name="team">
        <Box bg="red.900">
          <Team/>
        </Box>
      </Element>

      <Element name="faq">
          <FAQ/>
      </Element>

      <Element name="sponsors">
        <Box bg="red.900">
          <Sponsers/>
        </Box>
      </Element>

      <Footer logoState={logoState} setLogoState={setLogoState} />
    </>
  );
}
