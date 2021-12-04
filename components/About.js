import React from 'react';

import {
  Box,
  Container,
  Heading,
  Text,
} from '@chakra-ui/react';

import Link from "../components/Link";

export default function About() {
  return (
    <Box py={8} mx={4}>
      <Container maxW="container.md" px={8} py={8}
        bg="bg.dark"
        borderRadius="xl"
      >
        <Heading as="h2" size="lg" 
          fontWeight="semibold"
        >
          We're back for BlairHacks_5!
        </Heading>
        <Text mt={3}>
          BlairHacks is a 24-hour hackathon hosted annually by <Link href="https://mbhs.edu" isExternal>MBHS</Link> students in Silver Spring, MD.
          At BlairHacks, high school students in the DMV area are challenged to bring their innovative ideas to life in the form of websites, apps, and robots.
          Our hackathon is free and accessible to all high school students thanks to our wonderful sponsors.
        </Text>

        <Text mt={3}>
          At our previous iteration in 2020, BlairHacks_4 brought together over 80 in-person attendees from 6+ high schools around the DMV.
          We're excited for another year of BlairHacks and to continue to spread our love for coding throughout our community!
        </Text>

        {/*<Heading as="h2" size="lg" mt={8}
          fontWeight="semibold"
        >
          Our mission
        </Heading>
        <Text mt={2}>
          Our mission at BlairHacks is to share our passion for computer science with high school students across the DMV area.
          BlairHacks provides an unparalleled environment with resources that empower students to pursue their passions in the computer science field and collaborate with like-minded developers.
        </Text>*/}

        <Heading as="h2" size="lg" mt={8}
          fontWeight="semibold"
        >
          Hacking is back, in-person!*
        </Heading>
        <Text mt={2}>
          * Due to COVID-19, we aren't able to host an overnight event this year, but don't worry — we will still offer an in-person experience.
          We've decided to host BlairHacks_5 in two portions: a virtual portion and an in-person portion.
        </Text>
        <Text mt={2}>
          The virtual portion will take place on Day 1 and will consist of a few virtual activities starting in the afternoon.
          The in-person portion will be on Day 2 at our facility.
          All attendees are required to attend both portions.
        </Text>
        <Text mt={2}>
          See our live site as the event nears. We will have a more detailed schedule there as well as everything else you'll need to know for attending!
        </Text>
      </Container>
    </Box>
  )
}
