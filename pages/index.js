import React from 'react';

import {
} from '@chakra-ui/react';

import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      
      <Landing/>

      <About/>
      
      {/* FAQ
        What is a hackathon?
        A hackathon is an event where students use technology to solve interesting problems in novel ways in a limited timeframe.
        The most polished and effective hacks receive cool prizes, and all attendees get free swag, food, and a good time!
      */}

      <Footer/>
    </>
  );
}
