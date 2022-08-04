import React from "react";
import {
  Container,
  Heading,
  Text,
  Image,
  Wrap,
  WrapItem,
  Tooltip,
  Box,
  ModalContent
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Button from "./Button";
import Link from "./Link";
import sponsors from '../data/sponsors';

export default function Sponsors() {
  const control = useAnimation();
  const {ref, inView} = useInView();

  React.useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  const variants = {
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
             duration: 1,
         },
    },
  };

  return (
    <Container maxW="container.lg" px={8} py={4} align="center">
      <Heading as="h2" size="xl">
        Sponsors
      </Heading>

      {/* <motion.div
        ref = {ref}
        initial={{scale: 0.9, opacity: 0}}
        animate={control}
        variants={variants}
      >
        <Wrap justify="center">
          {sponsors.monetary.map(({name, url, img}) => (   
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

        <Wrap justify="center">
          {sponsors.others.map(({name, url, img}) => (   
            <WrapItem p = {3} w= "150px" justifyContent="center" alignItems="center">   
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
          </motion.div> */}

      <Text mt={3}>
				Help us make this hackathon possible! Email us at <Link href="mailto:team@blairhacks.com">team@blairhacks.com</Link>.
			</Text>
      
      <Link href = "/donate" textColor = "white">
        <Button mt={6}
          bgGradient="linear(to-tl,purple.500,blue.500)"
          _hover={{
            bgGradient: "linear(to-tl,purple.500,blue.500)",
          }}
          _active={{
            bgGradient: "linear(to-tl,purple.500,blue.500)",
          }}
          variant="solid"
        >Donate Individually
        </Button>
      </Link><br/>

      <Link href = "/assets/BlairHacks_6 Sponsorship Package.pdf" textColor = "white">
        <Button mt={6}
          colorScheme="green"
          variant="outline"
        >View our Sponsorship Package
        </Button>
      </Link>
    </Container>
  );
}
