import React from "react";
import {
  Container,
  Heading,
  Text
} from "@chakra-ui/react";

export default function FAQ() {
  return (
    <Container maxW="container.lg" px={8} py={12}>
      <Heading as="h2" size="xl" align="center">
        FAQ
      </Heading>
      <Text mt={3}>Coming soon</Text>
    </Container>
  );
}
