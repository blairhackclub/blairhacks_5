import React from "react";
import {
  Container,
  Heading,
  Text,
  Image,
  Flex,
  Box
} from "@chakra-ui/react";

import Button from "./Button";
import Link from "./Link";
import sponsors from '../data/sponsors';

export default function Sponsors() {
  return (
    <Container maxW="container.lg" px={8} py={4} align="center">
      <Heading as="h2" size="xl">
        Sponsors
      </Heading>

      <Flex flexWrap>
        {sponsors.map(({name, url, img}) => (
          <Box p = {10}>
            <Link href = {url} isExternal>
              <Image width = "200px" src = {`/assets/sponsorLogos/${img}`}/>
            </Link>
          </Box>
        ))}
      </Flex>

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
