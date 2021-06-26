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
    <Box py={{ base: 8, sm: 20 }} mx={4}>
      <Container maxW="container.md" px={8} py={10}
        bg="bg.dark"
        borderRadius="xl"
      >
        <Heading as="h2" size="lg" 
          fontWeight="semibold"
        >
          What is BlairHacks?
        </Heading>
        <Text mt={3}>
          BlairHacks is <Link href="https://mbhs.edu" isExternal>Montgomery Blair</Link>'s premier high-school hackathon. Each year, Blair students come together to host this free-to-attend hackathon to all high-school students in the DMV area.
        </Text>
        <Text mt={3}>
          We're back for our 5th annual BlairHacks! Under the <i>Blair Engineers' Guild</i>, the previous BlairHacks events have seen tremendous success with over 150 signups and 80 in-person attendees. As the new organizers of the upcoming <i>Blair Hack Club</i>, we can't wait to continue this amazing tradition for DMV high schoolers.
        </Text>

        <Heading as="h2" size="lg" mt={8}
          fontWeight="semibold"
        >
          Our Mission
        </Heading>
        <Text mt={2}>
          Our goal for BlairHacks is to share our interest in CS and tech with high schoolers all around the DMV area. We've prepared an event with an environment and resources that most schools don't provide, where people can come together and create amazing things with code and technology. Our mission is to help everyone, no matter their experience or background, learn and be able to engage and participate in the CS community.
        </Text>
      </Container>
    </Box>
  )
}
