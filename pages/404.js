import React from 'react';

import { motion } from 'framer-motion';

import {
  Container,
  Flex,
  Text,
  Heading,
  Button,
  Image,
} from '@chakra-ui/react';

import Link from '../components/Link';

export default function Custom404() {
  return (
    <Flex minH="100vh" justify="center" align="center">
      <Container 
        maxW="container.md" p={8}
        align="center"
      >
        <Image src="/assets/logo.png" w="64px"/>
        <Heading as="h1" size="xl" mt={2}>404!</Heading>
        <Text size="lg">We couldn't find that page.</Text>
        <Link href="/" noUnderline>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button mt={4} size="sm">Go home</Button>
          </motion.button>
        </Link>
      </Container>
    </Flex>
  );
}
