import React from 'react';

import { motion } from "framer-motion";

import {
  Container,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';

import Link from '../components/Link';
import Em from '../components/Em';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Container 
        maxW="container.md" px={8} pt={16} pb={2}
      >
        <Box align="center">
          <motion.img
            src="/assets/logo.png" width="128px"
            whileHover={{ rotate: 8 }}
            whileTap={{ rotate: 180 }}
          />

          <motion.div 
            animate={{
              scale: [.9, 1.1, 1],
              rotate: [0, -4, 0],
            }}
          >
            <Heading as="h1" size="2xl" mt={2}>BlairHacks_5</Heading>
          </motion.div>
          <Text mt={2}>
            51 University Blvd E, Silver Spring, MD ~ <Em noBold>February 18-19, 2022</Em>
          </Text>
        </Box>

        <Text mt={12}>
          BlairHacks is a free, 24-hour hackathon hosted annually at MBHS for DMV high school students, featuring skill workshops, fun mini-events, and experienced mentors.
        </Text>
        
        <Heading as="h2" size="md" fontWeight="semibold" mt={8}>What is a hackathon?</Heading>
        <Text mt={2}>
          A hackathon is an event where students use technology to solve interesting problems in novel ways in a limited timeframe.
          The most polished and effective hacks receive cool prizes, and all attendees get free swag, food, and a good time!
        </Text>
        
        <Heading as="h2" size="md" fontWeight="semibold" mt={8}>Registration</Heading>
        <Text mt={2}>
          Registration will start late January 2022. Stay tuned!
        </Text>
        
        <Heading as="h2" size="md" fontWeight="semibold" mt={8}>Sponsors</Heading>
        <Text mt={2}>
          We are currently open to sponsors! Email us at <Link href="mailto:blairhacks@gmail.com">blairhacks@gmail.com</Link>.
        </Text>
      </Container>
      
      <Footer/>
    </>
  );
}
