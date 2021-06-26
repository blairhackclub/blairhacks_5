import React from 'react';

import {
  Container,
  Flex,
  Text,
  Heading,
  Image,
} from '@chakra-ui/react';

import Button from "../components/Button";
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
          <Button mt={4} size="sm">Go home</Button>
        </Link>
      </Container>
    </Flex>
  );
}
