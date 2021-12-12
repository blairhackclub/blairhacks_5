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
    <Container maxW="container.lg" px={8} py={4} align="center">
      <Heading as="h2" size="xl">
        Sponsors
      </Heading>
      <Text mt={3}>
				Help us make this hackathon possible! Email us at <Link href="mailto:team@blairhacks.com">team@blairhacks.com</Link>.
			</Text>

      <Link href = "/assets/Blairhacks_5 Sponsorship Package.pdf" textColor = "white">
        <Button mt={6}
          colorScheme="green"
          variant="outline"
        >View our Sponsorship Package
        </Button>
      </Link>
    </Container>
  );
}
