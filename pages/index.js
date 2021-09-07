import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import {
} from '@chakra-ui/react';

import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import Footer from "../components/Footer";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Sponsors from "../components/Sponsors"
import Tracks from "../components/Tracks.js";

import { Element } from 'react-scroll';

export default function Home() {
  return (
    <>
      <Navbar/>

      <Landing />

      <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1}} transition={{ duration: 1 }}>
        <Element name="about">
          <About/>
        </Element>
      </motion.div>

      {/*
      <Element name="tracks">
        <Tracks/>
      </Element>
      */}

      {/*
      <Element name="team">
        <Team/>
      </Element>
      */}

      <Element name="faq">
        <FAQ/>
      </Element>

      <Element name="sponsors">
        <Sponsors/>
      </Element>

      <Footer/>
    </>
  );
}
