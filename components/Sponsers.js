import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import Link from "./Link";

export default function Sponsers() {
  return (
    <Container maxW="container.md" px={8} pt={6} pb={2}>
      <Heading as="h1" size="2xl" mt={2} align="center">
        Sponsers & Partners
      </Heading>
      <Text mt={12}>
				We are currently open to sponsors! Email us at <Link href = "mailto:team@blairhacks.com">team@blairhacks.com</Link>.
			</Text>
    </Container>
  );
}
