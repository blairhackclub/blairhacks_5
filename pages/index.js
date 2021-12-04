import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Sponsors from "../components/Sponsors"
import GetInvolved from "../components/GetInvolved.js";

import { Element } from 'react-scroll';

export default function Home() {
  return (
    <>
      <Navbar/>

      <Element name="home">
        <Landing />
      </Element>

      <Element name="about">
        <About/>
      </Element>

      <Element name="getinvolved">
        <GetInvolved/>
      </Element>

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
