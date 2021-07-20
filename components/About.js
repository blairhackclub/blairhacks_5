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
    <Box py={{ base: 8, sm: 5 }} mx={4}>
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
          BlairHacks is a 24-hour hackathon hosted annually by <Link href="https://mbhs.edu" isExternal>Montgomery Blair High School</Link> students in Silver Spring, MD. High school students in the DMV area are challenged to bring their innovative ideas to life in the form of websites, apps, and robots. Our hackathon, featuring skill workshops, collaboration, and mentorship, is free and accessible to all high school students thanks to our wonderful sponsors.
        </Text>

        <Text mt={3}>
          The 5th annual BlairHacks will take place in February 2022. Previous BlairHacks have seen tremendous success with over 150 signups and 80 in-person attendees. We're excited for another year of BlairHacks and to continue to spread our love for coding throughout our community!
        </Text>

        <Heading as="h2" size="lg" mt={8}
          fontWeight="semibold"
        >
          Our Mission
        </Heading>
        <Text mt={2}>
          Our Mission at BlairHacks is to share our passion for computer science with high school students across the DMV area. BlairHacks provides an unparalleled environment with resources that empower students to pursue their passions in the tech field and collaborate with like-minded developers. Sponsoring BlairHacks is a incredible opportunity to promote computer science and engineering education and further the movement of student innovators.
        </Text>
      </Container>
    </Box>
  )
}
