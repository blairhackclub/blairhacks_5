import React from "react";
import {
  Container,
  Heading,
  Text,
  Image,
  Wrap,
  WrapItem,
  Tooltip,
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

      <Wrap justify="center">
        {sponsors.map(({name, url, img}) => (   
          <WrapItem p = {3} w= "200px" justifyContent="center" alignItems="center">   
            <Tooltip hasArrow label={name}>
              <Box p = {2}>
                <Link href = {url} isExternal>
                  <Image w = "100%" src = {`/assets/sponsorLogos/${img}`}/>
                </Link>  
              </Box>
            </Tooltip>
          </WrapItem>
        ))}
      </Wrap>

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
