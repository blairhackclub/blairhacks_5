import React from "react";
import {
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";

import Button from "./Button";
import Link from "./Link";

export default function Sponsors() {
  return (
    <Container maxW="container.lg" px={8} py={12} align="center">
      <Heading as="h2" size="xl">
        Sponsors
      </Heading>
      <Text mt={3}>
				Help us make this hackathon possible! Email us at <Link href="mailto:team@blairhacks.com">team@blairhacks.com</Link>.
			</Text>

      <Button mt={6}
        bgGradient="linear(to-tl,yellow.500,teal.500)"
        _hover={{
          bgGradient: "linear(to-tl,yellow.500,teal.500)",
        }}
        _active={{
          bgGradient: "linear(to-tl,yellow.500,teal.500)",
        }}
      >View our Sponsorship Package</Button>
    </Container>
  );
}
